import {Player} from '../entities/Player.js';
import {Enemy} from '../entities/Enemigo.js';


let enemigos = [];


function createEnemy(delay) {
    setTimeout(() => {
       enemigos.push(new Enemy());
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
