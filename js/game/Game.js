import {Player} from '../entities/Player.js';
import {Enemy} from '../entities/Enemigo.js';

let enemigos = [];
let vidaCastillo = { valor: 100 };
const barraVida = document.getElementById('vida-barra');

function createEnemy(delay) {
    setTimeout(() => {
      const enemigo = new Enemy(vidaCastillo, barraVida);
      enemigos.push(enemigo);
    }, delay);
  }

createEnemy(1000);
createEnemy(4000);
createEnemy(8000);
createEnemy(12000);
createEnemy(16000);
createEnemy(24000);

let player = new Player();
player.animate();
player.shoot();

player.setEnemigos(enemigos);

enemigos.forEach((enemigo, index) => {
    if (enemigo.element && checkCollision(castillo, enemigo.element)) {
        if (vidaCastillo > 0) {
            vidaCastillo -= 1;
            barraVida.style.width = vidaCastillo + "%";

        }
    }
});

function checkCollision(obj1, obj2) {
    let rect1 = obj1.getBoundingClientRect();
    let rect2 = obj2.getBoundingClientRect();
    return (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
    );
}