function rand(floor, ceil)
{
	return Math.floor( (Math.random()* (ceil-floor)) +floor );
}

var enemies = [];
var noOfEnemies = 3;

var Enemy = function()
{
	this.image = document.createElement("img");
	this.image.src = "Media/Art/Enemy.png";
	
	this.height = 20;
	this.width = 20;
	// to set a random position just off screen, we'll start at the centre of the
	// screen then move in a random direction by the width of the screen
	var x = canvas.width * Math.random();
	var y = canvas.height * Math.random();
	
	var dirX = Math.random();
	var dirY = Math.random();
	// 'normalize' the direction (the hypotenuse of the triangle formed
	// by x,y will equal 1)
	var magnitude = (dirX * dirX) + (dirY * dirY);
	if(magnitude != 0)
	{
		var oneOverMag = 1 / Math.sqrt(magnitude);
		dirX *= oneOverMag;
		dirY *= oneOverMag;
	}
	
	var movX = dirX * canvas.width;
	var movY = dirY * canvas.height;
	
	this.x = x + movX;
	this.y = y + movY;
	
	this.speed = rand(100, 160);
	
	this.velocityX = -dirX * this.speed;
	this.velocityY = -dirY * this.speed;
	
	this.enemyOnScreen = true;
	this.isDead = false;
}

for (var i = 0; i < noOfEnemies; ++i)
{
	var enemy = new Enemy();
	enemies.push(enemy);
}

Enemy.prototype.onScreen = function()
{
	var allEnemiesOnScreen = true;
	
	for (var i = 0; i < noOfEnemies; ++i)
		{
			if(enemies[i].y <= 0)
			{
				allEnemiesOnScreen = false;
			}
			if(enemies[i].y >= canvas.height)
			{
				allEnemiesOnScreen = false;
			}
			if(enemies[i].x <= 0)
			{
				allEnemiesOnScreen = false;
			}
			if(enemies[i].x >= canvas.width)
			{
				allEnemiesOnScreen = false;
			}
		}
	
	return allEnemiesOnScreen;
}

Enemy.prototype.update = function(deltaTime)
{
	// update the enemies position according to its current velocity.
	this.x += this.velocityX * deltaTime;
	this.y += this.velocityY * deltaTime;
	
	if (this.enemyOnScreen)
	{
		if(this.y < -(this.height / 2))
		{
			this.velocityY = -this.velocityY;
		}
		if(this.y > canvas.height + (this.height / 2))
		{
			this.velocityY = -this.velocityY;
		}
		if(this.x < -(this.height / 2))
		{
			this.velocityX = -this.velocityX;
		}
		if(this.x >= canvas.width - (this.height / 2))
		{
			this.velocityX = -this.velocityX;
		}
	}
}


Enemy.prototype.draw = function()
{
	context.drawImage(this.image, this.x, this.y);
}