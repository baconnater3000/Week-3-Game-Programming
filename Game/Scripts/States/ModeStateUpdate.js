var ModeState = function()
{
	this.prototype = BaseState;
}

ModeState.prototype.load = function() 
{
	
}

ModeState.prototype.unload = function()
{
	
}

ModeState.prototype.update = function(deltaTime)
{
	if(player.mouseClicked)
	{
		if(player.mousePos.x >= canvas.width / 2 - 100 && player.mousePos.x <= canvas.width / 2 + 100)
		{
			console.log("Xpos Striking!");
			//GM1 BUTTON
			if(player.mousePos.y >= 180 && player.mousePos.y <= 180 + 25)
			{
				console.log("GM1 Button Striking!");
				stateManager.switchState(new WaveState());
			}
			
			//GM2 BUTTON
			if(player.mousePos.y >= 220 && player.mousePos.y <= 220 + 25)
			{
				console.log("GM2 Button Striking!");
				stateManager.switchState(new SurvivalState());
			}
			
			//BACK BUTTON
			if(player.mousePos.y >= 260 && player.mousePos.y <= 260 + 25)
			{
				console.log("Back Button Striking!");
				stateManager.switchState(new SplashState());
			}
		}
		player.mouseClicked = false;
	}
}

ModeState.prototype.draw = function()
{
	context.canvas.width = window.innerWidth - 20;
	context.canvas.height = window.innerHeight - 20;
	
	canvas.width = canvas.width;
	context.drawImage(background, 0, 0);
	
	context.strokeStyle = "White";
	//context.strokeRect(canvas.width / 2 - 100, 180, 200, 25);
	//context.strokeRect(canvas.width / 2 - 100, 220, 200, 25);
	//context.strokeRect(canvas.width / 2 - 100, 260, 200, 25);
	
	var Title = document.createElement("img");
	Title.src = "Media/Art/Mode.png";
	var center = context.measureText(Title);
	context.drawImage(Title, canvas.width / 2 - center.width * 3 - 65, 20);
	
	context.fillStyle = "white";
	context.font = "25px Onyx";
	var contText = "Wave Mode";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 200);

	contText = "Survival Mode";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 240);
	
	contText = "Go Back";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 280);
}