const express = require('express');
const cors = require('cors');
const path = require('path');
const { readDB, writeDB } = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
// Allow large JSON payloads (for base64 receipt images)
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Serve static frontend files
app.use(express.static(path.join(__dirname, '..')));

// Public API - Get dynamic website content
app.get('/api/public-content', (req, res) => {
  const db = readDB();
  res.json({
    settings: db.settings,
    hero: db.hero,
    plans: (db.plans || []).filter(p => p.active !== false),
    faqs: db.faqs || []
  });
});

// Public API - Submit new user order/application
app.post('/api/solicitudes', (req, res) => {
  try {
    const solicitud = req.body;
    if (!solicitud || !solicitud.firstName) {
      return res.status(400).json({ error: 'Datos de solicitud requeridos' });
    }
    const db = readDB();
    if (!db.solicitudes) db.solicitudes = [];
    db.solicitudes.unshift(solicitud);
    writeDB(db);
    console.log("✓ Solicitud recibida y guardada:", solicitud.firstName, solicitud.lastName);
    res.json({ success: true, message: 'Solicitud registrada correctamente en el servidor' });
  } catch (err) {
    console.error("Error al guardar solicitud:", err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Admin Auth API
app.post('/api/auth/login', (req, res) => {
  const { password } = req.body;
  const db = readDB();

  if (password === 'stevedrop2026' || (db.settings && db.settings.adminPassword === password)) {
    return res.json({ success: true, token: 'session_token_' + Date.now() });
  }

  return res.status(401).json({ success: false, message: 'Contraseña incorrecta' });
});

// Admin API - Get full database
app.get('/api/admin/db', (req, res) => {
  const db = readDB();
  res.json(db);
});

// Admin API - Save full database
app.post('/api/admin/db', (req, res) => {
  const newDb = req.body;
  if (!newDb || typeof newDb !== 'object') {
    return res.status(400).json({ error: 'Formato de base de datos inválido' });
  }
  writeDB(newDb);
  res.json({ success: true, message: 'Base de datos guardada exitosamente' });
});

// Catch-all route to serve index.html or admin.html
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'admin.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor Steve Drop activo en http://localhost:${PORT}`);
  console.log(`🔐 Panel de Administración: http://localhost:${PORT}/admin`);
});
