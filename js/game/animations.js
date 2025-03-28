function createExplosion(bullet) {

    const pantalla = document.getElementById('pantalla');

    console.log("createExplosio");
    const explosion = document.createElement('div');
    explosion.classList.add('explosion');
    pantalla.appendChild(explosion);

    explosion.style.position = 'absolute';
    explosion.style.left = bullet.style.left;
    explosion.style.top = bullet.style.top;
    
    const image = document.createElement('img');
    image.src = 'assets/boomSpriteSheet.png';
    image.classList.add('explosion_spriteSheet');
    explosion.appendChild(image);

//eliminar explosion
    setTimeout(() => {
        explosion.remove();
    }, 600);
}

let div = document.getElementById('jugador_spriteSheet');

function helicopterRight(){
        cambiarAnimacion('rotateRight');

        div.classList.remove('jugador_left_spriteSheet');
        div.classList.add('jugador_right_spriteSheet');

}

function helicopterLeft(){
    cambiarAnimacion('rotateLeft');

    div.classList.remove('jugador_right_spriteSheet');
    div.classList.add('jugador_left_spriteSheet');

}

function cambiarAnimacion(animacion) {
    div.style.animationName = animacion;
}
