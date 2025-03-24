const jugador = document.getElementById('jugador');
const area = document.getElementById('pantalla');
const base = document.getElementById('base');

let jugadorX = 0;
let jugadorY = 0;
const speed = 3;

const gameWidth = area.offsetWidth;
const gameHeight = area.offsetHeight;
const jugadorSize = 50;

let keys = {};

// Función para verificar colisión
function checkCollision(elementOne, elementTwo) { 
    const rectOne = elementOne.getBoundingClientRect();
    const rectTwo = elementTwo.getBoundingClientRect();
    return !(
        rectOne.right < rectTwo.left || 
        rectOne.left > rectTwo.right || 
        rectOne.bottom < rectTwo.top || 
        rectOne.top > rectTwo.bottom
    );
}

function animate() {
    let dx = 0;
    let dy = 0;

    if (keys['w']) dy = -speed;
    if (keys['s']) dy = speed;
    if (keys['a']) dx = -speed;
    if (keys['d']) dx = speed;

    let nextX = jugadorX + dx;
    let nextY = jugadorY + dy;

    // Evitar salir de los bordes de la pantalla en X
    if (nextX < 0) nextX = 0;
    if (nextX > gameWidth - jugadorSize) nextX = gameWidth - jugadorSize;

    // Evitar salir de los bordes de la pantalla en Y
    if (nextY < 0) nextY = 0;
    if (nextY > gameHeight - jugadorSize) nextY = gameHeight - jugadorSize;

    // Probamos primero mover solo en X
    jugador.style.left = nextX + 'px';
    if (checkCollision(jugador, base)) {
        jugador.style.left = jugadorX + 'px'; // Si hay colisión en X, cancelamos ese movimiento
    } else {
        jugadorX = nextX;
    }

    // Probamos mover solo en Y
    jugador.style.top = nextY + 'px';
    if (checkCollision(jugador, base)) {
        jugador.style.top = jugadorY + 'px'; // Si hay colisión en Y, cancelamos ese movimiento
    } else {
        jugadorY = nextY;
    }

    requestAnimationFrame(animate);
}

// Eventos de teclado
document.addEventListener('keydown', (e) => keys[e.key] = true);
document.addEventListener('keyup', (e) => keys[e.key] = false);

// Iniciar animación
requestAnimationFrame(animate);
