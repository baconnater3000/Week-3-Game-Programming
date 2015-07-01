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
}