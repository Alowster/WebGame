export class Enemy {
    constructor() {
        
        this.pantalla = document.getElementById('pantalla');
        this.castillo = document.getElementById('castillo');
        this.explosion = document.getElementById('explosion');

        this.enemy = document.createElement('div');

        this.enemy.style.position = 'absolute';
        this.enemy.style.top = '83%';
        this.enemy.style.width = '50px';
        this.enemy.style.height = '50px';

        this.enemySide = this.randomEnemy(enemy);
    
        this.pantalla.appendChild(enemy);

        this.moveEnemy(enemy, 0.6);

    }

    moveEnemy(enemy, enemyVelocity) {
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

    randomEnemy(enemy) {
        var caseNum = this.numeroAleatorio();
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

    numeroAleatorio() {
        return Math.floor(Math.random() * 4) + 1;
    }

    checkCollision(enemy, castillo) {
        let rect1 = enemy.getBoundingClientRect();
        let rect2 = castillo.getBoundingClientRect();
        return (
            rect1.left < rect2.right &&
            rect1.right > rect2.left &&
            rect1.top < rect2.bottom &&
            rect1.bottom > rect2.top
        );
    }
    
}