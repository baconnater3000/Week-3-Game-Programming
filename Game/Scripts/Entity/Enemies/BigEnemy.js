function rand(floor, ceil)
{
	return Math.floor( (Math.random()* (ceil-floor)) +floor );
}

var BigEnemy = function()
{
	this.image = document.createElement("img");
	this.image.src = "Media/Art/Enemies/BigEnemy.png";
	
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
};

BigEnemy.prototype.update = function(deltaTime)
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

BigEnemy.prototype.draw = function()
{
	if(!this.isDead)
	{
		context.save();
		context.translate(this.x, this.y);
		context.rotate(this.angle);
		
		context.drawImage(this.image, this.x / this.x, this.y / this.y, (this.dimensionsTimer / this.fullSize) * this.width,
						(this.dimensionsTimer / this.fullSize) * this.height);

		
		context.restore();
	}
};