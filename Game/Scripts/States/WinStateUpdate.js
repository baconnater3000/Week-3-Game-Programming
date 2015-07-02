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
	if(player.mouseClicked)
	{
		if(player.mousePos.x >= canvas.width / 2 - 50 && player.mousePos.x <= canvas.width / 2 + 50)
		{
			//Resume Button
			if(player.mousePos.y >= canvas.height / 2 + 60 && player.mousePos.y <= canvas.height / 2 + 60 + 25)
			{
				stateManager.switchState(new GameState());
			}
			
			//Quit Button
			if(player.mousePos.y >= canvas.height / 2 + 90 && player.mousePos.y <= canvas.height / 2 + 90 + 25)
			{
				location.reload();
			}
		}
		player.mouseClicked = false;
	}
	
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
	
	/*
	context.strokeStyle = "White";
	context.strokeRect(canvas.width / 2 - 50, canvas.height / 2 + 60, 100, 25);
	context.strokeRect(canvas.width / 2 - 50, canvas.height / 2 + 90, 100, 25);
	*/
	
	var Title = document.createElement("img");
	Title.src = "Media/Art/WinText.png";
	var center = context.measureText(Title);
	context.drawImage(Title, canvas.width / 2 - center.width * 3 - 65, canvas.height / 2 - 75);
	
	context.fillStyle = "white";
	context.font = "25px Onyx";
	var contText = "You Win With " + player.score + " (1000 Point Bonus) Points";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height / 2 + 50);

	contText = "Resume";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height / 2 + 80);
	
	contText = "Quit";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height / 2 + 110);

	
}