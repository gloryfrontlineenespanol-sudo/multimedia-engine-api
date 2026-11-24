# Multimedia Engine API
Servidor inicial Node.js + Express para preparar integraciones mediante APIs oficiales.

## Ejecutar
Requiere Node.js 20+. Ejecuta `npm install` y después `npm start`.

## Endpoints
- `GET /` información del servicio
- `GET /health` estado del servidor
- `GET /api` índice
- `GET /api/platforms` plataformas previstas
- `POST /api/resolve` punto de entrada reservado

## Secretos
Usa `.env.example` como referencia. Nunca subas `.env`, claves API, contraseñas ni tokens a GitHub. En Render se configuran en Environment.

## Estado
Esta es una base funcional del servidor, no un descargador terminado. Las integraciones deben desarrollarse y probarse. Las APIs oficiales de Spotify y YouTube no permiten descargar libremente canciones protegidas. Meta requiere permisos y acceso autorizado. No se debe evadir DRM ni controles de acceso.
