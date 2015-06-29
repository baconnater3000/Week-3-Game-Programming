var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var thrust = document.createElement("img");
thrust.src = 'Media/Art/thrust.png';

var player = {
	image : document.createElement("img"),
	
	width : 63,
	height : 123,

	x : canvas.width / 2,
	y : canvas.height / 2,
	
	speed : 550,
	angle : 0,
	rotationSpeed : 2,
	
	directionX : 0,
	directionY : 0,
	angularVelocity : 0,
}

player.image.src = 'Media/Art/ship.png';