const express = require('express');
const router = express.Router();
const loadAppHtml = require('../utils/loadAppHtml');
const { MostrarProductos } = require('../controllers/backend/productoController');
const { mostrarVideo } = require('../controllers/backend/videoController');

const tipo_plantilla = 'frontend';

router.get('/', (req, res) => {
    loadAppHtml(tipo_plantilla, 'index', `${process.env.APP_NAME}: Home`, 'Bienvenido al centro de reclutamiento del Adeptus Mechanicus', res);
});

router.get('/nosotros', (req, res) => {
    loadAppHtml(tipo_plantilla, 'nosotros', `${process.env.APP_NAME}: Nosotros`, 'Misión: Lorem ipsum dolor.', res);
});

router.get('/servicios', MostrarProductos);

router.get('/contacto', (req, res) => {
    loadAppHtml(tipo_plantilla, 'contacto', `${process.env.APP_NAME}: Contacto`, 'Correo de contacto: example@example.cl', res);
});

// Ruta para mostrar el video en paginaderelleno
router.get('/paginaderelleno', mostrarVideo);

module.exports = router;
