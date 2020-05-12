import React from 'react';
import {Image,TouchableOpacity,KeyboardAvoidingView,ActivityIndicator,TouchableHighlight,TextInput,FlatView, ScrollView, Button,Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import DatePicker from 'react-native-datepicker'

import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { StackActions, NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	datesContainer:{
		justifyContent: 'center',	
		alignItems: 'center',
		marginTop:35,
		marginBottom:5,
		paddingTop:1,
		paddingBottom:15,
		borderBottomWidth:1,
		
	},
	dates:{
		fontSize:15,
	},
	Notes:{
		fontSize:16,
		paddingTop:10,
		marginBottom:10,
		marginLeft:12,
	},
	atest:{
		textAlign:'center',
		fontSize:20,
		marginTop:10,
		color:'red',
	}
})

let todayDate = `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`
let nextDate = `${new Date().getDate()}/${new Date().getMonth()+3}/${new Date().getFullYear()}`
export default class PVS extends React.Component{
	
	static navigationOptions = ({ navigation, screenProps }) => ({
	
	headerTitle:"Pneumococcal Vaccine Schedule",	
	
  })
	
	constructor(props){
		super(props);
		this.state= {
			doseDate:todayDate,
			Q:[todayDate,nextDate],
			month:['PPSV 23 Vaccine after two month','PPSV 23 Vaccine after one year'],
			animating:true,
			buttonState:true,
			type:['PCV B Vaccine :','PPSV 23 Vaccine : ']
		}
		this.dateInserted()
	}
	
	
	dateInserted = async() => {
		
			try{ 		
				const response = await fetch("http://192.168.1.4:5000/hasPvs"
				,{
					method : 'POST',
					cache: 'no-cache',
					credentials:'include',
					headers : {'Content-Type': 'application/json'},
					body:JSON.stringify({Email:this.props.navigation.state.params.name,type:"dosePvs"}),
				})
				const re = await response.json()
				
				console.log(re)
				if(re.length === 0){
					this.setState({animating:false})
				}
				else{
					
					this.setState({Q:re,buttonState:true,animating:false})
				}	
				
			}catch(e){
				alert(e)
			}
		}
	
	
	
	insertDose = async() => {
		this.setState({animating:true})
		
		const response = await fetch("http://192.168.1.4:5000/Pcv",{
					method : 'POST',
					cache: 'no-cache',
					credentials:'include',
					headers : {'Content-Type': 'application/json'},
					body:JSON.stringify({Email:this.props.navigation.state.params.name,
					dose0:this.state.Q[0],
					dose1:this.state.Q[1],
					type:"dosePvs",
					}),
					
				})
				const res= await response.text()
				console.log(res)
				this.setState({animating:false})
				if(res == "ok"){
					this.setState({buttonState:true})
					alert(`Your dose  details has been set for notification`)
				}else{
					alert("Some thing went wrong")
				}		
		}
	
	setDate (date,type){
		console.log(type)
		let d = date[0]+date[1]
		let m = date[3]+date[4]
		let y = date[6]+date[7]+date[8]+date[9]
		
		let Dat1 = new Date(y,m,d);
		if(type == "PPSV 23 Vaccine : "){
			Dat1.setDate(Dat1.getDate()+365)
		}else{
			Dat1.setDate(Dat1.getDate()+60)
		}
		
		
		let nextDate1 = `${Dat1.getDate()}/${Dat1.getMonth()}/${Dat1.getFullYear()}`
		this.setState({Q:[date,nextDate1],buttonState:false})
		
	}
	render(){
		
		if(this.state.animating){
				return(
					<ActivityIndicator  animating = {this.state.animating} color = 'red' size = "large"style={styles.activityIndicator}/>
				)
			}
		else{
		return(
		
		<View>
		
		{this.state.Q.map((Qu) => 
				
				<View style={styles.datesContainer}>
					<View style={{flexDirection:'row'}}>
						<Text style={styles.dates,{fontSize:20,}}>{this.state.type[this.state.Q.indexOf(Qu)]} </Text>
						{Qu  == todayDate ? 
							<DatePicker style={{width:220}} 
								format="DD/MM/YYYY"
								disabled={this.state.doseState}
								date={Qu} 
								mode="date" value={this.state.doseDate} 
								onDateChange={(date) => this.setDate(date,this.state.type[this.state.Q.indexOf(Qu)])}/>			
						:
							<Text style={{fontSize:20}}>{Qu}</Text>	
						}
					</View>	
						<Text style={styles.Notes}>
								<Text style={{fontWeight:'bold',fontSize:19,}}>Note :</Text>
								You need to take {this.state.month[this.state.Q.indexOf(Qu)]} and notification will be sent for the same.
						</Text>		
			</View>	
		)}
		
		<View style={{margin:20}}>
					<Button title="Submit" onPress={()=> {this.insertDose()}} disabled={this.state.buttonState}  />
		</View>
		</View>		
	)}
	}
}

		/*
		
		
		
		
		
		
		
		{Qu == todayDate ?
					<View>
					
						<View style={styles.datesContainer}>
							<View>
							<Text style={styles.dates,{fontSize:20,}}>PCV B Vaccine : </Text>
							<DatePicker date={this.state.doseDate} style={{width:220}} 
							format="DD/MM/YYYY"
							disabled={this.state.doseState}
							mode="date" value={this.state.doseDate} onDateChange={this.setDate}/>					
						</View>
							<Text style={styles.Notes}>
								<Text style={{fontWeight:'bold'}}>Note :</Text>
								You need to take {this.state.month[this.state.Q.indexOf(Qu)]} and notification will be sent for the same.
							</Text>
						</View>
					</View>
				:
		
		
		
		
		
		
		
		
		
		
		
		
		return(
			<View>
				<View style={styles.datesContainer}>
					<View>
						<Text style={styles.dates,{fontSize:20,}}>PCV B Vaccine : </Text>
						<DatePicker date={this.state.doseDate} style={{width:220}} 
						format="DD/MM/YYYY"
						disabled={this.state.doseState}
						mode="date" value={this.state.doseDate} onDateChange={this.setDate}/>					
					</View>
						<Text style={styles.Notes}><Text style={{fontWeight:'bold'}}>Note :</Text> You need to take PPSV 23 Vaccine after two month and notification will be sent for the same.</Text>
					
				</View>
			{this.state.doseDate2 == todayDate ? 
				<View>
					<DatePicker date={this.state.doseDate} style={{width:220}} 
						format="DD/MM/YYYY"
						disabled={this.state.doseState}
						mode="date" value={this.state.doseDate} onDateChange={this.setDate}
					/>
						
				</View>
			:
				<Text style={styles.dates,{fontSize:20,textAlign:'center'}}>PPSV 23 Vaccine : {this.state.doseDate2} </Text>	
			}
				<Text style={styles.Notes}><Text style={{fontWeight:'bold'}}>
					Note :</Text> You need to take PPSV 23 Vaccine after one year and notification will be sent for the same.</Text>
				
				<View style={{margin:20}}>
					<Button title="Submit" onPress={()=> {this.insertDose()}} disabled={this.state.buttonState}  />
				</View>
			</View>
		)
*/
		