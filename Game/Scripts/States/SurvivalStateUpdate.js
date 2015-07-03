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
		
		enemyManager.createEnemies(5);
		enemyManager.createBigEnemies(3);
		enemyManager.createMassiveEnemies(1);
	}	
	
	enemyManager.draw();	
	enemyManager.update(deltaTime);

	
	if(player.isDead == true)
	{
		stateManager.switchState(new LoseState());
	}
	
	if(!player.isDead && player.score == 50000)
	{
		player.score += 1000;
		stateManager.switchState(new WinState());
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_ESCAPE) == true)
	{
		if(!stateManager.isPaused){
				var ps = new PauseState();
				ps.currentState = "SS";
				stateManager.switchState(ps);
				stateManager.isPaused = true;
				
			}else {
				stateManager.isPaused = false;
			}
	}
}

SurvivalState.prototype.draw = function()
{
	
}