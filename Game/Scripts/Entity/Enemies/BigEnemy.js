function rand(floor, ceil)
{
	return Math.floor( (Math.random()* (ceil-floor)) +floor );
}

var bigEnemies = [];
var noOfBigEnemies = 3;

var BigEnemy = function()
{
	this.image = document.createElement("img");
	this.image.src = "Media/Art/BigEnemy.png";
	
	this.height = 31;
	this.width = 31;
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
	
	this.speed = rand(60, 80);
	
	this.velocityX = -dirX * this.speed;
	this.velocityY = -dirY * this.speed;
	
	this.enemyOnScreen = true;
	this.isDead = false;
}

for (var j = 0; j < noOfBigEnemies; ++j)
{
	var bigEnemy = new BigEnemy();
	bigEnemies.push(bigEnemy);
}

BigEnemy.prototype.onScreen = function()
{
	var allEnemiesOnScreen = true;
	
	for (var j = 0; j < noOfBigEnemies; ++j)
	{
		if(bigEnemies[j].y <= 0)
		{
			allEnemiesOnScreen = false;
		}
		if(bigEnemies[j].y >= canvas.height)
		{
			allEnemiesOnScreen = false;
		}
		if(bigEnemies[j].x <= 0)
		{
			allEnemiesOnScreen = false;
		}
		if(bigEnemies[j].x >= canvas.width)
		{
			allEnemiesOnScreen = false;
		}
	}
	
	return allEnemiesOnScreen;
}

BigEnemy.prototype.update = function(deltaTime)
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

BigEnemy.prototype.draw = function()
{
	context.drawImage(this.image, this.x, this.y);
}