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
	
	this.speed = 200,
	this.angle = 0,
	this.rotationSpeed = 2,
	
	this.directionX = 0,
	this.directionY = 0,
	this.angularVelocity = 0
	/*
	x : 800,
	y : 390,
	width : 63,
	height : 123,
	rotation : 0,
	
	directionX : 0,
	directionY : 0,
	angularVelocity : 0,
	
	speed : 190,
	turnSpeed : 2.4,
	score : 0,
	fireRate : 10,
	
	isMoving : false,
	isDead : false,
	*/
}

player.prototype.update = function(deltaTime){
	var sine = Math.sin(player.angle);
	var cosine = Math.cos(player.angle);
	
	var xDir = -sine * player.directionY;
	var yDir = cosine * player.directionY;
	
	var xVel = xDir * player.speed;
	var yVel = yDir * player.speed;
	
	player.xPos += xVel * deltaTime;
	player.yPos += yVel * deltaTime;
	
	player.angle += player.angularVelocity * deltaTime * player.rotationSpeed;
	
	if(keyboard.isKeyDown(keyboard.KEY_A) == true){
		this.angularVelocity = -this.rotationSpeed;
	}else if(keyboard.isKeyDown(keyboard.KEY_D) == true){
		this.angularVelocity = this.rotationSpeed;
	}else if(keyboard.isKeyDown(keyboard.KEY_W) == true){
		
	}else if(keyboard.isKeyDown(keyboard.KEY_S) == true){
		
	}
}

player.prototype.draw = function(){
	
	context.save();
	context.translate(this.position.x, this.position.y);
	context.rotate(this.angle);
	
	context.drawImage(playerImage, canvas.width / 2 - this.width / 1, canvas.height / 2 - this.height / 2);
	
	context.restore();
}