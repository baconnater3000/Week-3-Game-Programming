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
		gameState = statePause;
	}
}

GameState.prototype.draw = function()
{
	context.save();
	context.fillStyle = "aqua";
	context.globalAlpha=0.2;
    context.fillRect(0, 0, menuSize, canvas.height);
	context.restore();
	
	context.font="30px Cooper Black";
	context.fillStyle = "Aqua";
	context.fillText("FPS: " + fps, 10, 30);
	context.fillText("Score: " + player.score, 10, 60);
	context.fillText(Math.floor(timer) + " Seconds", 20, canvas.height - 20, menuSize - 40);
	context.fillText("Lives: ", 20, canvas.height - 110);
	
	context.fillText("RANDOM TEST: ", 10, 150);
	context.strokeRect(0, 125, menuSize, 30);
}