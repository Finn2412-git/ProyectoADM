const Producto = require('../../models/backend/productoModel');
const loadAppHtml = require('../../utils/loadAppHtml');

// Controlador para listar productos y mostrar formularios de agregar y editar
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
            html += '</tr>';

            productos.forEach((producto) => {
                html += `<tr>`;
                html += `<td>${producto.id}</td>`;
                html += `<td>${producto.nombre}</td>`;
                html += `<td>${producto.valor}</td>`;
                html += `</tr>`;
            });

            html += '</table>';
        } else {
            html = '<h3>No hay productos para mostrar</h3>';
        }

        // Formulario para agregar productos
        html += `
            <h3>Agregar Nuevo Producto</h3>
            <form action="/sitio-admin/modulo-productosBD/agregar" method="POST">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required><br><br>

                <label for="valor">Valor:</label>
                <input type="number" id="valor" name="valor" required><br><br>

                <button type="submit">Agregar Producto</button>
            </form>
        `;

        // Formulario para editar productos
        html += `
            <h3>Editar Producto</h3>
            <form action="/sitio-admin/modulo-productosBD/editar" method="POST">
                <label for="id">ID del Producto:</label>
                <input type="number" id="id" name="id" required><br><br>

                <label for="nombre">Nuevo Nombre:</label>
                <input type="text" id="nombre" name="nombre" required><br><br>

                <label for="valor">Nuevo Valor:</label>
                <input type="number" id="valor" name="valor" required><br><br>

                <button type="submit">Editar Producto</button>
            </form>
        `;

        loadAppHtml('backend', 'productosBD', `${process.env.APP_NAME}: Módulo ProductosBD`, html, res);
    } catch (error) {
        console.error('Error al listar productos desde el controlador: ', error);
        res.status(500).send('Error interno del servidor');
    }
}



async function MostrarProductos(req, res) {
    try {
        const productos = await Producto.listarProductos();
        let html;

        if (productos.length > 0) {
            html = `
                <h3>Lista de Productos</h3>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="/assets/frontend/css/Servicios.css">
                <div class="main-container">
                    <div class="productos-container" id="productos-container">
            `;

            productos.forEach((producto) => {
                html += `
                    <div class="producto" onclick="mostrarDetalleProducto('${producto.nombre}', '${producto.valor}', '${producto.imagen_url}')">
                        <img src="${producto.imagen_url}" alt="${producto.nombre}">
                        <h4>${producto.nombre}</h4>
                        <span>Precio: ${producto.valor}</span>
                    </div>
                `;
            });

            html += `
                    </div>
                    <div class="detalle-producto" id="detalle-producto">
                        <!-- Los detalles del producto seleccionado se mostrarán aquí -->
                    </div>
                </div>
                <script>
                    function mostrarDetalleProducto(nombre, valor, img) {
                        const detalleProducto = document.getElementById('detalle-producto');
                        detalleProducto.innerHTML = \`
                            <h4>\${nombre}</h4>
                            <img src="\${img}" alt="\${nombre}">
                            <span>Precio: \${valor}</span>
                        \`;
                    }
                </script>
            `;
        } else {
            html = '<h3>No hay productos para mostrar</h3>';
        }

        loadAppHtml('frontend', 'servicios', `${process.env.APP_NAME}: Módulo servicios`, html, res);
    } catch (error) {
        console.error('Error al listar productos desde el controlador: ', error);
        res.status(500).send('Error interno del servidor');
    }
}







// Controlador para agregar un producto
async function agregarProducto(req, res) {
    const { nombre, valor } = req.body;

    try {
        await Producto.agregarProducto(nombre, valor);
        // Redirigir para evitar el reenvío del formulario al recargar la página
        return res.redirect('/sitio-admin/modulo-productosBD');
    } catch (error) {
        console.error('Error al agregar producto: ', error);
        return res.status(500).send('Error interno del servidor');
    }
}

// Controlador para editar un producto
async function editarProducto(req, res) {
    const { id, nombre, valor } = req.body;

    try {
        await Producto.editarProducto(id, nombre, valor);
        // Redirigir para evitar el reenvío del formulario al recargar la página
        return res.redirect('/sitio-admin/modulo-productosBD');
    } catch (error) {
        console.error('Error al editar producto: ', error);
        return res.status(500).send('Error interno del servidor');
    }
}

module.exports = { listarProductos, agregarProducto, editarProducto, MostrarProductos };
