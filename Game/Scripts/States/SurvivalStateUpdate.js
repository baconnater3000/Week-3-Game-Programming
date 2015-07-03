var SurvivalState = function()
{
	this.prototype = BaseState;
}

SurvivalState.prototype.load = function()
{
	
}

SurvivalState.prototype.unload = function()
{
	
}

SurvivalState.prototype.update = function(deltaTime)
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
	
	if (enemyTimer >= 15)
	{
		enemyTimer = 0;
		
		enemyManager.createEnemies(6);
		enemyManager.createBigEnemies(4);
		enemyManager.createMassiveEnemies(2);
	}	
	
	enemyManager.update(deltaTime);
	enemyManager.draw();
	
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
		if(!stateManager.isPaused){
				var ss = new SurvivalState();
				ss.currentState = "SS";
				stateManager.switchState(ss);
				stateManager.isPaused = true;
				
			}else {
				stateManager.isPaused = false;
			}
	}
}

SurvivalState.prototype.draw = function()
{
	
}