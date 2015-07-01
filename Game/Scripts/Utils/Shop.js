var shop = function(){
	canvas.addEventListener("mousedown", this.getPosition, false);
	
	this.healthPrice = 100;
	this.lifePrice = 400;
}

shop.prototype.getPosition = function(evt){
	var x = evt.x;
	var y = evt.y;
	
	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	
	player.mousePos.set(x, y);
	
	player.mouseClicked = true;
}

shop.prototype.update = function(deltaTime){
	if(player.mouseClicked){
		if(player.mousePos.x >= 0 && player.mousePos.x <= menuSize){
			//FIRST BUTTON
				if(player.mousePos.y >= 125 && player.mousePos.y <= 155){
					player.score += 100;
				}
				
			//SECOND BUTTON
				if(player.mousePos.y >= 160 && player.mousePos.y <= 190){
					player.score += 200;
				}
				
			//THIRD BUTTON
			if(player.mousePos.y >= 195 && player.mousePos.y <= 225){
					player.score += 300;
				}
			player.mouseClicked = false;
		}
	}	
}

shop.prototype.draw = function(){
	context.save();
	context.fillStyle = "aqua";
	context.globalAlpha=0.2;
    context.fillRect(0, 0, menuSize, canvas.height);
	context.restore();
	
	context.save();
	context.font="30px Cooper Black";
	context.fillStyle = "Aqua";
	context.fillText("Score: " + player.score, 10, 30);
	context.fillText(Math.floor(timer) + " Seconds", 20, canvas.height - 20, menuSize - 40);
	context.fillText("Lives: ", 20, canvas.height - 110);
	context.restore();
	
	context.fillText("RANDOM TEST: ", 10, 150);
	context.fillText("RANDOM TEST:", 10, 185);
	context.fillText("RANDOM TEST: ", 10, 220);
	
	context.strokeRect(0, 125, menuSize, 30);
	context.strokeRect(0, 160, menuSize, 30);
	context.strokeRect(0, 195, menuSize, 30);
}