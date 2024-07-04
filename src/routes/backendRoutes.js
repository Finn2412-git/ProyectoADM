const express = require('express');
const router = express.Router();
const loadAppHtml = require('../utils/loadAppHtml');
const authMiddleware = require('../controllers/middlewares/authMiddleware');
const { listarProductos } = require('../controllers/backend/productoController');

const tipo_plantilla = 'backend';

router.get('/dashboard', authMiddleware, (req, res) => {
    loadAppHtml(tipo_plantilla, 'dashboard', `${process.env.APP_NAME}: Dashboard`, 'Bienvenido al panel de administración', res);
});

router.get('/modulo-usuarios', authMiddleware, (req, res) => {
    loadAppHtml(tipo_plantilla, 'usuarios', `${process.env.APP_NAME}: Módulo Usuarios`, 'Gestión de usuarios', res);
});

router.get('/modulo-clientes', authMiddleware, (req, res) => {
    loadAppHtml(tipo_plantilla, 'clientes', `${process.env.APP_NAME}: Módulo Clientes`, 'Gestión de Clientes', res);
});

router.get('/modulo-productosBD', authMiddleware, listarProductos);

module.exports = router;