var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

canvas.addEventListener("mousedown", getPosition, false);

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

var player = new player();
var keyboard = new Keyboard();

var BigEnemy = new BigEnemy();
var enemy = new Enemy();
var enemyManager = new enemyManager();
bgMusic.play();

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

function intersects(x1, y1, w1, h1, x2, y2, w2, h2)
{
	context.strokeStyle = "white";
	context.strokeRect(x1, y1, w1, h1);
	context.strokeRect(x2, y2, w2, h2);

	if(y2 + h2 < y1 || x2 + w2 < x1 ||
	x2 > x1 + w1 || y2 > y1 + h1)
	{
		return false;
	}
	
	return true;
}

var background = document.createElement("img");
background.src = "Media/Art/background.png";

var SCREEN_WIDTH = canvas.width;
var SCREEN_HEIGHT = canvas.height;

var fps = 0;
var fpsCount = 0;
var fpsTime = 0;
var timer = 0;

var gameOverBool = false;

var stateManager = new StateManager();
stateManager.pushState(new SplashState());

var menuSize = 250;
var mousePos = new Vector2();
var mouseClicked = false;

function run()
{
	var deltaTime = getDeltaTime();
	
	stateManager.update(deltaTime);
	stateManager.draw();
}

//-------------------- Don't modify anything below here

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
