
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const routes = require('./routes/platforms');

const app = express();

app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.get('/', (_req, res) => {
  res.json({
    name: 'Multimedia Engine API',
    status: 'online',
    version: '1.0.0'
  });
});

app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

app.get('/api', (_req, res) => {
  res.json({
    endpoints: [
      'GET /health',
      'GET /api/platforms',
      'POST /api/resolve'
    ]
  });
});

app.use('/api', routes);

const port = Number(process.env.PORT) || 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`API escuchando en ${port}`);
});
