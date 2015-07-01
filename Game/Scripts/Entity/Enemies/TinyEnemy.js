var noTinyEnemies = 4;
var tinyEnemies = [];

function rand(floor, ceil)
{
	return Math.floor( (Math.random()* (ceil-floor)) +floor );
}

var TinyEnemy = function()
{
	this.image = document.createElement("img");
	this.image.src = "Media/Art/TinyEnemy.png";
	
	this.width = 18;
	this.height = 18;
	
	this.x = BigEnemy.x;
	this.y = BigEnemy.y;
	this.speed = rand(160, 240);
	
	this.velocityX = -(Math.random()) * this.speed;
	this.velocityY = -(Math.random()) * this.speed;
	
	this.enemyOnScreen = false;
	this.isDead = true;
}

for (var t = 0; t < noTinyEnemies; ++t)
{
	var tiny = new TinyEnemy();
	tinyEnemies.push(tiny);
}

TinyEnemy.prototype.onScreen = function()
{
	var allEnemiesOnScreen = true;
	
	for (var t = 0; t < noTinyEnemies; ++t)
		{
			if(tinyEnemies[t].y <= 0)
			{
				allEnemiesOnScreen = false;
			}
			if(tinyEnemies[t].y >= canvas.height)
			{
				allEnemiesOnScreen = false;
			}
			if(tinyEnemies[t].x <= menuSize)
			{
				allEnemiesOnScreen = false;
			}
			if(tinyEnemies[t].x >= canvas.width)
			{
				allEnemiesOnScreen = false;
			}
		}
	
	return allEnemiesOnScreen;
}

TinyEnemy.prototype.update = function(deltaTime)
{
	// update the enemies position according to its current velocity.
	this.x += this.velocityX * deltaTime;
	this.y += this.velocityY * deltaTime;
	
	if (this.enemyOnScreen)
	{
		if(this.y < - (this.height / this.height))
		{
			this.velocityY = -this.velocityY;
		}
		if(this.y > canvas.height + (this.height / this.height))
		{
			this.velocityY = -this.velocityY;
		}
		if(this.x < - (this.height / this.height) + menuSize)
		{
			this.velocityX = -this.velocityX;
		}
		if(this.x >= canvas.width - (this.height / this.height))
		{
			this.velocityX = -this.velocityX;
		}
	}
}

TinyEnemy.prototype.draw = function()
{
	context.drawImage(this.image, this.x, this.y);
}