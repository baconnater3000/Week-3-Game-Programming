var Vector2 = new Vector2();
var enemies = [];

var enemyImage = document.createElement("img");
enemyImage.src = 'Enemy.png';

var Enemy = function()
{
	this.position = Vector2,
	this.velocity = Vector2,

	this.angularVelocity = 0,
	this.rotation = 0,

	this.height = 28,
	this.width = 28,
	this.isDead = false
};

function SpawnEnemies(inputX, inoutY)
{
	var enemy = Enemy();
	enemies.push(enemy)
}

for(var i = 0; i < enemies.length; i++)
	{
		if (!enemies[i].isDead)
		{		
			enemies[i].x += enemies[i].velocityX * deltaTime;
			enemies[i].y += enemies[i].velocityY * deltaTime;
		}
		else
		{
			enemies.splice(i, 1);
		}
	}

/*function border()
{	
	var enemy = Enemy();

	if(enemy.position.y <= 0 - (enemy.height / 2))
	{
		enemy.position.y = canvas.height + (enemy.height / 2);
	}else
	if(enemy.position.y >= canvas.height + (enemy.height / 2))
	{
		enemy.position.y = 0 - (enemy.height / 2);
	}else
	if(enemy.position.x <= 0 - (enemy.height / 2))
	{
		enemy.position.x = canvas.width + (enemy.height / 2);
	}else
	if(enemy.position.x >= canvas.width + (enemy.height / 2))
	{
		enemy.position.x = 0 - (enemy.height / 2);
	}
}*/

Enemy.prototype.update = function(deltaTime)
{
	var playerAccel = 50;
	
	if ( keyboard.isKeyDown(keyboard.KEY_W) )
	{
		enemy.position.x -= playerAccel;
	}
	
	for(var i = 0; i < 0; i++)
	{
		SpawnEnemies(Math.random() * canvas.width, Math.random() * canvas.height);
	}
}

Enemy.prototype.draw = function()
{
	context.drawImage(enemyImage, enemy.position.x, enemy.position.y);
}