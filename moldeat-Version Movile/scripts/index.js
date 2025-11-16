function comenzarJuego() {
    console.log('¡Comenzando el juego!');
    window.location.href = 'seleccion.php';
}

// Prevenir zoom en móviles
document.addEventListener('DOMContentLoaded', function() {
    // Prevenir el zoom con gestos
    document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
    });
    
    // Prevenir el doble tap zoom
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(e) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Efecto hover para el botón
    const btnComenzar = document.querySelector('.btn-comenzar');
    if (btnComenzar) {
        btnComenzar.addEventListener('touchstart', function() {
            this.style.transform = 'translate(2px, 2px)';
        });
        
        btnComenzar.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    }
});
