/** @format */

import React from 'react';
import {Text, View} from 'react-native';

interface T {
	id: number;
	name: string;
}

const Test = () => {

	const text: T = {
		id: 1,
		name: 'text'
	}
	return (
		<View>
			<Text>Hello {text.name}</Text>
		</View>
	);
};

export default Test;
