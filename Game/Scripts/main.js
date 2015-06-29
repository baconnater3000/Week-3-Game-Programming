var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

var keyboard = new Keyboard();

var background = document.createElement("img");
background.src = "Media/Art/background.png";

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

var SCREEN_WIDTH = canvas.width;
var SCREEN_HEIGHT = canvas.height;

// some variables to calculate the Frames Per Second (FPS - this tells use
// how fast our game is running, and allows us to make the game run at a 
// constant speed)
var fps = 0;
var fpsCount = 0;
var fpsTime = 0;

var stateSplash = 0;
var stateGame = 1;
var stateControls = 2;
var gameState = stateSplash;

function run()
{
	var deltaTime = getDeltaTime();
	switch(gameState)
	{
		case stateSplash:
		splashStateUpdate(deltaTime);
		break;
		
		case stateGame:
		gameStateUpdate(deltaTime);
		break;
		
		case stateControls:
		controlsStateUpdate(deltaTime);
		break;
	}
}

function splashStateUpdate(deltaTime)
{
	context.canvas.width = window.innerWidth - 20;
	context.canvas.height = window.innerHeight - 20;
	
	canvas.width = canvas.width;
	context.drawImage(background, 0, 0);
	
	context.fillStyle = "white";
	context.font = "100px Cooper Black";
	var startText = "Prototype";
	var center = context.measureText(startText);
	context.fillText(startText, canvas.width / 2 - center.width / 2, canvas.height / 2);
	
	context.fillStyle = "white";
	context.font = "50px Cooper Black";
	var startText = "Press 'Space' To Play";
	var center = context.measureText(startText);
	context.fillText(startText, canvas.width / 2 - center.width / 2, canvas.height / 2 + 100);

	context.fillStyle = "white";
	context.font = "50px Cooper Black";
	var contText = "Press 'I' For Controls";
	var center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height / 2 + 400);

	if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
	{
		gameState = stateGame; 
	}
}

function controlsStateUpdate(deltaTime)
{
	
}

function gameStateUpdate(deltaTime)
{	
	var deltaTime = getDeltaTime();
	
	player.update(deltaTime);
	player.draw();
		
	// update the frame counter 
	fpsTime += deltaTime;
	fpsCount++;
	if(fpsTime >= 1)
	{
		fpsTime -= 1;
		fps = fpsCount;
		fpsCount = 0;
	}		
		
	// draw the FPS
	context.fillStyle = "#f00";
	context.font="16px Arial";
	context.fillText("FPS: " + fps, 5, 20, 100);
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
