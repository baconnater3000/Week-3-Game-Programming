var WaveState = function()
{
	this.prototype = BaseState;
	this.waveNumber = 1;
	this.hasSpawned = false;
	this.nextWave = false;
	
	this.displayCountdownTimer = false;
	this.waveCountdownTimer = 5;
	this.maxwaveCountdownTimer = this.waveCountdownTimer;
}

WaveState.prototype.load = function()
{
	
}

WaveState.prototype.unload = function()
{
	
}

var spawn = false

WaveState.prototype.update = function(deltaTime)
{
	if(!stateManager.isPaused){
		canvas.width = canvas.width;
		context.drawImage(background, 0, 0);
		
		player.update(deltaTime);
		player.draw();
		
		shop.update(deltaTime);
		shop.draw();
		
		timer += deltaTime;
		
		if(this.waveCountdownTimer >= - 1){
			this.waveCountdownTimer -= deltaTime;
		}
		
		if (this.waveNumber == 1 && !this.hasSpawned && spawn == false){
			enemyManager.createEnemies(10);
			enemyManager.createBigEnemies(2);
			
			spawn = true;
			this.hasSpawned = true
			this.nextWave = true;
		}
		
		if (this.waveNumber == 2 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
			enemyManager.createEnemies(12);
			enemyManager.createBigEnemies(4);
			//enemyManager.createMassiveEnemies(1);
			this.displayCountdownTimer = false;
			this.nextWave = true;
			this.hasSpawned = true;
		}
		
		if (this.waveNumber == 3 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
			enemyManager.createEnemies(14);
			enemyManager.createBigEnemies(6);
			//enemyManager.createMassiveEnemies(1);
			
			this.displayCountdownTimer = false;
			this.nextWave = true;
			this.hasSpawned = true;
		}
		
		if (this.waveNumber == 4 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
			enemyManager.createEnemies(16);
			enemyManager.createBigEnemies(8);
			
			this.displayCountdownTimer = false;
			this.nextWave = true;
			this.hasSpawned = true;
		}
		
		if (this.waveNumber == 5 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
			enemyManager.createEnemies(18);
			enemyManager.createBigEnemies(10);
			enemyManager.createMassiveEnemies(1);
			
			this.displayCountdownTimer = false;
			this.nextWave = true;
			this.hasSpawned = true;
		}
		
		if (this.waveNumber == 6 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
			enemyManager.createEnemies(20);
			enemyManager.createBigEnemies(12);
			
			this.displayCountdownTimer = false;
			this.nextWave = true;
			this.hasSpawned = true;
		}
		
		if (this.waveNumber == 7 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
			enemyManager.createEnemies(22);
			enemyManager.createBigEnemies(14);
			//enemyManager.createMassiveEnemies(1);
			
			this.displayCountdownTimer = false;
			this.nextWave = true;
			this.hasSpawned = true;
		}
		
		if (this.waveNumber == 8 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
			enemyManager.createEnemies(24);
			enemyManager.createBigEnemies(16);
			enemyManager.createMassiveEnemies(2);
			
			this.displayCountdownTimer = false;
			this.nextWave = true;
			this.hasSpawned = true;
		}
		
		if (this.waveNumber == 9 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
			enemyManager.createEnemies(26);
			enemyManager.createBigEnemies(18);
			enemyManager.createMassiveEnemies(2);
			
			this.displayCountdownTimer = false;
			this.nextWave = true;
			this.hasSpawned = true;
		}
		
		if (this.waveNumber == 10 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
			enemyManager.createEnemies(28);
			enemyManager.createBigEnemies(20);
			enemyManager.createMassiveEnemies(5);
			
			this.displayCountdownTimer = false;
			this.hasSpawned = true;
			this.nextWave = true;
		}
		
		if(enemyManager.tinyEnemies.length <= 0 && enemyManager.enemies.length <= 0 && enemyManager.bigEnemies.length <= 0 && enemyManager.massiveEnemies.length <= 0 && this.nextWave){
			this.hasSpawned = false;

			this.nextWave = false;
			this.waveCountdownTimer = this.maxWaveCountdownTimer;

			this.waveCountdownTimer = this.maxwaveCountdownTimer;
			this.displayCountdownTimer = true;
			this.waveNumber += 1;
		}
		
		enemyManager.draw();
		enemyManager.update(deltaTime);

		
		if(player.isDead == true)
		{
			stateManager.switchState(new LoseState());
		}
		
		if(player.isDead == false && this.waveNumber > 10)
		{
			stateManager.switchState(new WinState());
		}
	}
		if(keyboard.isKeyDown(keyboard.KEY_ESCAPE) == true)
		{
			if(!stateManager.isPaused)
			{
				var ps = new PauseState();
				ps.currentState = "WS";
				stateManager.switchState(ps);
				stateManager.isPaused = true;
				
			}else 
			{
				stateManager.isPaused = false;
			}
		}
}

WaveState.prototype.draw = function()
{
	context.save();
	context.fillStyle = "White";
	context.font = "25px Onyx";
	
	context.fillText("Wave: " + this.waveNumber + " / 10", 10, 60);
	
	context.font = "50px Onyx";
	
	var text = "Next wave in: " + Math.floor(this.waveCountdownTimer) + " seconds!";
	var center = context.measureText(text);
	if(this.displayCountdownTimer){
		context.fillText(text, canvas.width / 2, canvas.height / 2 - 25);
	}
	
	context.restore();
}