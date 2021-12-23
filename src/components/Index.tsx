/** @format */

import React from 'react';
import {
	StyleSheet,
    Text,
    View,
    Image,
	Platform
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Main from './home/Main';
import ContentList from './home/ContentList';

const Index = () => {
	const [mainSelectedTab, setMainSelectedTab] = React.useState('Main');
    const [selectedId, setSelectedId] = React.useState(null);

	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Home" component={Main} />
				<Tab.Screen name="Settings" component={ContentList} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};


const styles = StyleSheet.create({
    iconStyle :{
        width: Platform.OS === 'ios' ? 30 :25,
        height: Platform.OS === 'ios' ? 30 :25,
    },

    titlesStyles :{
        color:'rgba(212,97,0,1)',
    },
    
    badgeView:{
        width:14,
        height:14 ,
        backgroundColor:'#f85959',
        borderWidth:1,
        marginLeft:10,
        marginTop:3,
        borderColor:'#FFF',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
    },

    badgeText:{
        color:'#fff',
        fontSize:8,
    }
});


export default Index;
