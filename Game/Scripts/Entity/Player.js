/** Retrieving 2d context from the canvas **/
var c = document.getElementById("WebGameCanvas");
var ct = c.getContext("2d");

var thrust = document.createElement("img");
thrust.src = 'Media/Art/thrust.png';

var player = {
	image : document.createElement("img"),
	
	width : 63,
	height : 123,

	x : c.width / 2,
	y : c.height / 2,
	
	speed : 550,
	angle : 0,
	rotationSpeed : 2,
	
	directionX : 0,
	directionY : 0,
	angularVelocity : 0,
}

player.image.src = 'Media/Art/ship.png';