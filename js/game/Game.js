import {Player} from '../entities/Player.js';
import {Enemy} from '../entities/Enemigo.js';

let explosion = [];

let player = new Player();
player.animate();
player.shoot();

let enemy1 = new Enemy();

setTimeout(() => {
    let enemy2 = new Enemy();
}, 2000);

setTimeout(() => {
    let enemy3 = new Enemy();
}, 3000);

setTimeout(() => {
    let enemy4 = new Enemy();
}, 4000);

setTimeout(() => {
    let enemy5 = new Enemy();
}, 5000);

setTimeout(() => {
    let enemy6 = new Enemy();
}, 6000);

setTimeout(() => {
    let enemy6 = new Enemy();
}, 7000);


