var SplashState = function()
{
	this.prototype = BaseState;
	
	canvas.addEventListener("mousedown", this.getPosition, false);
}

SplashState.prototype.load = function()
{
	
}

SplashState.prototype.unload = function()
{
	
}

SplashState.prototype.getPosition = function(evt){
	var x = evt.x;
	var y = evt.y;
	
	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	
	//console.log("Mouse clicked! at: X - " + x + " Y - " + y);
	
	player.mousePos.set(x, y);
	
	player.mouseClicked = true;
}

SplashState.prototype.update = function(deltaTime)
{
	if(player.mouseClicked)
	{
		if(player.mousePos.x >= canvas.width / 2 - 30 && player.mousePos.x <= canvas.width / 2 + 30)
		{
			//Play Button
			if(player.mousePos.y >= canvas.height / 2 + 30 && player.mousePos.y <= canvas.height / 2 + 60)
			{
				stateManager.switchState(new ModeState());
			}
			
			//Quit Button
			if(player.mousePos.y >= canvas.height / 2 + 90 && player.mousePos.y <= canvas.height / 2 + 120)
			{
				close();
			}
		} else 
		if(player.mousePos.x >= canvas.width / 2 - 50 && player.mousePos.x <= canvas.width / 2 + 50)
		{	
			//Controls Button
			if(player.mousePos.y >= canvas.height / 2 + 60 && player.mousePos.y <= canvas.height / 2 + 90)
			{
				stateManager.switchState(new ControlsState());
			}
		}
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
	{
		stateManager.switchState(new ModeState());
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_I) == true)
	{
		stateManager.switchState(new ControlsState());
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_ESCAPE) == true)
	{
		close(); 
	}
}

SplashState.prototype.draw = function()
{
	context.canvas.width = window.innerWidth - 20;
	context.canvas.height = window.innerHeight - 20;
	
	canvas.width = canvas.width;
	context.drawImage(background, 0, 0);
	
	context.strokeStyle = "White";
	//context.strokeRect(canvas.width / 2 - 30, canvas.height / 2 + 30, 60, 25);
	context.strokeRect(canvas.width / 2 - 50, canvas.height / 2 + 60, 100, 25);
	//context.strokeRect(canvas.width / 2 - 30, canvas.height / 2 + 90, 60, 25);
	
	var Title = document.createElement("img");
	Title.src = "Media/Art/Name.png";
	var center = context.measureText(Title);
	context.drawImage(Title, canvas.width / 2 - center.width * 2, canvas.height / 2 - 75);
	
	context.fillStyle = "white";
	context.font = "25px Cooper Black";
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