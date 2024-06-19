// Función para aplicar el control de audio después de cargar el contenido
function applyAudioControl() {
    const audio = document.getElementById('myAudio');
    const control = document.getElementById('audioControl');

    // Evento para alternar la reproducción del audio
    control.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().catch(error => {
                console.log('Reproducción automática bloqueada por el navegador:', error);
            });
            control.textContent = '🔊';
        } else {
            audio.pause();
            control.textContent = '🔇';
        }
        // Guardar estado de reproducción en localStorage
        localStorage.setItem('audioState', audio.paused ? 'paused' : 'playing');
    });

    // Verificar el estado de reproducción almacenado al cargar la página
    const storedState = localStorage.getItem('audioState');
    if (storedState === 'playing') {
        control.textContent = '🔊';
    } else {
        control.textContent = '🔇';
    }

    // Evento para iniciar la reproducción del audio al hacer clic en cualquier parte de la página
    document.addEventListener('click', function playAudioOnClick() {
        if (audio.paused && storedState !== 'paused') {
            audio.play().catch(error => {
                console.log('Reproducción automática bloqueada por el navegador:', error);
            });
            localStorage.setItem('audioState', 'playing');
            control.textContent = '🔊';
        }
        // Remover el evento después de que se ha hecho clic una vez
        document.removeEventListener('click', playAudioOnClick);
    }, { once: true });

    // Almacenar la posición de reproducción actual
    if (localStorage.getItem('audioCurrentTime')) {
        audio.currentTime = localStorage.getItem('audioCurrentTime');
    }

    // Guardar la posición de reproducción actual antes de descargar la página
    window.addEventListener('beforeunload', function() {
        localStorage.setItem('audioCurrentTime', audio.currentTime);
    });
}

// Cargar el control de audio al cargar la página inicialmente
document.addEventListener('DOMContentLoaded', function() {
    applyAudioControl();
});