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


    setTimeout(() => {
        explosion.remove();
    }, 1000);
}
