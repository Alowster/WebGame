const pantalla = document.getElementById('pantalla');

function createEnemy() {
    const enemy = document.createElement('div')
    randomEnemy(enemy);
    pantalla.appendChild(enemy);
}


function randomEnemy(enemy) {
    var caseNum = numeroAleatorio();

    switch (caseNum) {
        case 1:
        case 3:
            enemy.classList.add('enemyLeft');
            break;
        case 2:
        case 4:
            enemy.classList.add('enemyRight');
            break;
        default:
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
            enemy.style.backgroundColor = 'green';
            break;
        default:
            enemy.style.backgroundColor = 'yellow';
            break;
    }


}

function numeroAleatorio() {
    return Math.floor(Math.random() * 4) + 1;
}

