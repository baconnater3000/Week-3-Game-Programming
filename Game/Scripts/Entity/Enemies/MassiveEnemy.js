function rand(floor, ceil)
{
	return Math.floor( (Math.random()* (ceil-floor)) +floor );
}

var MassiveEnemy = function()
{
	this.massiveHealthImage = document.createElement("img");
	
	this.height = 56;
	this.width = 56;
	
	this.dimensionsTimer = 0;
	this.fullSize = 0.5;
	
	var dirX = Math.random();
	var dirY = Math.random();

	var magnitude = (dirX * dirX) + (dirY * dirY);
	if(magnitude != 0)
	{
		var oneOverMag = 1 / Math.sqrt(magnitude);
		dirX *= oneOverMag;
		dirY *= oneOverMag;
	}
	
	this.speed = rand(-200, 200);
	
	this.velocityX = -dirX * this.speed;
	this.velocityY = -dirY * this.speed;
	
	this.x = rand(250, canvas.width - this.width);
	this.y = rand(this.height, canvas.height - this.height);
	this.angle = 0;
	
	this.isDead = false;
	this.health = 5;
	
	this.massiveHealth = ["Media/Art/Enemies/MassiveHealth/MassiveHealth00.png",
								"Media/Art/Enemies/MassiveHealth/MassiveHealth01.png",
								"Media/Art/Enemies/MassiveHealth/MassiveHealth02.png",
								"Media/Art/Enemies/MassiveHealth/MassiveHealth03.png",
								"Media/Art/Enemies/MassiveHealth/MassiveHealth04.png",
								"Media/Art/Enemies/MassiveHealth/MassiveHealth05.png"];

};

MassiveEnemy.prototype.update = function(deltaTime)
{
	this.x += this.velocityX * deltaTime;
	this.y += this.velocityY * deltaTime;
	
	this.dimensionsTimer += deltaTime;
	if (this.dimensionsTimer >= this.fullSize)
	{
		this.dimensionsTimer = this.fullSize;
	}
	
	if(this.y < - (this.height / this.height))
	{
		this.velocityY = -this.velocityY;
	}
	if(this.y + this.height> canvas.height + (this.height / this.height))
	{
		this.velocityY = -this.velocityY;
	}
	if(this.x < - (this.height / this.height) + menuSize)
	{
		this.velocityX = -this.velocityX;
	}
	if(this.x + this.width >= canvas.width - (this.height / this.height))
	{
		this.velocityX = -this.velocityX;
	}
};

MassiveEnemy.prototype.draw = function()
{
	context.save();
	context.translate(this.x, this.y);
	context.rotate(this.angle);
	
	for (var m = 0; m < enemyManager.massiveEnemies.length; ++m)
	{
		this.massiveHealthImage.src = this.massiveHealth[this.health];
	}
	context.drawImage(this.massiveHealthImage, this.x / this.x, this.y / this.y, (this.dimensionsTimer / this.fullSize) * this.width,
					(this.dimensionsTimer / this.fullSize) * this.height);
	
	context.restore();
};