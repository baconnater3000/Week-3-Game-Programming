var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var thrustImage = document.createElement("img");
thrustImage.src = 'Media/Art/thrust.png';

var playerImage = document.createElement("img");
playerImage.src = 'Media/Art/ship.png';

var player = function(){
	this.width = 63,
	this.height = 123,

	this.position = new Vector2();
	this.position.set(0, 0);
	
	this.speed = 550,
	this.angle = 0,
	this.rotationSpeed = 2,
	
	this.directionX = 0,
	this.directionY = 0,
	this.angularVelocity = 0
}

player.prototype.update = function(deltaTime){
	
}

player.prototype.draw = function(){
	context.drawImage(playerImage, canvas.width / 2, canvas.height / 2);
}