import {Player} from '../entities/Player.js';
import {Enemy} from '../entities/Enemigo.js';

let enemigos = [];

let player = new Player();
player.animate();
player.shoot();

function createEnemy(delay) {
    setTimeout(() => {
       enemigos.push(new Enemy());
    }, delay);
}

createEnemy(2000);
createEnemy(3000);
createEnemy(4000);
createEnemy(5000);
createEnemy(6000);
createEnemy(7000);
