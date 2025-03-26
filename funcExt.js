

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

function shoot () {
    const bullet = document.createElement('div');
    bullet.className = 'bullet';
    bullet.style.left = jugadorX + jugadorSize / 2 + 'px';
    bullet.style.top = jugadorY - 10 + 'px';
    area.appendChild(bullet);
    setTimeout(() => {
        area.removeChild(bullet);
    }, 1000);
    shoot();
    shootInterval = setInterval(shoot, 200);
    console.log('Disparando...');
    
}