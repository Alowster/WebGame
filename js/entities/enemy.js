const enemyVelocity = 0.6;

const pantalla = document.getElementById('pantalla');
const castillo = document.getElementById('castillo');
const explosion = document.getElementById('explosion');

function createEnemy() {
    console.log('Creando enemigo...');
    const enemy = document.createElement('div');
    let enemySide = randomEnemy(enemy);

    pantalla.appendChild(enemy);

    function moveEnemy() {
        let enemyPos = parseFloat(getComputedStyle(enemy).left);

        if (enemySide === 1) {
            enemy.style.left = (enemyPos + enemyVelocity) + 'px';
        } else if (enemySide === 2) {
            enemy.style.left = (enemyPos - enemyVelocity) + 'px';
        }
        
        if (checkCollision(enemy, castillo)) {
            enemy.remove();
            console.log('Enemigo eliminado al chocar con el castillo');
        } else {
            requestAnimationFrame(moveEnemy);
        }


    }
    requestAnimationFrame(moveEnemy);
}

function randomEnemy(enemy) {
    var caseNum = numeroAleatorio();
    let enemySide;

    switch (caseNum) {
        case 1:
        case 3:
            enemy.classList.add('enemyLeft','enemigo');
            enemy.style.left = '0px';
            enemySide = 1;
            break;
        case 2:
        case 4:
            enemy.classList.add('enemyRight','enemigo');
            enemy.style.left = '97%';
            enemySide = 2;
            break;
    }

    enemy.style.position = 'absolute';
    enemy.style.top = '83%';
    enemy.style.width = '50px';
    enemy.style.height = '50px';

    switch (caseNum) {
        case 1:
        case 3:
            enemy.style.backgroundColor = 'red';
            break;
        case 2:
        case 4:
            enemy.style.backgroundColor = 'blue';
            break;
    }

    return enemySide;
}

function numeroAleatorio() {
    return Math.floor(Math.random() * 4) + 1;
}

function checkCollision(enemy, castillo) {
    let rect1 = enemy.getBoundingClientRect();
    let rect2 = castillo.getBoundingClientRect();
    return (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
    );
}

setInterval(createEnemy, 900); // Crea un enemigo cada 2 segundos
