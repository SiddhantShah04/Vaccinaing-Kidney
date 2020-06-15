import React from 'react';

import {Image,TouchableOpacity,TouchableHighlight,TextInput,ScrollView, Button,Text, View, StyleSheet } from 'react-native';

import Constants from 'expo-constants';


import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { StackActions, NavigationActions } from 'react-navigation';


const styles = StyleSheet.create({
	container:{
		textAlign:'center',
		flex:1,
		
		backgroundColor:'#e6e6fa',
		
	},
	text:{
		textAlign:'justify',
		fontSize:18,
		marginBottom:20,
	}
	
})

export default class AboutUs extends React.Component {
	
	static navigationOptions = {
    headerTitle: 'About  Kidnify',
    headerTintColor:'blue',
}
	
	render(){
		return(
			<ScrollView style={styles.container}>
				<View style={{marginTop:25,marginLeft:20,marginRight:20,fontSize:25}}>
				
					<Text style={styles.text}>This app has been built with a vision to educate kidney patients especially ones on dialysis - hemodialysis or peritoneal dialysis. 
					It can act as a guiding tool to schedule their vaccines, to interpret their lab values, to calculate their ideal interdialytic weight gain, etc. 
					 The app features a chat zone for patients to avail responses to their queries related to kidney disease and dialysis by nephrologists. 
					 This app will also act as a database of dialysis facilities across India</Text>
					
					<Text style={styles.text}> To the best of our knowledge, an app of this kind has not been developed for dialysis patients in India.
						This app can play the role of an educator as well as planner and is certainly not aimed at replacing or substituting the advise of your Nephrologist or Dialysis care provider.  
					</Text>
				</View>
			</ScrollView>
		)
	}
}