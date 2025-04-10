import { Enemy } from "./Enemigo.js";

export class Player {
    constructor() {
        this.jugador = document.getElementById('jugador');
        this.area = document.getElementById('pantalla');
        this.collider = document.getElementById("ground");
        this.jugadorSprite = document.getElementById('jugador_spriteSheet');
        this.jugadorX = 820;
        this.jugadorY = 200;
        this.contador1 = document.getElementById('contador1');
        this.speedx = 4;
        this.speedy = 3;

        this.gameWidth = this.area.offsetWidth;
        this.gameHeight = this.area.offsetHeight;
        this.jugadorSize = 155;

        this.keys = {};

        document.addEventListener('keydown', (e) => this.keys[e.key] = true);
        document.addEventListener('keyup', (e) => this.keys[e.key] = false);

        this.enemigos = [];
        this.numKills = 0;
    }
    
    setEnemigos(_enemigos) {
        this.enemigos = _enemigos;
    }

    animate() {
        let dx = 0;
        let dy = 0;

        // Rotar la nave
        if (this.keys['ArrowLeft']) {
            dx -= this.speedx;
            this.helicopterLeft();
        }
        if (this.keys['ArrowRight']) {
            dx += this.speedx;
            this.helicopterRight();
        }
        if (this.keys['ArrowUp']) {
            dy -= this.speedy;
        }
        if (this.keys['ArrowDown']) {
            dy += this.speedy;
        }

        let nextX = this.jugadorX + dx;
        let nextY = this.jugadorY + dy;

        if (nextX < -10) nextX = -10;
        if (nextX > this.gameWidth - this.jugadorSize) nextX = this.gameWidth - this.jugadorSize;
        if (nextY < 0) nextY = 0;
        if (nextY > 685) nextY = 685;

        this.jugadorX = nextX;
        this.jugadorY = nextY;
        this.jugador.style.left = this.jugadorX + 'px';
        this.jugador.style.top = this.jugadorY + 'px';

        requestAnimationFrame(() => (this.animate()));

    }

    shoot() {
        setInterval(() => {
            if (this.keys['e']) {

                // console.log("Disparando...")
                const bullet = document.createElement('div');
                bullet.classList.add('bullet');

                bullet.style.top = (this.jugador.offsetTop + (this.jugador.clientHeight /2 )) + 'px';
                bullet.style.left = (this.jugador.offsetLeft + (this.jugador.clientWidth / 2)) + 'px';

                this.area.appendChild(bullet);

                function moveBullet() {
                    let topPos = parseInt (bullet.style.top) || 0;
                    bullet.style.top = (topPos + 3.6) + 'px'; //3 vel bala


                    requestAnimationFrame(moveBullet);
                }
                requestAnimationFrame(moveBullet);
                this.bulletDelete(bullet);
            }
        }, 400);

    }

    bulletDelete(bullet) {
        setInterval(() => {
            if (this.checkCollision(bullet, this.collider)) {
                // console.log("¡Colisión detectada!");
                this.createExplosion(bullet);
                
                bullet.remove();
            }
            
        }, 20); 
    }

    checkCollision(obj1, obj2) {
        let rect1 = obj1.getBoundingClientRect();
        let rect2 = obj2.getBoundingClientRect();
        return (
            rect1.left < rect2.right &&
            rect1.right > rect2.left &&
            rect1.top < rect2.bottom &&
            rect1.bottom > rect2.top
        );
    }

    createExplosion(bullet) {
        console.log("createExplosion");
        const explosion = document.createElement('div');
        explosion.classList.add('explosion');
        explosion.id = 'explosion';
        this.area.appendChild(explosion);
    
        explosion.style.position = 'absolute';
        explosion.style.left = bullet.style.left;
        explosion.style.top = bullet.style.top;
        
        const image = document.createElement('img');
        image.src = 'assets/boomSpriteSheet.png';
        image.classList.add('explosion_spriteSheet');
        explosion.appendChild(image);

        this.enemigos.forEach(element => {
            if (this.checkCollision(explosion, element.enemy)) {
                element.resetPosition(element.enemy, element.enemyVelocity);
                this.numKills+=1;
                this.contador1.textContent = "ENEMIGOS ABATIDOS: " + this.numKills;
            }
        });

        //por si acaso
        setTimeout(() => {
            explosion.remove();
        }, 600);
    }
 
    helicopterRight(){
            this.cambiarAnimacion('rotateRight');
    
            this.jugadorSprite.classList.remove('jugador_left_spriteSheet');
            this.jugadorSprite.classList.add('jugador_right_spriteSheet');
    
    }
    
    helicopterLeft(){
        this.cambiarAnimacion('rotateLeft');
    
        this.jugadorSprite.classList.remove('jugador_right_spriteSheet');
        this.jugadorSprite.classList.add('jugador_left_spriteSheet');
    
    }
    
    cambiarAnimacion(animacion) {
        this.jugadorSprite.style.animationName = animacion;
    }    
}
