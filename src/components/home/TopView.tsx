/** @format */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions
} from 'react-native';

import TopListView from './TopListView';
import TopMenu from '../../data/TopMenu.json'; 

const screenW = Dimensions.get('window').width;

const TopView = () => {
	const [currentPage, setCurentPage] = React.useState(0);

    React.useEffect(() => {
        console.log('useEffect. TopView.');
    });

    const renderScrollViewContent = () => {

        const ItemArr = [];
        const DataArr = TopMenu.data;

        for (let i =0; i<DataArr.length; i++){

            ItemArr.push(
                <TopListView key = {i}
                    dataArr = {DataArr[i]}
                />
            )
        }
    return ItemArr;

    }

    const renderCircleCount = () => {

        const CirclArr = [];
        let style;

        for(let i = 0; i < TopMenu.data.length; i++){

            style = (i == currentPage) ? {color:'orange'} : {color:'gray'};
            CirclArr.push(
                <Text key = {i} style={[{fontSize:25},style]}>•</Text>
            )
        }
    return CirclArr;
    }
    
    const ScrollEnd = (Scr) => {
        const OffSetX = Scr.nativeEvent.contentOffset.x;
        const PageCount = OffSetX / screenW;
        setCurentPage (PageCount);
    }

    return (
        <View style={styles.container}>
            <View>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(Scr)=>{ScrollEnd(Scr)}}
                >
                    {renderScrollViewContent()}
                </ScrollView>

                <View style={styles.circlestyle}>
                    {renderCircleCount()}
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    circlestyle: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(255,255,255,0.1)'
    }
});

export default TopView;
