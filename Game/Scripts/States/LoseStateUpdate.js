var LoseState = function()
{
	this.prototype = BaseState;
}

LoseState.prototype.load = function()
{
	
}

LoseState.prototype.unload = function()
{
	
}

LoseState.prototype.update = function(deltaTime)
{
	if(player.mouseClicked)
	{
		if(player.mousePos.x >= canvas.width / 2 - 60 && player.mousePos.x <= canvas.width / 2 + 60)
		{
			//Replay Button
			if(player.mousePos.y >= canvas.height / 2 + 90 && player.mousePos.y <= canvas.height / 2 + 90 + 25)
			{
				location.reload();
			}
			
			//Main Men Button
			if(player.mousePos.y >= canvas.height / 2 + 120 && player.mousePos.y <= canvas.height / 2 + 120 + 25)
			{
				location.reload();
			}
		}
		player.mouseClicked = false;
	}
}

LoseState.prototype.draw = function()
{
	context.canvas.width = window.innerWidth - 20;
	context.canvas.height = window.innerHeight - 20;
	
	canvas.width = canvas.width;
	context.drawImage(background, 0, 0);
	
	/*
	context.strokeStyle = "White";
	context.strokeRect(canvas.width / 2 - 60, canvas.height / 2 + 90, 120, 25);
	context.strokeRect(canvas.width / 2 - 60, canvas.height / 2 + 120, 120, 25);
	*/
	
	var Title = document.createElement("img");
	Title.src = "Media/Art/GameOver.png";
	var center = context.measureText(Title);
	context.drawImage(Title, canvas.width / 2 - center.width * 2 - 20, canvas.height / 2 - 75);
	
	context.fillStyle = "white";
	context.font = "25px Onyx";
	var contText = "You Lose With " + player.score + " Points!";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height / 2 + 50);
	
	contText = "With a time of " + Math.floor(timer) + " seconds!";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height / 2 + 80);
	
	contText = "Replay?";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height / 2 + 110);
	
	contText = "Main Menu";
	center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height / 2 + 140);

	
}