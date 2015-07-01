var enemyManager = function ()
{
	
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
	
	if(BigEnemy.isDead)
	{
		TinyEnemy.isDead = false;
		
		for (var t = 0; t < noTinyEnemies; ++t)
		{
			tinyEnemies[t].draw();
		}
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