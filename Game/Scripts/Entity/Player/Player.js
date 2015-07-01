var player = function(){
	this.playerImage = document.createElement("img");
	this.playerImage.src = 'Media/Art/ship.png';
	
	this.playerHeartImage = document.createElement("img");
	this.playerHeartImage.src = "Media/PlayerHealth/Heart.png";
	
	this.thrustImage = document.createElement("img");
	this.thrustImage.src = 'Media/Art/thrust.png';

	this.playerHealthImage = document.createElement("img");
	
	this.bullets = [];
	this.bulletImage = document.createElement("img");
	this.bulletImage.src = 'Media/Art/Bullet.png';

	this.playerKeys = new playerKeys();
	
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
	
	this.shootTimer = 0.35,
	this.maxShootTimer = this.shootTimer
}

player.prototype.playerShoot = function()
{
	var bullet = 
	{
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

	bullet.xPos = this.position.x;
	bullet.yPos = this.position.y;
	
	bullet.isDead = false;	
	
	this.bullets.push(bullet);
}

player.prototype.playerBorders = function()
{
	if(this.position.y <= 0 - (this.height / 2))
	{
		this.position.y = canvas.height + (this.height / 2);
	}else
	if(this.position.y >= canvas.height + (this.height / 2))
	{
		this.position.y = 0 - (this.height / 2);
	}else
	if(this.position.x <= 0 - (this.height / 2) + menuSize)
	{
		this.position.x = canvas.width + (this.height / 2);
	}else
	if(this.position.x >= canvas.width + (this.height / 2))
	{
		this.position.x = 0 - (this.height / 2) + menuSize;
	}
	
	for(var j = 0; j < this.bullets.length; j++)
	{
		if(this.bullets[j].isDead == false)
		{
			if(this.bullets[j].xPos < 0 + menuSize || this.bullets[j].xPos > canvas.width || this.bullets[j].yPos < 0 || this.bullets[j].yPos > canvas.height)
			{
				this.bullets[j].isDead = true;
			}
		}
	}
}

player.prototype.update = function(deltaTime){
	this.shootTimer -= deltaTime;
	
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
	
	if(this.isShooting && this.shootTimer <= 0)
	{
		this.shootTimer = this.maxShootTimer;
		this.playerShoot();
	}
	
	//this.fireEmitter.update(deltaTime);
	//this.fireEmitter.draw();
	
	/*if(this.randomCountdownTimer <= 0){
		this.randomCountdownTimer = this.maxRandomCountdownTimer;
		this.health -= 1;
	}*/
	
	/** Handles Player Lives and Health **/
	if(this.health == 0 && this.lives > 0 && !this.isDead)
	{
		this.health = 4;
		this.lives -= 1;
	}
	
	if(this.lives <= 0)
	{
		this.isDead = true;
	}
}

player.prototype.draw = function()
{
	if(!this.isDead)
	{
		context.save();
		context.translate(this.position.x, this.position.y);
		context.rotate(this.angle);
		
		context.drawImage(this.playerImage, -this.width / 2, -this.height / 2);
		//this.fireEmitter = createFireEmitter("Media/Art/fire.png", this.position.x, this.position.y);
		
		context.restore();
		
		context.drawImage(player.playerHealthImage, player.position.x - player.healthWidth / 2, player.position.y + player.height / 2 + 10);
	}
}