var canvas = document.getElementById("Game");
var context = canvas.getContext("2d");

//setting up delta time variables
var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

var keyboard = new Keyboard();

var enemies = [];
var noOfEnemies = 3;

for (var i = 0; i < noOfEnemies; ++i)
{
	var enemy = new Enemy();
	enemies.push(enemy);
}

// This function will return the time in seconds since the function 
// was last called
// You should only call this function once per frame
function getDeltaTime()
{
	endFrameMillis = startFrameMillis;
	startFrameMillis = Date.now();

		// Find the delta time (dt) - the change in time since the last drawFrame
		// We need to modify the delta time to something we can use.
		// We want 1 to represent 1 second, so if the delta is in milliseconds
		// we divide it by 1000 (or multiply by 0.001). This will make our 
		// animations appear at the right speed, though we may need to use
		// some large values to get objects movement and rotation correct
	var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;
	
		// validate that the delta is within range
	if(deltaTime > 1)
		deltaTime = 1;
		
	return deltaTime;
}

//-------------------- Don't modify anything above here



function enemiesOnScreen()
{
	var allEnemiesOnScreen = true;
	
	for (var i = 0; i < noOfEnemies; ++i)
	{
		if(enemies[i].y <= 0)
		{
			allEnemiesOnScreen = false;
		}
		if(enemies[i].y >= canvas.height)
		{
			allEnemiesOnScreen = false;
		}
		if(enemies[i].x <= 0)
		{
			allEnemiesOnScreen = false;
		}
		if(enemies[i].x >= canvas.width)
		{
			allEnemiesOnScreen = false;
		}
	}
	
	return allEnemiesOnScreen;
}


function run()
{
	var deltaTime = getDeltaTime();
	
	var allEnemiesOnScreen = allEnemiesOnScreen;
	
	context.fillStyle = "black";
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.fillStyle = "white";
	context.fillText(enemiesOnScreen(), 100, 100);
	
	// update all the enemies in the enemies array
	for (var i = 0; i < noOfEnemies; ++i)
	{
		enemies[i].update(deltaTime);
	}
	// draw all the enemies
	for (var i = 0; i < noOfEnemies; ++i)
	{
		enemies[i].draw();
	}
	
	var allOnScreen = enemiesOnScreen();
	
	if(allOnScreen)
	{
		for (var i = 0; i < noOfEnemies; ++i)
		{
			enemies[i].onScreen = true;
		}
	}
}

//-------------------- Don't modify anything below here


// This code will set up the framework so that the 'run' function is called 60 times per second.
// We have a some options to fall back on in case the browser doesn't support our preferred method.
(function() {
  var onEachFrame;
  if (window.requestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); window.requestAnimationFrame(_cb); }
      _cb();
    };
  } else if (window.mozRequestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); window.mozRequestAnimationFrame(_cb); }
      _cb();
    };
  } else {
    onEachFrame = function(cb) {
      setInterval(cb, 1000 / 60);
    }
  }
  
  window.onEachFrame = onEachFrame;
})();

window.onEachFrame(run);