import * as React from 'react';
import { CSSProperties } from 'react';

import Main from './main';


export function Game() {
	return new Phaser.Game( {
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

export default function Index( { game } ) {
	const [ size, setSize ] = React.useState<CSSProperties>( {
		position:  'absolute',
		width:     game.scale.width,
		height:    game.scale.height,
		top:       '50%',
		left:      '50%',
		transform: `translate(-50%, -50%) scale(${1 / game.scale.displayScale.x}, ${1 / game.scale.displayScale.y})`
	} );
	
	React.useEffect( () => {
		game.scale.on( Phaser.Scale.Events.RESIZE, ( gameSize: Phaser.Structs.Size, baseSize, displaySize: Phaser.Structs.Size ) => {
			setSize( size => ( {
				...size,
				width:     gameSize.width,
				height:    gameSize.height,
				transform: `translate(-50%, -50%) scale(${1 / game.scale.displayScale.x}, ${1 / game.scale.displayScale.y})`
			} ) );
		} );
	}, [] );
	
	return <div style={size}>Hello World!</div>;
}
