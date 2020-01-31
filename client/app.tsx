import * as React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Index from './src';
import Game from './src/game';


const HotApp = hot( Index );

document.addEventListener( 'DOMContentLoaded', () => {
	new Game();
	render( <HotApp/>, document.getElementById( 'overlay' ) );
} );
