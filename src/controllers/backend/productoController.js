// productoController.js

const Producto = require('../../models/backend/productoModel');
const loadAppHtml = require('../../utils/loadAppHtml');
const path = require('path');
const fs = require('fs');

async function listarProductos(req, res) {
    try {
        const productos = await Producto.listarProductos();
        let html;

        if (productos.length > 0) {
            html = '<h3>Lista de Productos</h3>';
            html += '<table class="lista-productos">';
            html += '<tr>';
            html += '<th>ID</th>';
            html += '<th>Nombre</th>';
            html += '<th>Valor</th>';
            html += '<th>Acciones</th>';
            html += '</tr>';

            productos.forEach((producto) => {
                html += `<tr>`;
                html += `<td>${producto.id}</td>`;
                html += `<td>${producto.nombre}</td>`;
                html += `<td>${producto.valor}</td>`;
                html += `<td><a class="btn btn-primary" href='/sitio-admin/modulo-editar-producto/${producto.id}'>Editar</a></td>`;
                html += `</tr>`;
            });

            html += '</table>';
        } else {
            html = '<h3>No hay productos para mostrar</h3>';
        }

        loadAppHtml('backend', 'productosBD', `${process.env.APP_NAME}: Módulo ProductosBD`, html, res);
    } catch (error) {
        console.error('Error al listar productos desde el controlador: ', error);
        res.status(500).send('Error interno del servidor');
    }
}

module.exports = { listarProductos };
