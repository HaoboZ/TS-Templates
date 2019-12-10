import * as React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Index, { Game } from './src';


const HotApp = hot( Index );

document.addEventListener( 'DOMContentLoaded', () => {
	render( <HotApp game={Game()}/>, document.getElementById( 'overlay' ) );
} );
