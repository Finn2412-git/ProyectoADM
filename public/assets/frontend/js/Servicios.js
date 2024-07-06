const express = require('express');
const router = express.Router();
const Producto = require('../models/backend/productoModel');

router.get('/servicios', async (req, res) => {
    try {
        // Obtener productos desde el modelo
        const productos = await Producto.listarProductos();

        // Renderizar la página de servicios con los productos
        res.render('servicios', { productos });
    } catch (error) {
        console.error('Error al obtener productos en servicios:', error);
        res.status(500).send('Error interno del servidor');
    }
});

module.exports = router;
