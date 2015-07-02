var WaveState = function()
{
	this.prototype = BaseState;
	this.waveNumber = 1;
	this.hasSpawned = false;
	this.nextWave = false;
	
	this.displayCountdownTimer = false;
	this.waveCountdownTimer = 10;
	this.maxWaveCountdownTimer = this.waveCountdownTimer;
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
		enemyManager.createEnemies(5);
		//enemyManager.createBigEnemies(1);
		
		this.hasSpawned = true
		this.nextWave = true;
	}
	
	if (this.waveNumber == 2 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
		enemyManager.createEnemies(8);
		//enemyManager.createBigEnemies(1);
		
		this.displayCountdownTimer = false;
		this.nextWave = true;
		this.hasSpawned = true;
	}
	
	if (this.waveNumber == 3 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
		enemyManager.createEnemies(1);
		//enemyManager.createBigEnemies(2);
		
		this.displayCountdownTimer = false;
		this.nextWave = true;
		this.hasSpawned = true;
	}
	
	if (this.waveNumber == 4 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
		enemyManager.createEnemies(1);
		//enemyManager.createBigEnemies(2);
		//enemyManager.createNewEnemies(5);
		
		this.displayCountdownTimer = false;
		this.nextWave = true;
		this.hasSpawned = true;
	}
	
	if (this.waveNumber == 5 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
		enemyManager.createEnemies(1);
		//enemyManager.createBigEnemies(2);
		//enemyManager.createNewEnemies(5);
		
		this.displayCountdownTimer = false;
		this.nextWave = true;
		this.hasSpawned = true;
	}
	
	if (this.waveNumber == 6 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
		enemyManager.createEnemies(1);
		//enemyManager.createBigEnemies(2);
		//enemyManager.createNewEnemies(5);
		
		this.displayCountdownTimer = false;
		this.nextWave = true;
		this.hasSpawned = true;
	}
	
	if (this.waveNumber == 7 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
		enemyManager.createEnemies(1);
		//enemyManager.createBigEnemies(2);
		//enemyManager.createNewEnemies(5);
		
		this.displayCountdownTimer = false;
		this.nextWave = true;
		this.hasSpawned = true;
	}
	
	if (this.waveNumber == 8 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
		//enemyManager.createEnemies(1);
		//enemyManager.createBigEnemies(2);
		//enemyManager.createNewEnemies(5);
		
		this.displayCountdownTimer = false;
		this.nextWave = true;
		this.hasSpawned = true;
	}
	
	if (this.waveNumber == 9 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
		//enemyManager.createEnemies(1);
		//enemyManager.createBigEnemies(2);
		//enemyManager.createNewEnemies(5);
		
		this.displayCountdownTimer = false;
		this.nextWave = true;
		this.hasSpawned = true;
	}
	
	if (this.waveNumber == 10 && this.waveCountdownTimer <= 0 && !this.hasSpawned){
		enemyManager.createEnemies(10);
		enemyManager.createBigEnemies(2);
		//enemyManager.createNewEnemies(5);
		
		this.displayCountdownTimer = false;
		this.hasSpawned = true;
	}
	
	if(enemyManager.tinyEnemies.length <= 0 && enemyManager.enemies.length <= 0 && enemyManager.bigEnemies.length <= 0 /* && enemyManager.massiveEnemies.length <= 0*/ && this.nextWave){
		this.hasSpawned = false;
		this.nextWave = false;
		this.waveCountdownTimer = this.maxWaveCountdownTimer;
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
		stateManager.switchState(new PauseState());
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