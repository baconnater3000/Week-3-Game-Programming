var bgMusic = new Howl(
{
	urls:["Media/Sounds/ThemeMusic.mp3"],
	loop:true,
	buffer:true,
	volume: 0.8
} );

//Music credit goes to Holder / MLW on Sound cloud.

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

//Bullet sound effect credit goes to AIE for giving me the sound file in week 2.

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

//Explosion sound effect credit goes to ZebZorb.

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