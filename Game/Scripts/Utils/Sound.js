var bgMusic = new Howl(
{
	urls:["Media/Sounds/ThemeMusic.mp3"],
	loop:true,
	buffer:true,
	volume: 0.8
} );

var bulletSfx = new Howl(
{
	urls: ["Media/Sounds/BulletEffect.mp3"],
	buffer: true,
	volume: 0.4,
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
	volume: 0.6,
	onend: function() 
	{
		isSfxPlaying = false;
	}
} );

/*var thrustSfx = new Howl(
{
	urls: ["Media/Sounds/ThrusterEffect.wav"],
	loop: false,
	buffer: true,
	volume: 0.1,
	onend: function() 
	{
		isSfxPlaying = false;
	}
} );*/