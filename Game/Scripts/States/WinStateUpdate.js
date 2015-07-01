var WinState = function()
{
	this.prototype = BaseState;
}

WinState.prototype.load = function() 
{
	
}

WinState.prototype.unload = function()
{
	
}

WinState.prototype.update = function(deltaTime)
{
	if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
	{
		stateManager.switchState(new GameState());
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_ESCAPE) == true)
	{
		close(); 
	}
}

WinState.prototype.draw = function()
{
	context.canvas.width = window.innerWidth - 20;
	context.canvas.height = window.innerHeight - 20;
	
	canvas.width = canvas.width;
	context.drawImage(background, 0, 0);
	
	var Title = document.createElement("img");
	Title.src = "Media/Art/WinText.png";
	var center = context.measureText(Title);
	context.drawImage(Title, canvas.width / 2 - center.width * 3 - 65, canvas.height / 2 - 75);
	
	context.fillStyle = "white";
	context.font = "25px Cooper Black";
	var contText = "You Win With " + player.score + " (1000 Point Bonus) Points";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height / 2 + 50);

	contText = "Press 'Space' To Continue Playing";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height / 2 + 80);
	
	contText = "Press 'Esc' To Quit The Game";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height / 2 + 110);

	
}