import React, { Component } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    Platform,
    Dimensions
} from 'react-native';

const kWidth = Dimensions.get('window').width;

const cols = 5;
const cellW = Platform.OS == 'ios' ? 70 : 60;
const cellH = 70;
const vMargin = (kWidth - cellW * cols) / (cols + 1);

const TopListView = (props: {dataArr: any}) => {
	const [dataSource, setDataSource] = React.useState([]);
    const [selectedId, setSelectedId] = React.useState(null);

    React.useEffect(() => {
        setDataSource(props.dataArr);
    });

    const renderItem = ({item}) => {
        return(
           <TouchableOpacity activeOpacity={0.8} onPress={()=>{alert(item.title+' is clicked.')}}>
               <View style={styles.cellStyle}>
                   <Image source={{uri:item.image}} style={{width:52,height:52}}/>
                   <Text style={styles.titleStyle}>{item.title}</Text>
               </View>
           </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView>
            <FlatList
                data={dataSource}
                renderItem={renderItem}
                contentContainerStyle={styles.contentViewStyle}
                keyExtractor={(item) => item.title}
                extraData={selectedId}
            />

        </SafeAreaView>
    );    
}

const styles = StyleSheet.create({

    contentViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // numColumns: 4,
        width:kWidth,
        alignItems:'center',
        justifyContent:'center'
    },

    cellStyle: {
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        width:cellW,
        height:cellH,
        marginLeft:vMargin
    },

    titleStyle: {
       color:'gray',
       fontSize:Platform.OS == 'ios' ? 14 : 12
    },
});


export default TopListView;