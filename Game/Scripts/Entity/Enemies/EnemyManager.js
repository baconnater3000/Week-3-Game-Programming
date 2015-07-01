var enemyManager = function ()
{
	
}

enemyManager.prototype.update = function(deltaTime)
{
	for (var j = 0; j < noOfBigEnemies; ++j)
	{
		bigEnemies[j].update(deltaTime);
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
		
		for(var j = 0; j < noOfBigEnemies; ++j)
		{
			if ( !bigEnemies[j].isDead )
			{
				var EHit = intersects(
						player.position.x - player.width / 2, player.position.y - player.height / 2,
						player.width, player.height,
						bigEnemies[j].x, bigEnemies[j].y,
						bigEnemies[j].width, bigEnemies[j].height);
				
				if (EHit)
				{
					bigEnemies[j].isDead = true;
					player.health -= 1;
				}
			}
		}
		
		for(var t = 0; t < noTinyEnemies; ++t)
		{
			if ( !tinyEnemies[t].isDead )
			{
				var EHit = intersects(
						player.position.x - player.width / 2, player.position.y - player.height / 2,
						player.width, player.height,
						tinyEnemies[t].x, tinyEnemies[t].y,
						tinyEnemies[t].width, tinyEnemies[t].height);
				
				if (EHit)
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
	for (var j = 0; j < noOfBigEnemies; ++j)
	{
		bigEnemies[j].draw();
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
		for (var j = 0; j < noOfBigEnemies; ++j)
		{
			bigEnemies[j].onScreen = true;
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