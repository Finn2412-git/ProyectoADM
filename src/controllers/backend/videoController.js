const VideoModel = require('../../models/backend/videoModel');
const loadAppHtml = require('../../utils/loadAppHtml');

// Controlador para mostrar el video con ID 1 centrado en la página
async function mostrarVideo(req, res) {
    const videoId = 1; // ID específico del video que deseas mostrar (en este caso, el ID 1)
    try {
        const video = await VideoModel.MostrarVideo(videoId);
        let html;

        if (video) {
            html = `
                <h3>${video.nombre}</h3>
                <div class="video-container">
                    <video controls>
                        <source src="${video.url}" type="video/mp4">
                        Tu navegador no soporta la etiqueta de video.
                    </video>
                </div>
            `;
        } else {
            html = '<h3>Video no encontrado</h3>';
        }

        loadAppHtml('frontend', 'paginaderelleno', `${process.env.APP_NAME}: Video`, html, res);
    } catch (error) {
        console.error('Error al mostrar el video desde el controlador: ', error);
        res.status(500).send('Error interno del servidor');
    }
}

module.exports = { mostrarVideo };
