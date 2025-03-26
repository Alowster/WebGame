const bulletVelocity = 2.5;

function keyPress () {
    if(keys['e']) {
        shoot();
    }
}

function shoot() {
    console.log('Disparando...');

    const constrait = document.getElementById('pantalla');
    if(!constrait) return;

    const jugador = document.getElementById('jugador');

    const bullet = document.createElement('div');
    bullet.classList.add('bullet');

    // Posiciona la bala dentro del jugador
    bullet.style.top = jugador.offsetTop + 'px';
    bullet.style.left = (jugador.offsetLeft + (jugador.clientWidth / 2)) + 'px';

    constrait.appendChild(bullet);

    function moveBullet() {
        let topPos = parseInt (bullet.style.top) || 0;
        bullet.style.top = (topPos + bulletVelocity) + 'px';
        requestAnimationFrame(moveBullet);
    }
    requestAnimationFrame(moveBullet);
    bulletDelete(bullet);
}

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

function bulletDelete(bullet) {

    const collider = document.getElementById("ground");

    setInterval(() => {
        if (checkCollision(bullet, collider)) {
            console.log("¡Colisión detectada!");
            createExplosion(bullet);
            bullet.remove();
        }
    }, 30); 

}


// Eventos de teclado
document.addEventListener('keydown', (e) => keys[e.key] = true);
document.addEventListener('keyup', (e) => keys[e.key] = false);

// Disparar cada 50 milisegundos
setInterval(keyPress, 600);
