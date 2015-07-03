function rand(floor, ceil)
{
	return Math.floor( (Math.random()* (ceil-floor)) +floor );
};

var enemyManager = function ()
{
	this.tinyEnemies = [];
	this.bigEnemies = [];
	this.enemies = [];
	this.massiveEnemies = [];
}

enemyManager.prototype.createTinyEnemies = function(number, startPosition)
{
	for (var t = 0; t < number; ++t)
	{
		var tempTiny = new TinyEnemy(startPosition);
		//console.log("CREATED ENEMY AT: " + startPosition.x + " " + startPosition.y);
		this.tinyEnemies.push(tempTiny);
	}
	
	//console.log("CREATED: " + number + " ENEMIES");
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

enemyManager.prototype.createMassiveEnemies = function(numOfEnemies)
{
	for (var m = 0; m < numOfEnemies; ++m)
	{
		var massiveEnemy = new MassiveEnemy();
		this.massiveEnemies.push(massiveEnemy);
	}
};

enemyManager.prototype.update = function(deltaTime)
{
	for (var t = 0; t < this.tinyEnemies.length; ++t)
	{
		this.tinyEnemies[t].update(deltaTime);
	}
	
	for (var i = 0; i < this.enemies.length; ++i)
	{
		this.enemies[i].update(deltaTime);
	}
	
	for (var b = 0; b < this.bigEnemies.length; ++b)
	{
		this.bigEnemies[b].update(deltaTime);
	}
	
	for (var m = 0; m < this.massiveEnemies.length; ++m)
	{
		this.massiveEnemies[m].update(deltaTime);
	}
	
	/*
	if (shop.killAll)
	{
		
	}
	*/
	
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
					this.enemies.splice(i, 1);
					if(!player.isI){player.health -= 1;}
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
					this.bigEnemies.splice(b, 1);
					if(!player.isI){player.health -= 2;}
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
					this.tinyEnemies.splice(t, 1);
					if(!player.isI){player.health -= 1;}
				}
			}
		}
		
		for(var m = 0; m < this.massiveEnemies.length; ++m)
		{
			if (!this.massiveEnemies[m].isDead )
			{
				var MHit = intersects(
						player.position.x - player.width / 2, player.position.y - player.height / 2,
						player.width, player.height,
						this.massiveEnemies[m].x, this.massiveEnemies[m].y,
						this.massiveEnemies[m].width, this.massiveEnemies[m].height);
				
				if (MHit)
				{
					this.massiveEnemies[m].health -= 1;
					if(!player.isI){player.health -= 1;}
				}else
				if (MHit && this.massiveEnemies[m].health <= 0)
				{
					this.massiveEnemies.splice(m, 1);
					this.massiveEnemies[m].isDead = true;
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
						this.enemies[i].isDead = true;
						player.score += 100;
						this.enemies.splice(i, 1);
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
						player.score += 150;
						var tempVector = new Vector2();
						tempVector.set(rand(this.bigEnemies[b].x, this.bigEnemies[b].x + this.bigEnemies[b].width),
										rand(this.bigEnemies[b].y, this.bigEnemies[b].y + this.bigEnemies[b].height));
						this.createTinyEnemies(rand(2, 4), tempVector);
						this.bigEnemies[b].isDead = true;
						this.bigEnemies.splice(b, 1);
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
						this.tinyEnemies[t].isDead = true;
						player.score += 120;
						player.bullets[j].isDead = true;
						this.tinyEnemies.splice(t, 1);
					}
				}
			}
			
			for(var m = 0; m < this.massiveEnemies.length; ++m)
			{
				if (!this.massiveEnemies[m].isDead)
				{
					var mHit = intersects(
							player.bullets[j].xPos - player.bullets[j].width / 2, player.bullets[j].yPos - player.bullets[j].height / 2,
							player.bullets[j].width, player.bullets[j].height,
							this.massiveEnemies[m].x, this.massiveEnemies[m].y,
							this.massiveEnemies[m].width, this.massiveEnemies[m].height);
					
					if (mHit && this.massiveEnemies[m].health > 0)
					{
						player.bullets[j].isDead = true;
						this.massiveEnemies[m].health -= 1;
						player.score += 20;
					}else
					if (mHit && this.massiveEnemies[m].health <= 0)
					{
						player.bullets[j].isDead = true;
						this.massiveEnemies[m].isDead = true;
						player.score += 300;
						var tempVector = new Vector2();
						tempVector.set(rand(this.massiveEnemies[m].x, this.massiveEnemies[m].x + this.massiveEnemies[m].width),
										rand(this.massiveEnemies[m].y, this.massiveEnemies[m].y + this.massiveEnemies[m].height));
						this.createTinyEnemies(rand(4, 8), tempVector);
						this.massiveEnemies.splice(m, 1);
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
	for (var t = 0; t < this.tinyEnemies.length; ++t)
	{
		if(!this.tinyEnemies[t].isDead)
		{
			this.tinyEnemies[t].draw();
		}
	}
	
	for (var i = 0; i < this.enemies.length; ++i)
	{
		this.enemies[i].draw();
	}
	
	for (var b = 0; b < this.bigEnemies.length; ++b)
	{
		this.bigEnemies[b].draw();
	}
	
	for (var m = 0; m < this.massiveEnemies.length; ++m)
	{
		this.massiveEnemies[m].draw();
	}
}