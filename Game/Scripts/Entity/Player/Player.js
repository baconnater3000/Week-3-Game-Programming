var player = function(){
	this.playerImage = document.createElement("img");
	this.playerImage.src = 'Media/Art/ship.png';
	
	this.thrustImage = document.createElement("img");
	this.thrustImage.src = 'Media/Art/thrust.png';

	this.playerHealthImage = document.createElement("img");

	this.playerKeys = new playerKeys();
	
	this.width = 40,
	this.height = 60,
	this.healthWidth = 98,
	this.healthHeight = 12,
	
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
	this.health = 4,
	this.lives = 3
}

player.prototype.playerBorders = function(){
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
	this.playerHealth = ["Media/PlayerHealth/HealthBar05.png", "Media/PlayerHealth/HealthBar04.png", "Media/PlayerHealth/HealthBar03.png", "Media/PlayerHealth/HealthBar02.png", "Media/PlayerHealth/HealthBar01.png"];
	this.playerHealthImage.src = this.playerHealth[this.health];
	
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
	
	this.playerBorders();
	this.playerKeys.keybinds(deltaTime);
}

player.prototype.draw = function(){
	context.save();
	context.translate(this.position.x, this.position.y);
	context.rotate(this.angle);
	
	context.drawImage(this.playerImage, -this.width / 2, -this.height / 2);
	
	context.restore();

	context.drawImage(this.playerHealthImage, this.position.x - this.healthWidth / 2, this.position.y + this.height / 2 + 10);
}