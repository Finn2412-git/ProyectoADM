require('dotenv').config();

const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('connect-flash');

// Rutas
const frontendRoutes = require('./routes/frontendRoutes');
const backendRoutes = require('./routes/backendRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = process.env.SERVER_PORT || 3000;

// Configurar body-parser para analizar solicitudes de application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Configurar body-parser para analizar solicitudes de application/json
app.use(bodyParser.json());

// Configuración de express-session
app.use(session({
    secret: process.env.SESSION_SECRET, // Utiliza la variable de entorno
    resave: true,
    saveUninitialized: true
}));

// Configurar connect-flash
app.use(flash());

// Configurar Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', frontendRoutes);
app.use('/sitio-admin', backendRoutes);
app.use('/auth', authRoutes);


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});