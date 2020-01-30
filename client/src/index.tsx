import * as React from 'react';
import { Provider } from 'react-redux';

import Main from './main';
import store from './store';


export default function Index() {
	return <Provider store={store}>
		<Main/>
	</Provider>;
}
