var player = function(){
	this.playerImage = document.createElement("img");
	this.playerImage.src = 'Media/Art/ship.png';
	
	this.playerHeartImage = document.createElement("img");
	this.playerHeartImage.src = "Media/PlayerHealth/Heart.png";
	
	this.thrustImage = document.createElement("img");
	this.thrustImage.src = 'Media/Art/ShipThrust.png';

	this.playerHealthImage = document.createElement("img");
	
	this.bulletSfxCooldownTimer = 0;
	//this.thrusterSfxCooldownTimer = 0;
	
	this.bullets = [];
	this.bulletImage = document.createElement("img");
	this.bulletImage.src = 'Media/Art/Bullet.png';

	this.playerKeys = new playerKeys();
	
	this.isMoving = false,
	
	this.width = 40,
	this.height = this.isMoving? 65 : 60,
	this.healthWidth = 98,
	this.healthHeight = 12,
	
	this.position = new Vector2();
	this.position.set(canvas.width / 2 - this.width / 2, canvas.height / 2 - this.height / 2);
	
	this.mousePos = new Vector2();
	this.mouseClicked = false,
	
	this.fireEmitter = createFireEmitter("Media/Art/fire.png", this.position.x, this.position.y);
	
	this.randomCountdownTimer = 2,
	this.maxRandomCountdownTimer = this.randomCountdownTimer,
	
	this.speed = 350,
	this.angle = 0,
	this.rotationSpeed = 2.25,
	
	this.directionX = 0,
	this.directionY = 0,
	this.angularVelocity = 0,

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

player.prototype.playerShoot = function(){
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

player.prototype.playerBorders = function(){
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

player.prototype.update = function(deltaTime){
	this.shootTimer += deltaTime;
	
	console.log("isMoving:" + this.isMoving + " || imageHeight:" + this.height);
	
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
	
	this.playerBorders();
	this.playerKeys.keybinds(deltaTime);
	
	/** Bullets **/
	if(this.isShooting && this.shootTimer > this.maxShootTimer){
		this.shootTimer = 0;
		this.playerShoot();
		bulletSfx.play('fire');
	}
	
	/** Handles Player Lives and Health **/
	if(this.health == 0 && this.lives > 0 && !this.isDead){
		this.health = 4;
		this.lives -= 1;
		explosionSfx.play();
	}
	
	if(this.lives <= 0){
		this.isDead = true;
	}
}

player.prototype.draw = function(deltaTime){
	if(!this.isDead){
		context.save();
		context.translate(this.position.x, this.position.y);
		context.rotate(this.angle);	
			
		if(this.isMoving){
			context.drawImage(this.thrustImage, -this.width / 2, -this.height / 2);
			//this.fireEmitter = createFireEmitter("Media/Art/fire.png", this.position.x, this.position.y);
			//this.fireEmitter.update(deltaTime);
			//this.fireEmitter.draw();
		}else{
			context.drawImage(this.playerImage, -this.width / 2, -this.height / 2);
		}
		
		context.restore();
		
		context.drawImage(player.playerHealthImage, player.position.x - player.healthWidth / 2, player.position.y + player.height / 2 + 10);
	}
}