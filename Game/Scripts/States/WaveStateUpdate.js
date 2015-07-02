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

WaveState.prototype.update = function(deltaTime)
{
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
	
	if (this.waveNumber == 1 && !this.hasSpawned){
		enemyManager.createEnemies(10);
		enemyManager.createBigEnemies(2);
		
		this.hasSpawned = true
		this.nextWave = true;
	}
	
	if (this.waveNumber == 2 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
		enemyManager.createEnemies(11);
		enemyManager.createBigEnemies(3);
		enemyManager.createMassiveEnemies(1);
		this.displayCountdownTimer = false;
		this.nextWave = true;
		this.hasSpawned = true;
	}
	
	if (this.waveNumber == 3 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
		enemyManager.createEnemies(12);
		enemyManager.createBigEnemies(4);
		enemyManager.createMassiveEnemies(1);
		
		this.displayCountdownTimer = false;
		this.nextWave = true;
		this.hasSpawned = true;
	}
	
	if (this.waveNumber == 4 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
		enemyManager.createEnemies(14);
		enemyManager.createBigEnemies(5);
		
		this.displayCountdownTimer = false;
		this.nextWave = true;
		this.hasSpawned = true;
	}
	
	if (this.waveNumber == 5 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
		enemyManager.createEnemies(10);
		enemyManager.createBigEnemies(2);
		enemyManager.createMassiveEnemies(1);
		
		this.displayCountdownTimer = false;
		this.nextWave = true;
		this.hasSpawned = true;
	}
	
	if (this.waveNumber == 6 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
		enemyManager.createEnemies(1);
		enemyManager.createBigEnemies(2);
		
		this.displayCountdownTimer = false;
		this.nextWave = true;
		this.hasSpawned = true;
	}
	
	if (this.waveNumber == 7 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
		enemyManager.createEnemies(1);
		enemyManager.createBigEnemies(2);
		enemyManager.createMassiveEnemies(1);
		
		this.displayCountdownTimer = false;
		this.nextWave = true;
		this.hasSpawned = true;
	}
	
	if (this.waveNumber == 8 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
		enemyManager.createEnemies(1);
		enemyManager.createBigEnemies(2);
		
		this.displayCountdownTimer = false;
		this.nextWave = true;
		this.hasSpawned = true;
	}
	
	if (this.waveNumber == 9 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
		enemyManager.createEnemies(1);
		enemyManager.createBigEnemies(2);
		enemyManager.createMassiveEnemies(2);
		
		this.displayCountdownTimer = false;
		this.nextWave = true;
		this.hasSpawned = true;
	}
	
	if (this.waveNumber == 10 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
		enemyManager.createEnemies(1);
		enemyManager.createBigEnemies(2);
		enemyManager.createMassiveEnemies(5);
		
		this.displayCountdownTimer = false;
		this.hasSpawned = true;
		this.nextWave = true;
	}
	
	if(enemyManager.tinyEnemies.length <= 0 && enemyManager.enemies.length <= 0 && enemyManager.bigEnemies.length <= 0 /* && enemyManager.massiveEnemies.length <= 0*/ && this.nextWave){
		this.hasSpawned = false;

		this.nextWave = false;
		this.waveCountdownTimer = this.maxWaveCountdownTimer;

		this.waveCountdownTimer = this.maxwaveCountdownTimer;
		this.displayCountdownTimer = true;
		this.waveNumber += 1;
	}
	
	enemyManager.update(deltaTime);
	enemyManager.draw();
	
	if(player.isDead == true)
	{
		stateManager.switchState(new LoseState());
	}
	
	if(player.isDead == false && this.waveNumber > 10)
	{
		stateManager.switchState(new WinState());
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_ESCAPE) == true)
	{
		/*if(!gamestatemanager.ispaused){
			stateManager.switchState(new PauseState());
			
			
			STOPS UPDATING THE GAME eg: update function or deltaTime
			DRAWS A SCREEN OVER THE GAME
			ispaused = true;
		}else{
			resumes the updating of the game which in turn will continue the game to draw over the paused menu background
			ispaused = false;
		}*/
	}
}

WaveState.prototype.draw = function()
{
	context.save();
	context.fillStyle = "White";
	context.font = "25px Onyx";
	
	context.fillText("The Current Wave is: " + this.waveNumber + "/10", canvas.width / 2, canvas.height / 2);
	
	context.font = "50px Onyx";
	
	if(this.displayCountdownTimer){
		context.fillText("Next wave in: " + Math.floor(this.waveCountdownTimer) + " seconds!", canvas.width / 2, canvas.height / 2 + 100);
	}
	
	context.restore();
}