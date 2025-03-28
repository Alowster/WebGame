function keyPress () {
    if(keys['e'] || keys['E']) {
        shoot();
    }

    if(keys['t'] || keys['T']) {
        createEnemy();
    }

}