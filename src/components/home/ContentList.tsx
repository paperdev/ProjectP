/** @format */

import React, {useState, useEffect} from 'react';
import {
    Text,
    FlatList,
    Image,
	StyleSheet, 
	View
} from 'react-native';

import ListData from '../../data/ListData.json';

interface Item {
	id: number;
	title: string;
	image: string;
}

const ContentList = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([] as Item[]);

    useEffect(() => {
		setData(ListData.data);
        setLoading(false);
	}, []);

    if (isLoading) {
        return renderLoadingView();
    }

    return (
        <FlatList
            data={data}
            renderItem={renderData}
            style={styles.list}
            keyExtractor={item => item.id}
        >
        </FlatList>
    );
};

const renderData = ({item}) => {
    return (
        <View style={styles.container}>
            <Image
                source={{uri: item.image}}
                style={styles.thumbnail}
            />
            <View style={styles.rightContainer}>
            <Text style={styles.id}>{item.id}</Text>
            <Text style={styles.title}>{item.title}</Text> 
            </View>
        </View>
    );
}

const renderLoadingView = () => {
    return (
        <View style={styles.container}>
            <Text>Loading data...</Text>
        </View>
    );
}


const styles = StyleSheet.create({

    list: {
        paddingTop: 20,
        backgroundColor: "#F5FCFF"
    },

    container: {
        padding: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },

    thumbnail: {
        width: 53,
        height: 81
    },
    rightContainer: {
        flex: 1 
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: "center"
    },
    id: {
        textAlign: "center"
    }
})


export default ContentList;
