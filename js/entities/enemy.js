const enemyVelocity = 200;
function createEnemy() {

    console.log('creando enemigo...');
    
    const pantalla = document.getElementById('pantalla');
    
    const castillo = document.getElementById('castillo');

    const enemy = document.createElement('div')
    
    randomEnemy(enemy);

    pantalla.appendChild(enemy);

    function moveEnemy(enemy) {

        if(enemySide === 1){

        }else if ( enemySide === 2) {

        }

        requestAnimationFrame(moveEnemy);
    }

    requestAnimationFrame(moveEnemy);
    removeEnemy(enemy, castillo);
}


function removeEnemy(enemy, castillo) {
    setInterval(() => {
        if (checkCollision(enemy, castillo)) {
            enemy.remove();
            console.log('enemigo eliminado');
        }        
    }, 20);

}


function randomEnemy(enemy) {
    var caseNum = numeroAleatorio();
    switch (caseNum) {
        case 1:
        case 3:
            enemy.classList.add('enemyLeft');
            enemySide = 1;
            break;
        case 2:
        case 4:
            enemy.classList.add('enemyRight');
            enemySide = 2;
            break;
    }

    switch (caseNum) {
        case 1:
            enemy.style.backgroundColor = 'red';
            break;
        case 2:
            enemy.style.backgroundColor = 'blue';
            break;
        case 3:
            enemy.style.backgroundColor = 'red';
            break;
        default:
            enemy.style.backgroundColor = 'blue';
            break;
    }


}

function numeroAleatorio() {
    return Math.floor(Math.random() * 4) + 1;
}

setInterval(createEnemy, 1000);