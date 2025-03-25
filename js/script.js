const jugador = document.getElementById('jugador');
const area = document.getElementById('pantalla');

let jugadorX = 200;
let jugadorY = 200;
let angle = 0; // Ángulo de rotación en grados
const speed = 2.2;
const rotationSpeed = 1.1; // Velocidad de giro

const gameWidth = area.offsetWidth;
const gameHeight = area.offsetHeight;
const jugadorSize = 50;

let keys = {};

function animate() {
    let dx = 0;
    let dy = 0;

    // Rotar la nave
    if (keys['a'] || keys['A']) {
        angle -= rotationSpeed;
    }
    if (keys['d'] || keys['D']) {
        angle += rotationSpeed;
    }

    // Mover la nave en la dirección en la que apunta
    dx = Math.cos(angle * Math.PI / 180) * speed;
    dy = Math.sin(angle * Math.PI / 180) * speed;

    let nextX = jugadorX + dx;
    let nextY = jugadorY + dy;

    // Evitar salir de los bordes de la pantalla
    if (nextX < 0) nextX = 0;
    if (nextX > gameWidth - jugadorSize) nextX = gameWidth - jugadorSize;
    if (nextY < 0) nextY = 0;
    if (nextY > gameHeight - jugadorSize) nextY = gameHeight - jugadorSize;

    // Aplicar movimiento y rotación
    jugadorX = nextX;
    jugadorY = nextY;
    jugador.style.left = jugadorX + 'px';
    jugador.style.top = jugadorY + 'px';
    jugador.style.transform = `rotate(${angle}deg)`;

    requestAnimationFrame(animate);
}

// Eventos de teclado
document.addEventListener('keydown', (e) => keys[e.key] = true);
document.addEventListener('keyup', (e) => keys[e.key] = false);

// Iniciar animación
requestAnimationFrame(animate);


// function checkCollision(elementOne, elementTwo) { 
//     const rectOne = elementOne.getBoundingClientRect();
//     const rectTwo = elementTwo.getBoundingClientRect();
//     return !(
//         rectOne.right < rectTwo.left || 
//         rectOne.left > rectTwo.right || 
//         rectOne.bottom < rectTwo.top || 
//         rectOne.top > rectTwo.bottom
//     );
// }