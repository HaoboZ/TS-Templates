import * as React from 'react';

import { useTypedSelector } from './store';


export default function Main() {
	const store = useTypedSelector( store => store );
	
	return <div>{store.data}</div>;
}