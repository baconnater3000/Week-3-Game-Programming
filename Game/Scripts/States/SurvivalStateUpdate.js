var survivalState = function()
{
	this.prototype = BaseState;
}

survivalState.prototype.load = function()
{
	
}

survivalState.prototype.unload = function()
{
	
}

survivalState.prototype.update = function(deltaTime)
{
	canvas.width = canvas.width;
	context.drawImage(background, 0, 0);
	
	player.update(deltaTime);
	player.draw();
	
	shop.update(deltaTime);
	shop.draw();
	
	timer += deltaTime;
	enemyTimer += deltaTime;

	fpsTime += deltaTime;
	fpsCount++;
	if(fpsTime >= 1)
	{
		fpsTime -= 1;
		fps = fpsCount;
		fpsCount = 0;
	}		
	
	if (enemyTimer >= 2)
	{
		enemyTimer = 0;
		
		enemyManager.createEnemies(10);
		enemyManager.createBigEnemies(2);
	}	
	
	enemyManager.update(deltaTime);
	enemyManager.draw();
	enemyManager.enemiesOnScreen();
	
	if(player.isDead == true)
	{
		stateManager.switchState(new LoseState());
	}
	
	if(player.isDead == false && player.score == 50000)
	{
		player.score += 1000;
		stateManager.switchState(new WinState());
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_ESCAPE) == true)
	{
		stateManager.switchState(new PauseState());
	}
}

survivalState.prototype.draw = function()
{
	
}