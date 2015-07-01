var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var keyboard = new Keyboard();

var playerKeys = function(){
	
}

playerKeys.prototype.keybinds = function(deltaTime){
	if(keyboard.isKeyDown(keyboard.KEY_W) == true){
		player.directionX = 0;
		player.directionY = -1;
		player.isMoving = true;
	}else if (keyboard.isKeyDown(keyboard.KEY_W) == false && keyboard.isKeyDown(keyboard.KEY_S) == false){
		player.directionY = 0;
		player.isMoving = false;
	}

	if(keyboard.isKeyDown(keyboard.KEY_A) == true){
		player.angularVelocity = -player.rotationSpeed;
	}else if(keyboard.isKeyDown(keyboard.KEY_A) == false && keyboard.isKeyDown(keyboard.KEY_D) == false){
		player.angularVelocity = 0;
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_S) == true){
		player.directionX = 0;
		player.directionY = 0.5;
	}else if(keyboard.isKeyDown(keyboard.KEY_S) == false && keyboard.isKeyDown(keyboard.KEY_W) == false){
		player.directionY = 0;
		player.isMoving = false;
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_D) == true){
		player.angularVelocity = player.rotationSpeed;
	}else if(keyboard.isKeyDown(keyboard.KEY_D) == false && keyboard.isKeyDown(keyboard.KEY_A) == false){
		player.angularVelocity = 0;
	}
}

//bulletSfx.play();	<-- For player shooting, add when adding KEY_SPACE.
