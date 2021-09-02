/** @format */

import React, {useState, useEffect} from 'react';
import {ScrollView, View, Image, StyleSheet, Text, ActivityIndicator} from 'react-native';
import {RequestHelper} from './utils';

interface Item {
	id: number;
	name: string;
	img: any;
	time: string;
	content: string;
}

const ListTest = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([] as Item[]);

	const initItemData = async () => {
		try {
			await RequestHelper();
			const list: Item[] = [];
			for (let i = 0; i < 100; i++) {
				list.push({
					id: i,
					name: 'name_' + i,
					img: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
					time: 'time_' + i,
					content: 'content_' + i,
				});
			}
			setData(list);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		initItemData();
	}, []);

	return (
		<ScrollView>
			{
				isLoading 
					? <ActivityIndicator/> 
					: (
						data.map((item, index) => {
							return <RenderItem item={item} key={index}></RenderItem>
						})	
					)
			}
		</ScrollView>
	)
};

const RenderItem = (props: {item: Item}) => {
	return (
		<View>
			<View style={styles.container}>
				<Image source={{uri: props.item.img}} style={styles.headerImg} />
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
