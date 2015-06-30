var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

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

var player = new player();
var keyboard = new Keyboard();

var background = document.createElement("img");
background.src = "Media/Art/background.png";

var pauseBackground = document.createElement("img");
pauseBackground.src = "Media/Art/pause.png";

var SCREEN_WIDTH = canvas.width;
var SCREEN_HEIGHT = canvas.height;

// some variables to calculate the Frames Per Second (FPS - this tells use
// how fast our game is running, and allows us to make the game run at a 
// constant speed)
var fps = 0;
var fpsCount = 0;
var fpsTime = 0;

var timer = 0;
var hour = 0;
var min = 0;
var sec = 0;

var stateSplash = 0;
var stateGame = 1;
var stateControls = 2;
var statePause = 3;
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
		
		case statePause:
		pauseStateUpdate(deltaTime);
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
	context.font = "25px Cooper Black";
	var startText = "Press 'Space' To Play";
	var center = context.measureText(startText);
	context.fillText(startText, canvas.width / 2 - center.width / 2, canvas.height / 2 + 50);

	var contText = "Press 'I' For Controls";
	var center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height / 2 + 80);
	
	var contText = "Press 'Esc' To Quit The Game";
	var center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height / 2 + 110);

	if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
	{
		gameState = stateGame; 
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_I) == true)
	{
		gameState = stateControls; 
	}
	if(keyboard.isKeyDown(keyboard.KEY_ESCAPE) == true)
	{
		close(); 
	}
}

function controlsStateUpdate(deltaTime)
{
	canvas.width = canvas.width;
	context.drawImage(background, 0, 0);
	
	context.fillStyle = "white";
	context.font = "100px Cooper Black";
	var startText = "Controls";
	var center = context.measureText(startText);
	context.fillText(startText, canvas.width / 2 - center.width / 2, 100);
	
	context.font = "50px Cooper Black";
	var contText = "Player 1";
	var center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 200);
	
	context.font = "25px Cooper Black";
	var contText = "W = Forward";
	var center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 250);
	
	var contText = "A = Rotate Left";
	var center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 290);
	
	var contText = "D = Rotate Right";
	var center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 330);
	
	var contText = "S = Backward";
	var center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 370);
	
	var contText = "Space = Shoot";
	var center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 410);
	
	var contText = "Press 'Backspace' To Go Back Or Press 'Space' To Play";
	var center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, canvas.height - 20);//960
	
	if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
	{
		gameState = stateGame; 
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_BACKSPACE) == true)
	{
		gameState = stateSplash; 
	}
}

function pauseStateUpdate(deltaTime)
{
	context.drawImage(pauseBackground, canvas.width /2 - 350, 15, 700, 300);
	
	context.fillStyle = "white";
	context.font = "100px Cooper Black";
	var startText = "Paused Game";
	var center = context.measureText(startText);
	context.fillText(startText, canvas.width / 2 - center.width / 2, 100);	
	
	context.font = "25px Cooper Black";
	var startText = "Press 'Enter' To Continue Playing";
	var center = context.measureText(startText);
	context.fillText(startText, canvas.width / 2 - center.width / 2, 150);	
	
	var startText = "Press 'R' To Replay";
	var center = context.measureText(startText);
	context.fillText(startText, canvas.width / 2 - center.width / 2, 190);
	
	var startText = "Press 'I' For Controls";
	var center = context.measureText(startText);
	context.fillText(startText, canvas.width / 2 - center.width / 2, 230);
	
	var contText = "Press 'Q' To Quit The Game";
	var center = context.measureText(contText);
	context.fillText(contText, canvas.width / 2 - center.width / 2, 300);
	
	if(keyboard.isKeyDown(keyboard.KEY_ENTER) == true)
	{
		gameState = stateGame;
	}
	if(keyboard.isKeyDown(keyboard.KEY_R) == true)
	{
		location.reload();
	}
	if(keyboard.isKeyDown(keyboard.KEY_Q) == true)
	{
		close();
	}
	if(keyboard.isKeyDown(keyboard.KEY_I) == true)
	{
		gameState = stateControls;
	}
}

function gameStateUpdate(deltaTime)
{	
	canvas.width = canvas.width;
	context.drawImage(background, 0, 0);
	
	player.update(deltaTime);
	player.draw();
		
	fpsTime += deltaTime;
	fpsCount++;
	if(fpsTime >= 1)
	{
		fpsTime -= 1;
		fps = fpsCount;
		fpsCount = 0;
	}		
	
	timer += deltaTime;
	sec+= deltaTime;
	if(timer >= 60)
	{
		min++;
	}
	
	context.fillStyle = "White";
	context.font="16px Arial";
	context.fillText("FPS: " + fps, 5, 20);
	context.fillText("Time: " + Math.floor(timer) + " Seconds", 5, 40);
	context.fillText("Score: " + player.score, 5, 60);
	context.fillText("Lives: " + player.lives, 5, 80);
	
	if(keyboard.isKeyDown(keyboard.KEY_ESCAPE) == true)
	{
		gameState = statePause;
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
