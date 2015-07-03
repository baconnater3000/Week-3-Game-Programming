var SplashState = function()
{
	this.prototype = BaseState;
}

SplashState.prototype.load = function()
{
	
}

SplashState.prototype.unload = function()
{
	
}

SplashState.prototype.update = function(deltaTime)
{
	if(player.mouseClicked)
	{
		if(player.mousePos.x >= canvas.width / 2 - 50 && player.mousePos.x <= canvas.width / 2 + 50)
		{
			//Play Button
			if(player.mousePos.y >= canvas.height / 2 + 30 && player.mousePos.y <= canvas.height / 2 + 60)
			{
				stateManager.switchState(new ModeState());
			}
			
			//Controls Button
			if(player.mousePos.y >= canvas.height / 2 + 60 && player.mousePos.y <= canvas.height / 2 + 90)
			{
				stateManager.switchState(new ControlsState());
			}
			
			//Quit Button
			if(player.mousePos.y >= canvas.height / 2 + 90 && player.mousePos.y <= canvas.height / 2 + 120)
			{
				window.close();
			}
		}
		player.mouseClicked = false;
	}
}

SplashState.prototype.draw = function()
{
	context.canvas.width = window.innerWidth - 20;
	context.canvas.height = window.innerHeight - 20;
	
	canvas.width = canvas.width;
	context.drawImage(background, 0, 0);
	
	/*
	context.strokeStyle = "White";
	context.strokeRect(canvas.width / 2 - 50, canvas.height / 2 + 30, 100, 25);
	context.strokeRect(canvas.width / 2 - 50, canvas.height / 2 + 60, 100, 25);
	context.strokeRect(canvas.width / 2 - 50, canvas.height / 2 + 90, 100, 25);
	*/
	
	
	var Title = document.createElement("img");
	Title.src = "Media/Art/Name.png";
	var center = context.measureText(Title);
	context.drawImage(Title, canvas.width / 2 - center.width * 2, canvas.height / 2 - 75);
	
	context.fillStyle = "white";
	context.font = "25px Onyx";
	var startText = "Play";
	center = context.measureText(startText);
	context.fillText(startText, canvas.width / 2 - center.width / 2, canvas.height / 2 + 50);

	contText = "Controls";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height / 2 + 80);
	
	contText = "Quit";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height / 2 + 110);

	
}
