    export class Enemy {
    constructor() {
        
        this.pantalla = document.getElementById('pantalla');
        this.castillo = document.getElementById('castillo');

        this.enemy = document.createElement('div');

        this.enemy.style.position = 'absolute';
        this.enemy.style.top = '83%';
        this.enemy.style.width = '50px';
        this.enemy.style.height = '50px';

        this.enemySide = this.randomEnemy(this.enemy);
    
        this.pantalla.appendChild(this.enemy);
        
        this.enemyVelocity = 0.8;
        this.moveEnemy(this.enemy, this.enemyVelocity);

    }


    resetPosition(enemy, enemyVelocity) {
        if (this.enemySide === 1) {
            enemy.style.left = "-100px";  
            enemy.style.visibility = "hidden";  
    
            setTimeout(() => {
                console.log("Enemigo reaparece.");
                enemy.style.left = "0%";

                enemy.style.visibility = "visible";  
                this.randomEnemy(enemy);
                this.moveEnemy(enemy, enemyVelocity);
            }, this.numeroAleatorio()*1000);
        
        } else if (this.enemySide === 2) {
            enemy.style.left = "105%";  
            enemy.style.visibility = "hidden";

            setTimeout(() => {
                console.log("Enemigo reaparece.");
                enemy.style.left = "97%";
                enemy.style.visibility = "visible";
                this.randomEnemy(enemy);
                this.moveEnemy(enemy, enemyVelocity);
            }, this.numeroAleatorio()*1000);
        }

    }

    moveEnemy(enemy, enemyVelocity) {

        var enemyPos = parseFloat(getComputedStyle(enemy).left);

        if (this.enemySide === 1) {
            enemy.style.left = (enemyPos + enemyVelocity) + 'px';
        } else if (this.enemySide === 2) {
            enemy.style.left = (enemyPos - enemyVelocity) + 'px';
        }
        
        if (this.checkCollision(enemy, this.castillo)) {
            console.log("Enemigo ha chocado con el castillo.");
    
            this.resetPosition(enemy, enemyVelocity);
            
        }else{
            requestAnimationFrame(() => this.moveEnemy(enemy, enemyVelocity));
        }
        
    }

    randomEnemy(enemy) {
        var caseNum = this.numeroAleatorio();
        this.enemySide;
    
        switch (caseNum) {
            case 1:
            case 3:
                enemy.classList.add('enemyLeft','enemigo');
                enemy.style.left = '0px';
                this.enemySide = 1;
                break;
            case 2:
            case 4:
                enemy.classList.add('enemyRight','enemigo');
                enemy.style.left = '97%';
                this.enemySide = 2;
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
    
        return this.enemySide;
    }

    numeroAleatorio() {
        return Math.floor(Math.random() * 4) + 1;
    }

    checkCollision(obj1, obj2) {
        let rect1 = obj1.getBoundingClientRect();
        let rect2 = obj2.getBoundingClientRect();
        return (
            rect1.left < rect2.right &&
            rect1.right > rect2.left &&
            rect1.top < rect2.bottom &&
            rect1.bottom > rect2.top
        );
    }

}
