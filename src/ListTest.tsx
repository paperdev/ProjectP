/** @format */

import React from 'react';
import {ScrollView, Text} from 'react-native';

const ListTest = () => {
	return <ScrollView>{renderItem()}</ScrollView>;
};

const renderItem = () => {
	const list = [];
	for (let i = 0; i < 100; i++) {
		list.push(<Text>List {i}</Text>);
	}
	return list;
};
export default ListTest;
