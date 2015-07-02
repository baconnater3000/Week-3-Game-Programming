var ControlsState = function()
{
	this.prototype = BaseState;
	
	canvas.addEventListener("mousedown", this.getPosition, false);
}

ControlsState.prototype.load = function()
{
	
}

ControlsState.prototype.unload = function()
{
	
}

ControlsState.prototype.getPosition = function(evt){
	var x = evt.x;
	var y = evt.y;
	
	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	
	//console.log("Mouse clicked! at: X - " + x + " Y - " + y);
	
	player.mousePos.set(x, y);
	
	player.mouseClicked = true;
}

ControlsState.prototype.update = function(deltaTime)
{
	if(player.mouseClicked)
	{
		if(player.mousePos.x >= canvas.width / 2 - 50 && player.mousePos.x <= canvas.width / 2 + 50)
		{
			//Back Button
			if(player.mousePos.y >= canvas.height - 40 && player.mousePos.y <= canvas.height - 15)
			{
				stateManager.switchState(new SplashState());
			}
		}
		player.mouseClicked = false;
	}
}

ControlsState.prototype.draw = function()
{
	canvas.width = canvas.width;
	context.drawImage(background, 0, 0);
	
	/*
	context.strokeStyle = "White";
	context.strokeRect(canvas.width / 2 - 50, canvas.height - 40, 100, 25);
	*/
	
	var Control = document.createElement("img");
	Control.src = "Media/Art/Controls.png";
	var center = context.measureText(Control);
	context.drawImage(Control, canvas.width / 2 - center.width * 2, 50);
	
	context.fillStyle = "white";
	context.font = "50px Onyx";
	var contText = "Player 1";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 200);
	
	context.font = "25px Onyx";
	contText = "W = Forward";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 250);
	
	contText = "A = Rotate Left";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 290);
	
	contText = "D = Rotate Right";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 330);
	
	contText = "S = Backward";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 370);
	
	contText = "Space = Shoot";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 410);
	
	contText = "ESC = Pause";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 450);
	
	contText = "Back";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height - 20);
}