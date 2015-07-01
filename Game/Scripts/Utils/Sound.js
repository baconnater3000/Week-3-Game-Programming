var bgMusic = new Howl({
	urls:["Media/Sounds/ThemeMusic.mp3"],
	loop:true,
	buffer:true,
	volume:1,
});

var bulletSfx = new Howl(
{
	urls: ["Media/Sounds/BulletEffect.mp3"],
	buffer: true,
	volume: 1,
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