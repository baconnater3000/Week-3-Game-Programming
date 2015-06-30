var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var playerKeys = new playerKeys();

var thrustImage = document.createElement("img");
thrustImage.src = 'Media/Art/thrust.png';

var playerImage = document.createElement("img");
playerImage.src = 'Media/Art/ship.png';

var player = function(){
	this.width = 63,
	this.height = 123,

	this.position = new Vector2();
	this.position.set(canvas.width / 2 - this.width / 2, canvas.height / 2 - this.height / 2);
	
	this.speed = 200,
	this.angle = 0,
	this.rotationSpeed = 2.25,
	
	this.directionX = 0,
	this.directionY = 0,
	this.angularVelocity = 0,
	
	this.isMoving = false,
	this.isDead = false,
	
	this.score = 0,
	this.health = 100,
	this.lives = 3
}

function playerBorders(){
	/*if(this.position.y <= 0 - (this.height / 2)){
		this.position.y = canvas.height + (this.height / 2);
	}else
	if(this.position.y >= canvas.height + (this.height / 2)){
		this.position.y = 0 - (this.height / 2);
	}else
	if(this.position.x <= 0 - (this.height / 2)){
		this.position.x = canvas.width + (this.height / 2);
	}else
	if(this.position.x >= canvas.width + (this.height / 2)){
		this.position.x = 0 - (this.height / 2);
	}*/
}

player.prototype.update = function(deltaTime){
	var sine = Math.sin(this.angle);
	var cosine = Math.cos(this.angle);
	
	var xDir = -sine * this.directionY;
	var yDir = cosine * this.directionY;
	
	var xVel = xDir * this.speed;
	var yVel = yDir * this.speed;
	
	this.position.x += xVel * deltaTime;
	this.position.y += yVel * deltaTime;
	
	this.angle += this.angularVelocity * deltaTime * this.rotationSpeed;
		
	// console.log("X: " + this.position.x + " || Y: " + this.position.y + " || Angle: " + Math.floor(this.angle) + " || Angular Velocity: " + this.angularVelocity + " || " );
	
	playerBorders();
	playerKeys.keybinds(deltaTime);
}

player.prototype.draw = function(){
	
	context.save();
	context.translate(this.position.x, this.position.y);
	context.rotate(this.angle);
	
	context.drawImage(playerImage, -this.width / 2, -this.height / 2);
	
	context.restore();
}