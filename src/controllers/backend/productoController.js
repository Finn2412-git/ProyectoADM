const Producto = require('../../models/backend/productoModel');
const loadAppHtml = require('../../utils/loadAppHtml');
const path = require('path');
const fs = require('fs');

async function listarProductos(req, res) {
    if (req.method === 'POST') {
        // Manejar la lógica para agregar un producto
        const { nombre, valor } = req.body;

        try {
            await Producto.agregarProducto(nombre, valor);
            // Redirigir para evitar el reenvío del formulario al recargar la página
            return res.redirect('/sitio-admin/modulo-productosBD');
        } catch (error) {
            console.error('Error al agregar producto: ', error);
            return res.status(500).send('Error interno del servidor');
        }
    } else {
        // Manejar la lógica para listar los productos
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

            // Agregar el formulario para agregar productos
            html += `
                <h3>Agregar Nuevo Producto</h3>
                <form action="/sitio-admin/modulo-productosBD" method="POST">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required><br><br>

                    <label for="valor">Valor:</label>
                    <input type="number" id="valor" name="valor" required><br><br>

                    <button type="submit">Agregar Producto</button>
                </form>
            `;

            loadAppHtml('backend', 'productosBD', `${process.env.APP_NAME}: Módulo ProductosBD`, html, res);
        } catch (error) {
            console.error('Error al listar productos desde el controlador: ', error);
            res.status(500).send('Error interno del servidor');
        }
    }
}

module.exports = { listarProductos };

