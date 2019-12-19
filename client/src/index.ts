import Main from './main';


function start() {
	new Phaser.Game( {
		type:    Phaser.AUTO,
		render:  {
			pixelArt: true
		},
		scale:   {
			mode:       Phaser.Scale.FIT,
			parent:     'root',
			autoCenter: Phaser.Scale.CENTER_BOTH,
			width:      1280,
			height:     720
		},
		physics: {
			default: 'arcade'
		},
		scene:   Main
	} );
}

document.addEventListener( 'DOMContentLoaded', start );
