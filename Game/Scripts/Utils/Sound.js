var bgMusic = new Howl(
{
	urls:["Media/Sounds/ThemeMusic.mp3"],
	loop:true,
	buffer:true,
	volume: 0.2,
} );

var bulletSfx = new Howl(
{
	urls: ["Media/Sounds/BulletEffect.ogg"],
	buffer: true,
	volume: 0.1,
	sprite: 
	{
		fire: [0, 1000]
	},
	onend: function() 
	{
		isSfxPlaying = false;
	}
} );

var explosionSfx = new Howl(
{
	urls: ["Media/Sounds/ExplosionEffect.mp3"],
	buffer: true,
	volume: 1,
	onend: function() 
	{
		isSfxPlaying = false;
	}
} );

var thrustSfx = new Howl(
{
	urls: ["Media/Sounds/ThrusterEffect.mp3"],
	//loop: true,
	buffer: true,
	volume: 0.1,
	sprite: 
	{
		thrust: [0, 1000]
	}
} );