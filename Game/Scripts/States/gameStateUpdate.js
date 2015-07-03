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
	player.draw(deltaTime);
	
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
	
	if(player.isDead == true)
	{
		stateManager.switchState(new LoseState());
	}
	
	if(player.isDead == false && player.score == 50000)
	{
		stateManager.switchState(new WinState());
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_ESCAPE) == true)
	{
		if(!stateManager.isPaused){
				var gs = new GameState();
				gs.currentState = "GS";
				stateManager.switchState(gs);
				stateManager.isPaused = true;
				
			}else {
				stateManager.isPaused = false;
			}
	}
}

GameState.prototype.draw = function()
{
}