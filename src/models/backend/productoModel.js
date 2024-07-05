const DataBase = require('../conexionModel');

class ProductoModel {
    constructor(id, nombre, valor) {
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;
    }

    static async listarProductos() {
        const db = DataBase.getInstance();
        try {
            const query = 'SELECT id, nombre, valor FROM productos';
            const productos = await db.ejecutarQuery(query);
            console.log('Productos encontrados: ', productos);
            return productos;
        } catch (error) {
            console.error('Error al listar productos: ', error);
            throw error;
        }
    }

    static async agregarProducto(nombre, valor) {
        const db = DataBase.getInstance();
        try {
            const query = 'INSERT INTO productos (nombre, valor) VALUES (?, ?)';
            const resultado = await db.ejecutarQuery(query, [nombre, valor]);
            console.log('Producto agregado correctamente');
            return resultado;
        } catch (error) {
            console.error('Error al agregar producto: ', error);
            throw error;
        }
    }
}

module.exports = ProductoModel;

