/** @format */

import React from 'react';
import {ScrollView, View, Image, StyleSheet, Text} from 'react-native';

const ListTest = () => {
	const data: Item[] = initItemData();
	return (
		<ScrollView>
			{
				data.map((item, index) => {
					return <RenderItem item={item} key={index}></RenderItem>
				})			
			}
		</ScrollView>
	)
};

interface Item {
	id: number;
	name: string;
	img: any;
	time: string;
	content: string;
}

const initItemData = () => {
	const list: Item[] = [];
	for (let i = 0; i < 100; i++) {
		list.push({
			id: i,
			name: 'name_' + i,
			img: 'img_' + i,
			time: 'time_' + i,
			content: 'content_' + i,
		});
	}
	return list;
}

const RenderItem = (props: {item: Item}) => {
	return (
		<View>
			<View style={styles.container}>
				<Image source={props.item.img} style={styles.headerImg} />
				<View style={styles.contentView}>
					<View style={styles.topView}>
						<Text style={styles.titleText}>{props.item.name}</Text>
						<Text style={styles.timeText}>{props.item.time}</Text>
					</View>
					<Text style={styles.contentText}>{props.item.content}</Text>
				</View>
			</View>
			<View style={styles.spliteLine} />
		</View>
	)
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
        flexDirection: 'row'
    },
    headerImg: {
        height: 80,
        width: 80
    },
    titleText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        flex: 1
    },
    contentView: {
        flex: 1,
        paddingLeft: 10
    },
    topView: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 3
    },
    timeText: {
        fontSize: 14,
        color: '#b2b2b2'
    },
    contentText: {
        paddingBottom: 3,
        color: '#b2b2b2',
        fontSize: 16
    },
    spliteLine: {
        borderTopWidth: 0.5,
        borderTopColor: '#b2b2b2'
    }
})

export default ListTest;
