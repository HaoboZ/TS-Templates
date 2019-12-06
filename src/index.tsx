import * as React from 'react';
import { Text, View } from 'react-native';


export default function Index() {
	return <View style={{
		flex:            1,
		backgroundColor: '#fff',
		alignItems:      'center',
		justifyContent:  'center'
	}}>
		<Text>Hello World</Text>
	</View>;
}
