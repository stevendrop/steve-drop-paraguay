const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = 'steve-drop';
const COLLECTION_KEY = 'STEVE_DROP_DB_V1';

// ─── Schema ───────────────────────────────────────────────────────────────────
const kvSchema = new mongoose.Schema({
  key:   { type: String, required: true, unique: true },
  value: { type: mongoose.Schema.Types.Mixed, required: true }
}, { collection: 'kv_store' });

const KVStore = mongoose.models.KVStore || mongoose.model('KVStore', kvSchema);

// ─── In-memory cache (desaparece solo si el proceso se reinicia; se restaura desde Mongo) ─
let inMemoryCache = null;

// ─── Base de datos inicial ────────────────────────────────────────────────────
const INITIAL_DB = {
  admin: {
    passwordHash: "8c3df138bf64117b6a18d1eb081dc97f26f2a6cb8a49c952086e30b6c230623d" // stevedrop2026
  },
  settings: {
    contactPhone: "0974804611",
    bankName: "Banco Familiar",
    accountHolder: "Aún no definido"
  },
  hero: {
    badge: "Formación premium · Paraguay",
    subtitle: "Aprende el mismo sistema que me permitió vivir completamente del Dropshipping desde diciembre de 2025 y que ya ayudó a más de 200 alumnos a construir negocios reales."
  },
  plans: [
    {
      id: "inicio",
      name: "Inicio",
      tagline: "Aprende el sistema",
      price: "210.000",
      oldPrice: "",
      badge: "Formación Básica",
      highlight: false,
      active: true,
      displayOrder: 1,
      features: [
        "Curso completo paso a paso",
        "Meta Ads para Paraguay",
        "Configuración de Shopify",
        "Landing Pages de alta conversión",
        "Copywriting persuasivo",
        "Edición de videos publicitarios",
        "Más de 10 horas de respuestas a dudas",
        "30 días de acceso a comunidad",
        "4 mentorías grupales en vivo",
        "Acceso a Steve Candia AI Copy"
      ]
    },
    {
      id: "impulso",
      name: "Impulso",
      tagline: "Acelera tus resultados",
      price: "697.000",
      oldPrice: "",
      badge: "Más Vendido",
      highlight: false,
      active: true,
      displayOrder: 2,
      features: [
        "Todo lo incluido en nivel Inicio",
        "3 meses de acceso a comunidad",
        "30 días de soporte privado 1 a 1",
        "3 mentorías privadas en vivo",
        "Productos ganadores constantemente",
        "Acceso a Steve Candia AI Hunter"
      ]
    },
    {
      id: "elite",
      name: "Elite",
      tagline: "Escala tu negocio",
      price: "1.600.000",
      oldPrice: "",
      badge: "Acompañamiento VIP",
      highlight: true,
      active: true,
      displayOrder: 3,
      features: [
        "Todo lo incluido en nivel Impulso",
        "6 meses de acceso a comunidad",
        "6 meses de soporte prioritario",
        "9 mentorías privadas 1 a 1 en vivo",
        "Catálogo VIP de productos ganadores",
        "Acceso completo a Steve Candia AI Builder"
      ]
    }
  ],
  faqs: [
    { id: "faq1", question: "¿Cuánto tiempo tengo acceso al contenido?", answer: "El acceso al curso es de por vida. La comunidad, soporte y mentorías dependen del nivel que elijas." },
    { id: "faq2", question: "¿Las mentorías son en vivo?", answer: "Sí. Cada nivel incluye mentorías grupales o privadas en vivo, donde resolvemos casos reales." },
    { id: "faq3", question: "¿Funciona en Paraguay?", answer: "Sí. El sistema está adaptado al mercado local, incluyendo pasarela de pago, logística y productos." }
  ],
  youtubeVideo: {
    url: "https://youtu.be/QGSU5sGkmc0?si=-V-v-QFjHICqyuJF",
    title: "🔥 GYM, NEGOCIOS Y DROPSHIPPING: Así fue Steve Drop Experience",
    desc: "De 0 a 100 vendiendo productos físicos en Paraguay. Así vivimos una experiencia diferente de dropshipping y e-commerce con Dropi.",
    badge: "Canal Oficial de YouTube",
    btnText: "Ver Video en YouTube",
    channelUrl: "https://youtube.com/@stevecandia1272?si=565jQKG-pwKS8gj3"
  },
  solicitudes: [],
  members: []
};

