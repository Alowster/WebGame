export class Player {
    constructor() {
        this.jugador = document.getElementById('jugador');
        this.area = document.getElementById('pantalla');
        this.collider = document.getElementById("ground");

        this.jugadorX = 820;
        this.jugadorY = 200;

        this.speedx = 3;
        this.speedy = 2;

        this.gameWidth = this.area.offsetWidth;
        this.gameHeight = this.area.offsetHeight;
        this.jugadorSize = 155;

        this.keys = {};

        document.addEventListener('keydown', (e) => this.keys[e.key] = true);
        document.addEventListener('keyup', (e) => this.keys[e.key] = false);


    }

    animate() {
        let dx = 0;
        let dy = 0;

        // Rotar la nave
        if (this.keys['ArrowLeft']) {
            dx -= this.speedx;
        }
        if (this.keys['ArrowRight']) {
            dx += this.speedx;
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

                console.log("Disparando...")
                const bullet = document.createElement('div');
                bullet.classList.add('bullet');

                bullet.style.top = (this.jugador.offsetTop + (this.jugador.clientHeight /2 )) + 'px';
                bullet.style.left = (this.jugador.offsetLeft + (this.jugador.clientWidth / 2)) + 'px';

                this.area.appendChild(bullet);

                function moveBullet() {
                    let topPos = parseInt (bullet.style.top) || 0;
                    bullet.style.top = (topPos + 2.5) + 'px'; //2.5 vel bala
                    requestAnimationFrame(moveBullet);
                }
                requestAnimationFrame(moveBullet);
                this.bulletDelete(bullet);
            }
        }, 600);

    }

    bulletDelete(bullet) {
    
        setInterval(() => {
            if (this.checkCollision(bullet, this.collider)) {
                console.log("¡Colisión detectada!");
                this.createExplosion(bullet);
                bullet.remove();
            }
            
        }, 20); 
    }

    checkCollision(elementOne, elementTwo) { 
        const rectOne = elementOne.getBoundingClientRect();
        const rectTwo = elementTwo.getBoundingClientRect();
        return !(
            rectOne.right < rectTwo.left || 
            rectOne.left > rectTwo.right || 
            rectOne.bottom < rectTwo.top || 
            rectOne.top > rectTwo.bottom
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
        // image.src = 'assets/boomSpriteSheet.png';
        // image.classList.add('explosion_spriteSheet');
        explosion.appendChild(image);
        
        //por si acaso
        setTimeout(() => {
            explosion.remove();
        }, 600);
    }

};