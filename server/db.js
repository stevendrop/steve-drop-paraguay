const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'database.json');

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
  ]
};

function readDB() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify(INITIAL_DB, null, 2), 'utf8');
    return INITIAL_DB;
  }
  try {
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return INITIAL_DB;
  }
}

function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
}

module.exports = { readDB, writeDB, DB_FILE };
