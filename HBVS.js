import React from 'react';
import {Image,TouchableOpacity,KeyboardAvoidingView,TouchableHighlight,TextInput,FlatView, ScrollView, Button,Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import DatePicker from 'react-native-datepicker'

import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { StackActions, NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
	container:{
		flex:1,
		textAlign:'center',
		marginLeft:10,
		marginRight:10,
		marginTop:50,
		fontSize:20,
		justifyContent: 'center',
		borderBottomWidth:1,
	},
	datesContainer:{
		flex:2,
		justifyContent: 'center',	
		alignItems: 'center',
		marginTop:25,
		marginBottom:10,
		borderBottomWidth:1,
	},
	dates:{
		fontSize:15,
	}
})

export default class HBVS extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			doseDate0:'',
			doseDate1:'',
			doseDate2:'',
			doseDate3:'',
			vaccineDate:'',
			doseState1: true,
			doseState2: true,
			doseState3: true,
		}
	}
	
	setDate0 = (date) => {
		this.setState({doseDate0:date,doseState1:false})
		console.log(date)
		var d = new Date(date);
		d.setMonth(d.getMonth() + 1)
		d.setDate(d.getDate()-1)
		this.setState({vaccineDate:(d.toLocaleDateString())})
		//console.log(d.toLocaleDateString())
	}
	
	setDate1 = (date) => {
		this.setState({doseDate1:date,doseState2:false})
		
		
	}
	
	setDate2 = (date) => {
		this.setState({doseDate2:date,doseState3:false})
		
		
	}
	
	setDate3 = (date) => {
		this.setState({doseDate3:date})
	
	}
	
	render(){
		return(
			<View style={styles.container}>
				<Text style={{fontSize:20,textAlign:'center',}}> Hepatitis B Vaccine Schedule </Text>
				
				<View style={styles.datesContainer}>
					<View style={{flexDirection:'row',}}>
	<Text style={styles.dates,{fontSize:20,}}>0 Doge : </Text><DatePicker date={this.state.doseDate0} style={{width:220}}  mode="date" value={this.state.doseDate0} onDateChange={this.setDate0}/>					
					</View>
						<Text style={{fontSize:15,}}>Info : You need to take next dose after one month and notification will be sent for the same.</Text>
						
				</View>
				
				<View style={styles.datesContainer}>
					<View style={{flexDirection:'row',}}>
						<Text style={styles.dates,{fontSize:20,}}>1st Doge : </Text><DatePicker date={this.state.doseDate1} style={{width:220}} disabled={this.state.doseState1} mode="date" value={this.state.doseDate1} onDateChange={this.setDate1}/>					
					</View>
						<Text style={{fontSize:15,}}>Info : You need to take next dose after one month and notification will be sent for the same.</Text>
		
				</View>
				
				<View style={styles.datesContainer}>
					<View style={{flexDirection:'row',}}>
						<Text style={styles.dates,{fontSize:20,}}>2nd Dose : </Text><DatePicker date={this.state.doseDate2} style={{width:220}} disabled={this.state.doseState2} mode="date" value={this.state.doseDate2} onDateChange={this.setDate2}/>					
					</View>
						<Text style={{fontSize:15,}}>Info : You need  to take next dose after four months and notification will be sent for the same.</Text>
						
				</View>
				
				<View style={styles.datesContainer}>
					<View style={{flexDirection:'row',}}>
						<Text style={styles.dates,{fontSize:20,}}>3rd Dose : </Text><DatePicker date={this.state.doseDate3} style={{width:220}} disabled={this.state.doseState3} mode="date" value={this.state.doseDate3} onDateChange={this.setDate3}/>					
					</View>
						<Text style={{fontSize:15,}}>Info : You need to go for antibody test after two months notification will be sent for the same.</Text>				
				</View>
		
				
			</View>
		)
	}
}