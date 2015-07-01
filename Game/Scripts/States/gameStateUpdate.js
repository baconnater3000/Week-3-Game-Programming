var GameState = function()
{
	this.prototype = BaseState;
}

GameState.prototype.load = function()
{
	
}

GameState.prototype.unload = function()
{
	
}

GameState.prototype.update = function(deltaTime)
{
	canvas.width = canvas.width;
	context.drawImage(background, 0, 0);
	
	player.update(deltaTime);
	player.draw();
	
	shop.update(deltaTime);
	shop.draw();
	
	timer += deltaTime;

	fpsTime += deltaTime;
	fpsCount++;
	if(fpsTime >= 1)
	{
		fpsTime -= 1;
		fps = fpsCount;
		fpsCount = 0;
	}		
	
	enemyManager.update(deltaTime);
	enemyManager.draw();
	enemyManager.onScreen();

	if(keyboard.isKeyDown(keyboard.KEY_ESCAPE) == true)
	{
		stateManager.switchState(new PauseState());
	}
}

GameState.prototype.draw = function()
{
	
}