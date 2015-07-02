var DiffState = function()
{
	canvas.addEventListener("mousedown", this.getPosition, false);

	this.prototype = BaseState;
}

DiffState.prototype.load = function() 
{
	
}

DiffState.prototype.unload = function()
{
	
}

DiffState.prototype.getPosition = function(evt){
	var x = evt.x;
	var y = evt.y;
	
	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	
	//console.log("Mouse clicked! at: X - " + x + " Y - " + y);
	
	player.mousePos.set(x, y);
	
	player.mouseClicked = true;
}

DiffState.prototype.update = function(deltaTime)
{
	if(player.mouseClicked){
		if(player.mousePos.x >= canvas.width / 2 - 200 && player.mousePos.x <= canvas.width / 2 + 200){
			//GM1 BUTTON
			if(player.mousePos.y >= 180 && player.mousePos.y <= 180 + 25){
				stateManager.switchState(new WaveState());
			}
			
			//GM2 BUTTON
			if(player.mousePos.y >= 220 && player.mousePos.y <= 220 + 25){
				stateManager.switchState(new GameState());
			}
			
			//BACK BUTTON
			if(player.mousePos.y >= 260 && player.mousePos.y <= 260 + 25){
				stateManager.switchState(new SplashState());
			}
		}
		player.mouseClicked = false;
	}

	if(keyboard.isKeyDown(keyboard.KEY_1) == true)
	{
		stateManager.switchState(new GameState());
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_2) == true)
	{
		stateManager.switchState(new GameState());
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_BACKSPACE) == true)
	{
		stateManager.switchState(new SplashState());
	}
}

DiffState.prototype.draw = function()
{
	context.canvas.width = window.innerWidth - 20;
	context.canvas.height = window.innerHeight - 20;
	
	canvas.width = canvas.width;
	context.drawImage(background, 0, 0);
	
	/*
	context.strokeStyle = "White";
	context.strokeRect(canvas.width / 2 - 200, 180, 400, 25);
	context.strokeRect(canvas.width / 2 - 200, 220, 400, 25);
	context.strokeRect(canvas.width / 2 - 200, 260, 400, 25);
	*/
	
	var Title = document.createElement("img");
	Title.src = "Media/Art/Mode.png";
	var center = context.measureText(Title);
	context.drawImage(Title, canvas.width / 2 - center.width * 3 - 65, 20);
	
	context.fillStyle = "white";
	context.font = "25px Cooper Black";
	var contText = "Press '1' To Play On Wave Mode";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 200);

	contText = "Press '2' To Play On Survival Mode";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 240);
	
	contText = "Press 'Backspace' To Go Back";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 280);
}