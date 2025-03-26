const jugador = document.getElementById('jugador');
const area = document.getElementById('pantalla');

let jugadorX = 600;
let jugadorY = 200;
const speedx = 3;
const speedy = 2;

const gameWidth = area.offsetWidth;
const gameHeight = area.offsetHeight;
const jugadorSize = 50;

let keys = {};

function animate() {
    
    let dx = 0;
    let dy = 0;

    // Rotar la nave
    if (keys['ArrowLeft']) {
        dx -= speedx;
    }
    if (keys['ArrowRight']) {
        dx += speedx;
    }
    if (keys['ArrowUp']) {
        dy -= speedy;
    }
    if (keys['ArrowDown']) {
        dy += speedy;
    }

    let nextX = jugadorX + dx;
    let nextY = jugadorY + dy;

    // Evitar salir de los bordes de la pantalla
    if (nextX < 0) {
        nextX = 0
    }
    if (nextX > gameWidth - jugadorSize) {
        nextX = gameWidth - jugadorSize
    }
    if (nextY < 0) {
        nextY = 0
    }
    if (nextY > 705) {
        nextY = 705
    }

    // Aplicar movimiento y rotación
    jugadorX = nextX;
    jugadorY = nextY;
    jugador.style.left = jugadorX + 'px';
    jugador.style.top = jugadorY + 'px';

    requestAnimationFrame(animate);
}

// Eventos de teclado
document.addEventListener('keydown', (e) => keys[e.key] = true);
document.addEventListener('keyup', (e) => keys[e.key] = false);

// Iniciar animación
requestAnimationFrame(animate);