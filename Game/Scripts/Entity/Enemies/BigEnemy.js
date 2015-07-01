function rand(floor, ceil)
{
	return Math.floor( (Math.random()* (ceil-floor)) +floor );
}

var BigEnemy = function()
{
	this.image = document.createElement("img");
	this.image.src = "Media/Art/BigEnemy.png";
	
	this.height = 28;
	this.width = 28;

	var x = canvas.width * Math.random();
	var y = canvas.height * Math.random();
	
	var dirX = Math.random();
	var dirY = Math.random();

	var magnitude = (dirX * dirX) + (dirY * dirY);
	if(magnitude != 0)
	{
		var oneOverMag = 1 / Math.sqrt(magnitude);
		dirX *= oneOverMag;
		dirY *= oneOverMag;
	}
	
	var movX = dirX * canvas.width;
	var movY = dirY * canvas.height;
	
	this.x = x + movX + 250;
	this.y = y + movY;
	
	this.speed = rand(60, 80);
	
	this.velocityX = -dirX * this.speed;
	this.velocityY = -dirY * this.speed;
	
	this.enemyOnScreen = true;
	this.isDead = false;
}

BigEnemy.prototype.update = function(deltaTime)
{
	this.x += this.velocityX * deltaTime;
	this.y += this.velocityY * deltaTime;
	
	if (this.enemyOnScreen)
	{
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
	}
}

BigEnemy.prototype.draw = function()
{
	if(!this.isDead)
	{
		context.drawImage(this.image, this.x, this.y);
	}
}