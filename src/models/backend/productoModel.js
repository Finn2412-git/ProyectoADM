// productoModel.js

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
}

module.exports = ProductoModel;