import Main from './main';


let game: Phaser.Game;

export default function Game() {
	game = new Phaser.Game( {
		type:    Phaser.AUTO,
		render:  {
			pixelArt: true
		},
		scale:   {
			mode:       Phaser.Scale.ScaleModes.FIT,
			parent:     'root',
			autoCenter: Phaser.Scale.Center.CENTER_BOTH,
			width:      1280,
			height:     720
		},
		physics: {
			default: 'arcade'
		},
		scene:   Main
	} );
}

export function useGame() {
	return game;
}
