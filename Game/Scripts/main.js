var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

var player = new player();
var shop = new shop();
var keyboard = new Keyboard();
var menuSize = 250;

var enemyManager = new enemyManager();
bgMusic.play();

var fps = 0;
var fpsCount = 0;
var fpsTime = 0;
var timer = 0;
var enemyTimer = 0;

var gameOverBool = false;

var background = document.createElement("img");
background.src = "Media/Art/background.png";

function getDeltaTime()
{
	endFrameMillis = startFrameMillis;
	startFrameMillis = Date.now();

	var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;
	
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

var SCREEN_WIDTH = canvas.width;
var SCREEN_HEIGHT = canvas.height;

var stateManager = new StateManager();
stateManager.pushState(new SplashState());

function run()
{
	var deltaTime = getDeltaTime();
	
	stateManager.update(deltaTime);
	stateManager.draw();
}

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
