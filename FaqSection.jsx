const fs = require('fs');
const path = require('path');
const https = require('https');

const DB_FILE = path.join(__dirname, 'database.json');
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://mkazgkqikpsocjexlefx.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rYXpna3Fpa3Bzb2NqZXhsZWZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUyODk1MjIsImV4cCI6MjEwMDg2NTUyMn0.afvBmodqrxpIJRWHkujt1xu5_-a-2rI2qNHY8HKPx3A';

let inMemoryCache = null;

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
      price: "167.000",
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
      price: "527.000",
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
      price: "1.300.000",
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
  solicitudes: [],
  members: []
};

// Helper: HTTP request to Supabase REST API
function supabaseRequest(endpoint, method = 'GET', body = null) {
  return new Promise((resolve) => {
    if (!SUPABASE_URL || !SUPABASE_KEY) return resolve(null);
    try {
      const url = new URL(SUPABASE_URL + endpoint);
      const dataString = body ? JSON.stringify(body) : null;

      const options = {
        hostname: url.hostname,
        path: url.pathname + url.search,
        method: method,
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'resolution=merge-duplicates,return=representation'
        }
      };

      if (dataString) {
        options.headers['Content-Length'] = Buffer.byteLength(dataString);
      }

      const req = https.request(options, (res) => {
        let responseData = '';
        res.on('data', chunk => responseData += chunk);
        res.on('end', () => {
          try {
            resolve(responseData ? JSON.parse(responseData) : null);
          } catch(e) {
            resolve(null);
          }
        });
      });

      req.on('error', (err) => {
        console.error('Supabase HTTP Error:', err.message);
        resolve(null);
      });

      if (dataString) req.write(dataString);
      req.end();
    } catch(e) {
      resolve(null);
    }
  });
}

// Initial sync from Supabase Cloud on boot
async function initSupabaseSync() {
  try {
    const cloudData = await supabaseRequest('/rest/v1/kv_store?key=eq.STEVE_DROP_DB_V1&select=value');
    if (cloudData && Array.isArray(cloudData) && cloudData.length > 0 && cloudData[0].value) {
      inMemoryCache = cloudData[0].value;
      try {
        fs.writeFileSync(DB_FILE, JSON.stringify(inMemoryCache, null, 2), 'utf8');
        console.log('✓ Base de datos sincronizada y restaurada con éxito desde Supabase Cloud');
      } catch(e){}
    } else {
      console.log('ℹ️ Inicializando tabla en Supabase Cloud...');
      const current = readDB();
      await supabaseRequest('/rest/v1/kv_store', 'POST', {
        key: 'STEVE_DROP_DB_V1',
        value: current
      });
    }
  } catch(e) {
    console.error('Error al sincronizar con Supabase:', e);
  }
}

// Boot background sync
initSupabaseSync();

function readDB() {
  if (inMemoryCache) {
    return inMemoryCache;
  }
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify(INITIAL_DB, null, 2), 'utf8');
    inMemoryCache = INITIAL_DB;
    return INITIAL_DB;
  }
  try {
    const data = fs.readFileSync(DB_FILE, 'utf8');
    inMemoryCache = JSON.parse(data);
    return inMemoryCache;
  } catch (err) {
    return INITIAL_DB;
  }
}

function writeDB(data) {
  inMemoryCache = data;
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch(e){}

  // Async push to Supabase Cloud
  supabaseRequest('/rest/v1/kv_store', 'POST', {
    key: 'STEVE_DROP_DB_V1',
    value: data
  });
}

module.exports = { readDB, writeDB, DB_FILE };
