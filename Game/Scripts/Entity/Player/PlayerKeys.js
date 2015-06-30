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
	}else
	
	if(keyboard.isKeyDown(keyboard.KEY_A) == true){
		player.angularVelocity = -player.rotationSpeed;
	}else
	
	if(keyboard.isKeyDown(keyboard.KEY_S) == true){
		player.directionX = 0;
		player.directionY = 0.5;
	}else
	
	if(keyboard.isKeyDown(keyboard.KEY_D) == true){
		player.angularVelocity = player.rotationSpeed;
	}
	
	
	if(keyboard.onKeyUp(keyboard.KEY_W)){
		player.directionY = 0;
		player.isMoving = false;
	}else
	
	if(keyboard.onKeyUp(keyboard.KEY_A)){
		player.angularVelocity = 0;
	}else
	
	if(keyboard.onKeyUp(keyboard.KEY_S)){
		player.directionY = 0;
	}else
	
	if(keyboard.onKeyUp(keyboard.KEY_D)){
		player.angularVelocity = 0;
	}
}
