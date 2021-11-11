/** @format */

import React from 'react';
import {
    AppRegistry,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
	StyleSheet,
	ScrollView, 
	View, 
	Dimensions,
	Platform
} from 'react-native';
import TopView from './TopView';

const {width} = Dimensions.get('window');

const Main = () => {
	return (
		<View style={styles.container}>
            {renderNavBar()}
			<ScrollView>
				<TopView />
			</ScrollView>
		</View>
	);
};

const renderNavBar = () => {
    return(
        <View style={styles.navBarStyle}>
            <TouchableOpacity onPress={()=>{alert('asdfasdf')}} >
                <Text style={styles.leftTitleStyle}>Title</Text>
            </TouchableOpacity>
            <TextInput placeholder="Input something..." style={styles.topInputStyle} />
            <View style={styles.rightNavViewStyle}>
                <TouchableOpacity onPress={()=>{alert(' clicked.')}} >
                    <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{alert(' clicked.')}} >
                    <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    navBarStyle:{
        height:Platform.OS === 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },

    leftTitleStyle:{
        color:'white',
        marginTop:15,
        fontSize:20
    },

    topInputStyle:{
        width:width * 0.71,
        height:Platform.OS === 'ios' ? 35 : 30,
        backgroundColor:'white',
        marginTop:Platform.OS === 'ios' ? 18 : 0,
        borderRadius:18,
        paddingLeft:10
    },

    rightNavViewStyle:{
        flexDirection:'row',
        height:64,
        alignItems:'center',
        marginTop:15

    },

    navRightImgStyle:{
        width:Platform.OS === 'ios' ? 28 : 24,
        height:Platform.OS === 'ios' ? 28 : 24
    },

    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    }
});

export default Main;
