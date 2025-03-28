const bulletVelocity = 2.5;

function shoot() {
    console.log('Disparando...');

    const pantalla = document.getElementById('pantalla');

    const jugador = document.getElementById('jugador');

    const bullet = document.createElement('div');
    bullet.classList.add('bullet');

    // Posiciona la bala dentro del jugador
    bullet.style.top = (jugador.offsetTop + (jugador.clientHeight /2 )) + 'px';
    bullet.style.left = (jugador.offsetLeft + (jugador.clientWidth / 2)) + 'px';

    pantalla.appendChild(bullet);

    function moveBullet() {
        let topPos = parseInt (bullet.style.top) || 0;
        bullet.style.top = (topPos + bulletVelocity) + 'px';
        requestAnimationFrame(moveBullet);
    }
    requestAnimationFrame(moveBullet);
    bulletDelete(bullet);
}

function bulletDelete(bullet) {

    const collider = document.getElementById("ground");

    setInterval(() => {
        if (checkCollision(bullet, collider)) {
            console.log("¡Colisión detectada!");
            createExplosion(bullet);
            bullet.remove();
        }
    }, 20); 
}

// Eventos de teclado
document.addEventListener('keydown', (e) => keys[e.key] = true);
document.addEventListener('keyup', (e) => keys[e.key] = false);

