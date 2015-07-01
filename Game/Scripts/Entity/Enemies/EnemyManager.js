var enemyManager = function ()
{
	
}

enemyManager.prototype.createTinyEnemies = function(startPosition)
{
	for (var t = 0; t < noTinyEnemies; ++t)
	{
		var tempTiny = new TinyEnemy(startPosition);
		tinyEnemies.push(tempTiny);
	}
}

enemyManager.prototype.update = function(deltaTime)
{
	for (var b = 0; b < noOfBigEnemies; ++b)
	{
		bigEnemies[b].update(deltaTime);
	}
	
	for (var i = 0; i < noOfEnemies; ++i)
	{
		enemies[i].update(deltaTime);
	}
	
	for (var t = 0; t < noTinyEnemies; ++t)
	{
		tinyEnemies[t].update(deltaTime);
	}
	
	if (!player.isDead)
	{
		for(var i = 0; i < noOfEnemies; ++i)
		{
			if ( !enemies[i].isDead )
			{
				var eHit = intersects(
						player.position.x - player.width / 2, player.position.y - player.height / 2,
						player.width, player.height,
						enemies[i].x, enemies[i].y,
						enemies[i].width, enemies[i].height);
				
				if (eHit)
				{
					enemies[i].isDead = true;
					player.health -= 1;
				}
			}
		}
		
		for(var b = 0; b < noOfBigEnemies; ++b)
		{
			if ( !bigEnemies[b].isDead )
			{
				var EHit = intersects(
						player.position.x - player.width / 2, player.position.y - player.height / 2,
						player.width, player.height,
						bigEnemies[b].x, bigEnemies[b].y,
						bigEnemies[b].width, bigEnemies[b].height);
				
				if (EHit)
				{
					bigEnemies[b].isDead = true;
					player.health -= 1;
				}
			}
		}
		
		for(var t = 0; t < noTinyEnemies; ++t)
		{
			if (!tinyEnemies[t].isDead )
			{
				var tHit = intersects(
						player.position.x - player.width / 2, player.position.y - player.height / 2,
						player.width, player.height,
						tinyEnemies[t].x, tinyEnemies[t].y,
						tinyEnemies[t].width, tinyEnemies[t].height);
				
				if (tHit)
				{
					tinyEnemies[t].isDead = true;
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
			
			for(var i = 0; i < noOfEnemies; i++)
			{
				if (!enemies[i].isDead)
				{
					var bHit = intersects(
						player.bullets[j].xPos - player.bullets[j].width / 2, player.bullets[j].yPos - player.bullets[j].height / 2,
						player.bullets[j].width, player.bullets[j].height,
						enemies[i].x, enemies[i].y,
						enemies[i].width, enemies[i].height);
				
					if (bHit)
					{
						player.bullets[j].isDead = true;
						enemies[i].isDead = true;
						player.score += 100;
					}
				}
			}
			
			for(var t = 0; t < noTinyEnemies; ++t)
			{
				if (!tinyEnemies[t].isDead)
				{
					var tHit = intersects(
							player.bullets[j].xPos - player.bullets[j].width / 2, player.bullets[j].yPos - player.bullets[j].height / 2,
							player.bullets[j].width, player.bullets[j].height,
							tinyEnemies[t].x, tinyEnemies[t].y,
							tinyEnemies[t].width, tinyEnemies[t].height);
					
					if (tHit)
					{
						player.bullets[j].isDead = true;
						tinyEnemies[t].isDead = true;
						player.score += 100;
					}
				}
			}
			
			for(var b = 0; b < noOfBigEnemies; ++b)
			{
				if (!bigEnemies[b].isDead)
				{
					var EHit = intersects(
							player.bullets[j].xPos - player.bullets[j].width / 2, player.bullets[j].yPos - player.bullets[j].height / 2,
							player.bullets[j].width, player.bullets[j].height,
							bigEnemies[b].x, bigEnemies[b].y,
							bigEnemies[b].width, bigEnemies[b].height);
					
					if (EHit)
					{
						player.bullets[j].isDead = true;
						bigEnemies[b].isDead = true;
						player.score += 100;
						var tempVector = new Vector2();
						tempVector.set(bigEnemies[b].x, bigEnemies[b].y);
						this.createTinyEnemies(tempVector);
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
	for (var b = 0; b < noOfBigEnemies; ++b)
	{
		bigEnemies[b].draw();
	}
	
	for (var i = 0; i < noOfEnemies; ++i)
	{
		enemies[i].draw();
	}
	
	for (var t = 0; t < tinyEnemies.length; ++t)
	{
		tinyEnemies[t].draw();
	}
}

enemyManager.prototype.onScreen = function()
{
	if(enemy.onScreen())
	{
		for (var i = 0; i < noOfEnemies; ++i)
		{
			enemies[i].onScreen = true;
		}
	}
	
	if(BigEnemy.onScreen())
	{
		for (var b = 0; b < noOfBigEnemies; ++b)
		{
			bigEnemies[b].onScreen = true;
		}
	}
	
	if(tinyEnemy.onScreen())
	{
		for (var t = 0; t < noTinyEnemies; ++t)
		{
			tinyEnemies[t].onScreen = true;
		}
	}
}