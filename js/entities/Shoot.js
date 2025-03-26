
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
        bullet.style.top = (topPos + 5) + 'px';
        requestAnimationFrame(moveBullet);
    }

    requestAnimationFrame(moveBullet);

    bulletDelete(bullet);
}

function bulletDelete(bullet) {
    setTimeout(() => {
        bullet.remove();
        console.log("I don`t know how but this pile of crap compiles.")
    }, 3000);

}


// Eventos de teclado
document.addEventListener('keydown', (e) => keys[e.key] = true);
document.addEventListener('keyup', (e) => keys[e.key] = false);

// Disparar cada 50 milisegundos
setInterval(keyPress, 700);
requestAnimationFrame(keyPress);
