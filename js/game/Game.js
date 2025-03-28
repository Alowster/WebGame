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

function keyPress () {
    if(keys['e'] || keys['E']) {
        shoot();
    }
}

setInterval(keyPress, 600);