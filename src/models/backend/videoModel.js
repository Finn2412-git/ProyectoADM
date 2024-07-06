const DataBase = require('../conexionModel');

class VideoModel {
    constructor(id, nombre, url) {
        this.id = id;
        this.nombre = nombre;
        this.url = url;
    }

    static async MostrarVideo(id) {
        const db = DataBase.getInstance();
        try {
            const query = 'SELECT id, nombre, url FROM video WHERE id = ?';
            const [result] = await db.ejecutarQuery(query, [id]);
            console.log('Video encontrado: ', result);
            return result;
        } catch (error) {
            console.error('Error al obtener el video: ', error);
            throw error;
        }
    }
}

module.exports = VideoModel;
