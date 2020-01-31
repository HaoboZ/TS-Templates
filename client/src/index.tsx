import Phaser from 'phaser';
import * as React from 'react';

import { useGame } from './game';


export default function Index() {
	const game = useGame();
	
	const [ size, setSize ] = React.useState<React.CSSProperties>( {
		position:  'absolute',
		width:     game.scale.width,
		height:    game.scale.height,
		top:       '50%',
		left:      '50%',
		transform: `translate(-50%, -50%) scale(${1 / game.scale.displayScale.x}, ${1 / game.scale.displayScale.y})`
	} );
	
	React.useEffect( () => {
		game.scale.on( Phaser.Scale.Events.RESIZE, ( gameSize: Phaser.Structs.Size ) => {
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
