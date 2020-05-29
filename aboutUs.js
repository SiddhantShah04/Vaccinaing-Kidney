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
		
	headerStyle: {
		backgroundColor: '#ffc0cb',
    },
    headerTitle: 'About Us',
    headerTintColor:'blue',
  }
	
	render(){
		return(
			<ScrollView style={styles.container}>
				<View style={{marginTop:10,marginLeft:20,marginRight:20,fontSize:25}}>
				
					<Text style={styles.text}>This app has been designed specifically for patients undergoing hemodialysis. The major reasons for complications in hemodialysis patients are infections and fluid burden, both of which are  preventable.</Text>
					
					<Text style={styles.text}>The main features of this app are:</Text>
				
					
					<Text style={{fontSize:20,fontWeight:'bold'}} >• Planning and scheduling vaccines-</Text>
					<Text style={styles.text}>with the help of notification based system, you can set alarms for notifying regarding the due date of vaccinations </Text>
					
				
					<Text  style={{fontSize:20,fontWeight:'bold'}}>• Ultrafiltration record maintenance-</Text>
					<Text style={styles.text}>it helps in maintaining records of fluid status i.e. weight gain in between 2 dialysis sessions - with these results patients can get online recommendations about minimizing fluid gain and thereby lowering chances of complications. </Text>
					
				
					<Text style={styles.text}> To the best of our knowledge, an app of this kind has not been developed for dialysis patients in India. The vaccination section of this app can be utilized by patients who are in pre-dialysis stages too (Chronic Kidney Disease Stage 3-4). This app can play the role of an educator as well as planner and is certainly not aimed at replacing or substituting the advise of your Nephrologist or dialysis care provider.  </Text>
				</View>
			</ScrollView>
		)
	}
}