var player2 = function(){
	this.player2Image = document.createElement("img");
	this.player2Image.src = 'Media/Art/ship.png';
	
	this.player2HeartImage = document.createElement("img");
	this.player2HeartImage.src = "Media/playerHealth/Heart.png";
	
	this.thrustImage = document.createElement("img");
	this.thrustImage.src = 'Media/Art/thrust.png';

	this.player2HealthImage = document.createElement("img");
	
	this.bulletSfxCooldownTimer = 0;
	this.thrusterSfxCooldownTimer = 0;
	
	this.bullets = [];
	this.bulletImage = document.createElement("img");
	this.bulletImage.src = 'Media/Art/Bullet.png';

	this.player2Keys = new player2Keys();
	
	this.width = 40,
	this.height = 60,
	this.healthWidth = 98,
	this.healthHeight = 12,
	
	this.position = new Vector2();
	this.position.set(canvas.width / 2 - this.width / 2, canvas.height / 2 - this.height / 2);
	
	this.mousePos = new Vector2();
	this.mouseClicked = false,
	
	//this.fireEmitter = createFireEmitter("Media/Art/fire.png", this.position.x, this.position.y);
	
	this.randomCountdownTimer = 2,
	this.maxRandomCountdownTimer = this.randomCountdownTimer,
	
	this.speed = 350,
	this.angle = 0,
	this.rotationSpeed = 2.25,
	
	this.directionX = 0,
	this.directionY = 0,
	this.angularVelocity = 0,
	
	this.isMoving = false,
	this.isDead = false,
	this.isShooting = false;
	
	this.score = 0,
	this.health = 4,
	this.lives = 3,
	
	this.shootTimer = 0;
	this.maxShootTimer = 0.5;
	this.resetShootTimer = 0;
	this.fireRateIncrease = false;
	this.hasDecreasedFireRate = false;
}

player2.prototype.player2Shoot = function(){
	var bullet = {
		image : this.bulletImage,
		
		xPos : this.position.x,
		yPos : this.position.y,
		
		width : 10,
		height : 10,
		
		velocityX : 0,
		velocityY : 0,
		
		isDead : false,
		
		speed : 900,
	}
	
	var velX = 0;
	var velY = 1;
	
	var s = Math.sin(this.angle + Math.PI);
	var c = Math.cos(this.angle + Math.PI);
	
	var xVel = (velX * c) - (velY * s);
	var yVel = (velX * s) + (velY * c);
	
	bullet.velocityX = xVel * bullet.speed;
	bullet.velocityY = yVel * bullet.speed;
	
	bullet.isDead = false;	
	
	this.bullets.push(bullet);
}

player2.prototype.player2Borders = function(){
	if(this.position.y <= 0 - (this.height / 2)){
		this.position.y = canvas.height + (this.height / 2);
	}else if(this.position.y >= canvas.height + (this.height / 2)){
		this.position.y = 0 - (this.height / 2);
	}else if(this.position.x <= 0 - (this.height / 2) + menuSize){
		this.position.x = canvas.width + (this.height / 2);
	}else if(this.position.x >= canvas.width + (this.height / 2)){
		this.position.x = 0 - (this.height / 2) + menuSize;
	}
	
	for(var j = 0; j < this.bullets.length; j++){
		if(this.bullets[j].isDead == false){
			if(this.bullets[j].xPos < 0 + menuSize || this.bullets[j].xPos > canvas.width || this.bullets[j].yPos < 0 || this.bullets[j].yPos > canvas.height){
				this.bullets[j].isDead = true;
			}
		}
	}
}

player2.prototype.update = function(deltaTime){
	this.shootTimer += deltaTime;
	
	if(this.fireRateIncrease){
		this.resetShootTimer += deltaTime;
	}
	
	if(this.resetShootTimer >= 10){
		this.fireRateIncrease = false;
	}
	
	if(this.fireRateIncrease && !this.hasDecreasedFireRate){
		this.maxShootTimer -= 0.30;
		this.shootTimer = this.maxShootTimer;
		this.hasDecreasedFireRate = true;
		this.cooldownTimer = 0.30;
	}
	
	if(!this.fireRateIncrease && this.hasDecreasedFireRate){
		this.hasDecreasedFireRate = false;
		this.maxShootTimer += 0.3;
		this.cooldownTimer = 0.5;
	}
	
	this.player2Health = ["Media/player2Health/HealthBar05.png", "Media/player2Health/HealthBar04.png", "Media/player2Health/HealthBar03.png", "Media/player2Health/HealthBar02.png", "Media/player2Health/HealthBar01.png"];
	this.player2HealthImage.src = this.player2Health[this.health];
	
	var sine = Math.sin(this.angle);
	var cosine = Math.cos(this.angle);
	
	var xDir = -sine * this.directionY;
	var yDir = cosine * this.directionY;
	
	var xVel = xDir * this.speed;
	var yVel = yDir * this.speed;
	
	this.position.x += xVel * deltaTime;
	this.position.y += yVel * deltaTime;
	
	this.angle += this.angularVelocity * deltaTime * this.rotationSpeed;
	
	this.player2Borders();
	this.player2Keys.keybinds(deltaTime);
	
	/** Bullets **/
	if(this.isShooting && this.shootTimer > this.maxShootTimer){
		this.shootTimer = 0;
		this.player2Shoot();
		bulletSfx.play('fire');
	}
	
	//this.fireEmitter.update(deltaTime);
	//this.fireEmitter.draw();
	
	/** Handles player2 Lives and Health **/
	if(this.health == 0 && this.lives > 0 && !this.isDead){
		this.health = 4;
		this.lives -= 1;
		explosionSfx.play();
	}
	
	if(this.lives <= 0){
		this.isDead = true;
	}
}

player2.prototype.draw = function(){
	if(!this.isDead){
		context.save();
		context.translate(this.position.x, this.position.y);
		context.rotate(this.angle);
		
		context.drawImage(this.player2Image, -this.width / 2, -this.height / 2);
		//this.fireEmitter = createFireEmitter("Media/Art/fire.png", this.position.x, this.position.y);
		
		context.restore();
		
		context.drawImage(player2.player2HealthImage, player2.position.x - player2.healthWidth / 2, player2.position.y + player2.height / 2 + 10);
	}
}