var EndState = function()
{
	this.prototype = BaseState;
}

EndState.prototype.load = function()
{
	
}

EndState.prototype.unload = function()
{
	
}

EndState.prototype.update = function(deltaTime)
{
	if(keyboard.isKeyDown(keyboard.KEY_R) == true)
	{
		location.reload();
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_ESCAPE) == true)
	{
		close(); 
	}
	
	if(player.isDead == true)
	{
		stateManager.switchState(new EndState());
	}
}

EndState.prototype.draw = function()
{
	context.canvas.width = window.innerWidth - 20;
	context.canvas.height = window.innerHeight - 20;
	
	canvas.width = canvas.width;
	context.drawImage(background, 0, 0);
	
	var Title = document.createElement("img");
	Title.src = "Media/Art/GameOver.png";
	var center = context.measureText(Title);
	context.drawImage(Title, canvas.width / 2 - center.width * 2 - 20, canvas.height / 2 - 75);
	
	context.fillStyle = "white";
	context.font = "25px Cooper Black";
	var startText = "Press 'R' To Play Again";
	var center = context.measureText(startText);
	context.fillText(startText, canvas.width / 2 - center.width / 2, canvas.height / 2 + 50);

	var contText = "Your Score was: " + player.score;
	var center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height / 2 + 80);
	
	var contText = "Press 'Esc' To Quit The Game";
	var center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height / 2 + 110);

	
}