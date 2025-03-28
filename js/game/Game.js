function keyPress () {
    if(keys['e'] || keys['E']) {
        shoot();
    }

    
}

setInterval( () => {
    createEnemy();
},3000);