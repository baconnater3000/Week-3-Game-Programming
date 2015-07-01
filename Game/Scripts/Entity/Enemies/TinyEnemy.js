var TinyEnemy = function(position)
{
	this.image = document.createElement("img");
	this.image.src = "Media/Art/TinyEnemy.png";
	
	this.width = 12;
	this.height = 12;
	
	this.x = position.x;
	this.y = position.y;
	
	this.speed = rand(250, 270);
	
	this.velocityX = Math.random() * this.speed;
	this.velocityY = Math.random() * this.speed;
	
	this.enemyOnScreen = true;
	this.isDead = false;
}

TinyEnemy.prototype.update = function(deltaTime)
{
	this.x += this.velocityX * deltaTime;
	this.y += this.velocityY * deltaTime;
	
	if(this.y < - (this.height / this.height))
	{
		this.velocityY = -this.velocityY;
	}
	if(this.y + this.height > canvas.height + (this.height / this.height))
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

TinyEnemy.prototype.draw = function()
{
	context.drawImage(this.image, this.x, this.y);
}