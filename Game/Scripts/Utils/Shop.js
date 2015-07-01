var shop = function(){
	canvas.addEventListener("mousedown", this.getPosition, false);
	
	this.shopImage = document.createElement("img");
	this.shopImage.src = 'Media/Art/Shop.png';
	
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
				if(player.mousePos.y >= 150 && player.mousePos.y <= 150 + 35){
					if(player.score >= 500 && player.health < 4){
						player.score -= 500;
						player.health += 1;
					}
				}
				
			//SECOND BUTTON
				if(player.mousePos.y >= 150 + (48 * 1) && player.mousePos.y <= 150 + (48 * 1) + 35){
					if(player.score >= 2000 && player.lives < 3){
						player.score -= 2000;
						player.lives += 1;
					}
				}
				
			//THIRD BUTTON
			if(player.mousePos.y >= 150 + (48 * 2) && player.mousePos.y <= 150 + (48 * 2) + 35){
					player.score += 300;
				}
			player.mouseClicked = false;
		}
	}	
}

shop.prototype.draw = function(){
	/*context.save();
	context.fillStyle = "aqua";
	context.globalAlpha=0.2;
    context.fillRect(0, 0, menuSize, canvas.height);
	context.restore();*/
	
	context.drawImage(this.shopImage, 0, 0);
	
	for(var i = 0; i < player.lives; i++){
		if(!gameOverBool)
		{		
			context.drawImage(player.playerHeartImage, 75 - ((player.playerHeartImage.width - 270) * i) - 60, canvas.height - 100, 50, 50);
		}
	}

	context.save();
	context.font="30px ONYX";
	context.fillStyle = "White";
	context.fillText("Score: " + player.score, 10, 30);
	context.fillText(Math.floor(timer) + " Seconds", 20, canvas.height - 20, menuSize - 40);
	context.fillText("Lives: ", 20, canvas.height - 110);
	context.restore();
	
	context.strokeStyle = "White";
	//context.strokeRect(0, 150, menuSize, 35);
	//context.strokeRect(0, 150 + (48 * 1), menuSize, 35);
	//context.strokeRect(0, 150 + (48 * 2), menuSize, 35);
	//context.strokeRect(0, 150 + (48 * 3) + 1, menuSize, 35);
	//context.strokeRect(0, 150 + (48 * 4) + 2, menuSize, 35);
	//context.strokeRect(0, 150 + (48 * 5) + 3, menuSize, 35);
	
	
}