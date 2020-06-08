import React from 'react';
import {Image,TouchableOpacity,KeyboardAvoidingView,ActivityIndicator,TouchableHighlight,TextInput,FlatView, ScrollView, Button,Text, View, StyleSheet,Modal} from 'react-native';
import Constants from 'expo-constants';
import DatePicker from 'react-native-datepicker'
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import  {addDosevs, getDosevs} from './api.js'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { StackActions, NavigationActions } from 'react-navigation';
import  {addMonth} from './Date.js' 

const Histroy = (props) => {

	if(props.items == "Please Wait..."){
		return(
		<View>
			<Text style={styles.atest}>Please wait...</Text>
		</View>
		)
	}else{
		return(
		<View>
				<Text style={{backgroundColor:'whitesmoke',fontSize:16,textAlign:'justify',marginLeft:10,marginRight:10}}><Text style={{fontWeight:'bold'}}>Influenza Vaccine </Text>: {props.items}</Text> 
		</View>
		)
	}
}
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
		fontSize:18,
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

export default class IVS extends React.Component{
	
	static navigationOptions = ({ navigation, screenProps }) => ({
	
	headerTitle:"Influenza Vaccine Schedule",	
	
  })
	
	constructor(props){
		super(props);
		this.state= {
			doseDate:todayDate,
			Q:[todayDate],
			month:['Influenza Vaccine after one year'],
			animating:true,
			buttonState:true,
			type:['Influenza Vaccine :'],
			visible:false,
			histroyData:["Please Wait..."],
		}
		this.dateInserted()
	}
	
	
	dateInserted = async() => {
		const re = await  getDosevs(this.props.navigation.state.params.name,"doseIvs")
				console.log(re)
				if(re.length === 0){
					this.setState({animating:false})
				}
				else{
					this.setState({Q:re,buttonState:true,animating:false})
				}	
		}
	insertDose = async() => {
		this.setState({animating:true})
			const res= await addDosevs(this.props.navigation.state.params.name,this.state.Q,"doseIvs")
				this.setState({animating:false})
				if(res == "ok"){
					this.setState({buttonState:true})
					alert(`Your dose  details has been set for notification`)
				}else{
					alert("Some thing went wrong")
				}		
		}
	history = async() => {
		this.setState({visible:true})
		const response = await fetch("https://vkidneym.herokuapp.com/getScheduleHistroyivs?Email=" +this.props.navigation.state.params.name)
		const result = await response.json()
		this.setState({histroyData:result,animatingM:false})
	}
	setDate (date,type){
		let nextDate1 = addMonth(12,date)
		this.setState({Q:[nextDate1],buttonState:false})
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
						<Text style={styles.dates}>{this.state.type[this.state.Q.indexOf(Qu)]} </Text>
						{Qu  == todayDate ? 
							<DatePicker style={{width:200}} 
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
		
		<Modal visible={this.state.visible}  onRequestClose={() => this.setState({visible:false})}>
					<Text style={{textAlign:'center',color:'green',marginTop:10,marginBottom:10}}>Previous doses dates and values</Text>
					<ScrollView>
					{
						this.state.histroyData.map((items) => <Histroy  items={items}  /> ) 
					}
					</ScrollView>
				</Modal >
		
		<View style={{margin:20}}>
					<Button title="Submit" onPress={()=> {this.insertDose()}} disabled={this.state.buttonState}  />
					<Text style={{color:'blue',textAlign:'center',marginTop:10}} onPress={this.history}>Previous dose</Text>
		</View>
		</View>		
	)}
	}
}

	