// ─── Conexión a MongoDB ───────────────────────────────────────────────────────
let mongoConnected = false;

async function connectMongo() {
  if (mongoConnected) return;
  if (!MONGODB_URI) {
    console.error('❌ MONGODB_URI no está definida. Agrega la variable de entorno en Render.');
    return;
  }
  try {
    await mongoose.connect(MONGODB_URI, { dbName: DB_NAME });
    mongoConnected = true;
    console.log('✅ Conectado a MongoDB Atlas correctamente');
    await initFromMongo();
  } catch (err) {
    console.error('❌ Error al conectar con MongoDB:', err.message);
  }
}

// ─── Carga inicial desde MongoDB ─────────────────────────────────────────────
async function initFromMongo() {
  try {
    const doc = await KVStore.findOne({ key: COLLECTION_KEY }).lean();
    if (doc && doc.value) {
      // Protección anti-borrado: si MongoDB tiene miembros, úsalos
      inMemoryCache = doc.value;
      console.log(`✅ DB restaurada desde MongoDB. Miembros: ${(doc.value.members || []).length}, Solicitudes: ${(doc.value.solicitudes || []).length}`);
    } else {
      // Primera vez: guardar el INITIAL_DB en MongoDB
      console.log('ℹ️ Primera vez: inicializando DB en MongoDB Atlas...');
      await KVStore.findOneAndUpdate(
        { key: COLLECTION_KEY },
        { key: COLLECTION_KEY, value: INITIAL_DB },
        { upsert: true, new: true }
      );
      inMemoryCache = INITIAL_DB;
      console.log('✅ DB inicial guardada en MongoDB Atlas');
    }
  } catch (err) {
    console.error('❌ Error al inicializar desde MongoDB:', err.message);
  }
}

// Conectar al iniciar el módulo
connectMongo();

// ─── readDB ───────────────────────────────────────────────────────────────────
function readDB() {
  // Siempre retorna el cache en memoria (restaurado desde MongoDB al arrancar)
  if (inMemoryCache) return inMemoryCache;
  // Fallback si MongoDB aún no conectó
  return INITIAL_DB;
}

// ─── writeDB ──────────────────────────────────────────────────────────────────
async function writeDB(data) {
  // Protección anti-borrado: nunca sobreescribir con 0 miembros si ya había datos
  const currentMembers = (inMemoryCache?.members || []).length;
  const newMembers = (data?.members || []).length;
  if (currentMembers > 0 && newMembers === 0) {
    console.warn(`⚠️ writeDB bloqueado: intento de sobreescribir ${currentMembers} miembros con lista vacía.`);
    // Preservar los miembros actuales
    data.members = inMemoryCache.members;
    data.solicitudes = data.solicitudes?.length > 0 ? data.solicitudes : (inMemoryCache.solicitudes || []);
  }

  inMemoryCache = data;

  if (mongoConnected) {
    try {
      await KVStore.findOneAndUpdate(
        { key: COLLECTION_KEY },
        { key: COLLECTION_KEY, value: data },
        { upsert: true, new: true }
      );
      console.log(`✅ DB guardada en MongoDB. Miembros: ${(data.members || []).length}`);
    } catch (err) {
      console.error('❌ Error al guardar en MongoDB:', err.message);
    }
  } else {
    console.warn('⚠️ MongoDB no conectado, datos solo en memoria.');
  }
}

module.exports = { readDB, writeDB };
