var enemyManager = function ()
{
	this.tinyEnemies = [];
	this.bigEnemies = [];
	this.enemies = [];
}

enemyManager.prototype.createTinyEnemies = function(number, startPosition)
{
	for (var t = 0; t < number; ++t)
	{
		var tempTiny = new TinyEnemy(startPosition);
		this.tinyEnemies.push(tempTiny);
	}
}

enemyManager.prototype.createEnemies = function(numOfEnemies)
{
	for (var b = 0; b < numOfEnemies; ++b)
	{
		var enemy = new Enemy();
		this.enemies.push(enemy);
	}
};

enemyManager.prototype.createBigEnemies = function(numOfEnemies)
{
	for (var b = 0; b < numOfEnemies; ++b)
	{
		var bigEnemy = new BigEnemy();
		this.bigEnemies.push(bigEnemy);
	}
};

enemyManager.prototype.enemiesOnScreen = function()
{
	var allEnemiesOnScreen = true;
	
	for (var i = 0; i < this.enemies.length; ++i)
	{
		if(this.enemies[i].y <= 0)
		{
			allEnemiesOnScreen = false;
		}
		if(this.enemies[i].y >= canvas.height)
		{
			allEnemiesOnScreen = false;
		}
		if(this.enemies[i].x <= menuSize)
		{
			allEnemiesOnScreen = false;
		}
		if(this.enemies[i].x >= canvas.width)
		{
			allEnemiesOnScreen = false;
		}
	}
	
	for (var b = 0; b < this.bigEnemies.length; ++b)
	{
		if(this.bigEnemies[b].y <= 0)
		{
			allEnemiesOnScreen = false;
		}
		if(this.bigEnemies[b].y >= canvas.height)
		{
			allEnemiesOnScreen = false;
		}
		if(this.bigEnemies[b].x <= menuSize)
		{
			allEnemiesOnScreen = false;
		}
		if(this.bigEnemies[b].x >= canvas.width)
		{
			allEnemiesOnScreen = false;
		}
	}
	
	return allEnemiesOnScreen;
}

enemyManager.prototype.update = function(deltaTime)
{
	for (var b = 0; b < this.bigEnemies.length; ++b)
	{
		this.bigEnemies[b].update(deltaTime);
	}
	
	for (var i = 0; i < this.enemies.length; ++i)
	{
		this.enemies[i].update(deltaTime);
	}
	
	for (var t = 0; t < this.tinyEnemies.length; ++t)
	{
		this.tinyEnemies[t].update(deltaTime);
	}
	
	if (!player.isDead)
	{
		for(var i = 0; i < this.enemies.length; ++i)
		{
			if ( !this.enemies[i].isDead )
			{
				var eHit = intersects(
						player.position.x - player.width / 2, player.position.y - player.height / 2,
						player.width, player.height,
						this.enemies[i].x, this.enemies[i].y,
						this.enemies[i].width, this.enemies[i].height);
				
				if (eHit)
				{
					this.enemies[i].isDead = true;
					player.health -= 1;
				}
			}
		}
		
		for(var b = 0; b < this.bigEnemies.length; ++b)
		{
			if ( !this.bigEnemies[b].isDead )
			{
				var EHit = intersects(
						player.position.x - player.width / 2, player.position.y - player.height / 2,
						player.width, player.height,
						this.bigEnemies[b].x, this.bigEnemies[b].y,
						this.bigEnemies[b].width, this.bigEnemies[b].height);
				
				if (EHit)
				{
					this.bigEnemies[b].isDead = true;
					player.health -= 1;
				}
			}
		}
		
		for(var t = 0; t < this.tinyEnemies.length; ++t)
		{
			if (!this.tinyEnemies[t].isDead )
			{
				var tHit = intersects(
						player.position.x - player.width / 2, player.position.y - player.height / 2,
						player.width, player.height,
						this.tinyEnemies[t].x, this.tinyEnemies[t].y,
						this.tinyEnemies[t].width, this.tinyEnemies[t].height);
				
				if (tHit)
				{
					this.tinyEnemies[t].isDead = true;
					player.health -= 1;
				}
			}
		}
	}
	
		for (var j = 0; j < player.bullets.length; ++j)
	{
		if(!player.bullets[j].isDead)
		{
			player.bullets[j].xPos += player.bullets[j].velocityX * deltaTime;
			player.bullets[j].yPos += player.bullets[j].velocityY * deltaTime;
			context.drawImage(player.bullets[j].image, player.bullets[j].xPos - player.bullets[j].width / 2,
										player.bullets[j].yPos - player.bullets[j].height / 2);
			
			for(var i = 0; i < this.enemies.length; i++)
			{
				if (!this.enemies[i].isDead)
				{
					var bHit = intersects(
						player.bullets[j].xPos - player.bullets[j].width / 2, player.bullets[j].yPos - player.bullets[j].height / 2,
						player.bullets[j].width, player.bullets[j].height,
						this.enemies[i].x, this.enemies[i].y,
						this.enemies[i].width, this.enemies[i].height);
				
					if (bHit)
					{
						player.bullets[j].isDead = true;
						this.enemies[i].isDead = true;
						player.score += 100;
					}
				}
			}
			
			for(var t = 0; t < this.tinyEnemies.length; ++t)
			{
				if (!this.tinyEnemies[t].isDead)
				{
					var tHit = intersects(
							player.bullets[j].xPos - player.bullets[j].width / 2, player.bullets[j].yPos - player.bullets[j].height / 2,
							player.bullets[j].width, player.bullets[j].height,
							this.tinyEnemies[t].x, this.tinyEnemies[t].y,
							this.tinyEnemies[t].width, this.tinyEnemies[t].height);
					
					if (tHit)
					{
						player.bullets[j].isDead = true;
						this.tinyEnemies[t].isDead = true;
						player.score += 120;
					}
				}
			}
			
			for(var b = 0; b < this.bigEnemies.length; ++b)
			{
				if (!this.bigEnemies[b].isDead)
				{
					var EHit = intersects(
							player.bullets[j].xPos - player.bullets[j].width / 2, player.bullets[j].yPos - player.bullets[j].height / 2,
							player.bullets[j].width, player.bullets[j].height,
							this.bigEnemies[b].x, this.bigEnemies[b].y,
							this.bigEnemies[b].width, this.bigEnemies[b].height);
					
					if (EHit)
					{
						player.bullets[j].isDead = true;
						this.bigEnemies[b].isDead = true;
						player.score += 150;
						var tempVector = new Vector2();
						tempVector.set(this.bigEnemies[b].x, this.bigEnemies[b].y);
						this.createTinyEnemies(4, tempVector);
					}
				}
			}
		}
		else
		{
			player.bullets.splice(j, 1);
		}
	}
}

enemyManager.prototype.draw = function()
{
	for (var i = 0; i < this.enemies.length; ++i)
	{
		this.enemies[i].draw();
	}
	
	for (var b = 0; b < this.bigEnemies.length; ++b)
	{
		this.bigEnemies[b].draw();
	}

	for (var t = 0; t < this.tinyEnemies.length; ++t)
	{
		if(!this.tinyEnemies[t].isDead)
		{
			this.tinyEnemies[t].draw();
		}
	}
}