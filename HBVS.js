import React from 'react';
import {Image,TouchableOpacity,KeyboardAvoidingView,ActivityIndicator,TouchableHighlight,TextInput,FlatView, ScrollView, Button,Text, View, StyleSheet,Modal} from 'react-native';
import Constants from 'expo-constants';

import DatePicker from 'react-native-datepicker'

import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { StackActions, NavigationActions } from 'react-navigation';
import  {addMonth} from './Date.js' 
import  {fetchDose,addDose} from './api.js' 
import  {M} from './scheduleHistroy.js'

const doseType=["0 Dose","1st Dose","2nd Dose","3rd Dose"]
const Histroy = (props) => {
		let i=-1,j=-1
	if(props.items == "Please Wait..."){
		return(
		<View>
			<Text style={styles.atest}>Please wait...</Text>
		</View>
		)
	}else{
	return(
		<View style={{alignItems:'center',backgroundColor:'whitesmoke',margin:20,padding:10,textAlign:'justify' }}>
		{props.items.doses.map((items) =>{
			const names = ["0 Dose","1st Dose","2nd Dose","3rd Dose"]
		if(items != null ){
			j=j+1
			return(<Text style={{fontSize:16,textAlign:'justify' }}><Text style={{fontWeight:'bold'}}>{names[j]}</Text> : {items}</Text> )}
		})
		}
		{props.items.antibody.map((items) =>{
			const names = ["Antibody date","Antibody Value","Booster dose date"]
		if(items != null ){
			i=i+1
			return(<Text style={{fontSize:16,textAlign:'justify' }}><Text style={{fontWeight:'bold'}}>{names[i]} </Text>: {items}</Text> )}else{i=-1}
		})
		}
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
		marginTop:15,
		marginBottom:5,
		paddingTop:1,
		paddingBottom:15,
		borderBottomWidth:1,
		
	},
	dates:{
		fontSize:15,
	},
	Notes:{
		fontSize:14,
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
let tDay = new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate())
export default class HBVS extends React.Component{
	
	static navigationOptions = ({ navigation, screenProps }) => ({
	
	headerTitle:"Hepatitis B Vaccine Schedule",	
	
  })
	constructor(props){
		super(props);
		this.state ={
			doseDate:'06-05-2020',
			buttonState:true,
			dates:true,
			Q:[todayDate],
			notify:'',
			abtValue:null,
			histroyData:["Please Wait..."],
			visible:false,
			animating: true,
			doseDate1:null,
			animatingM:true,
			doseType:["0 Dose","1st Dose","2nd Dose","3rd Dose","Antibody Test"],
			month:[" You need to take next dose after One month and notification will be sent for the same",
			" You need to take next dose after One month and notification will be sent for the same",
			"You need to take next dose after Four Months and notification will be sent for the same" 
			,"You need to take antibody test after two months and notification will be sent for the same","Next Dose based on Antibody Value"]
		}
			this.dateInserted()
	}
	dateInserted = async() => {	
				const re = await fetchDose(this.props.navigation.state.params.name)
				if(re.length === 0){
					this.setState({animating:false})
				}
				else{
					this.setState({dates:false})
					this.setState({Q:re,buttonState:true,animating:false})
					this.setState({notify:this.state.Q[5]})
					this.setState({Q:this.state.Q.filter(elt => elt != "yes")})
					this.setState({Q:this.state.Q.filter(elt => elt != "no")})
				}	
		}
setDate(date,props) {
	
	this.setState({buttonState:false})
		
	if(props == "0 Dose"){
	
			this.setState({Q:[date,addMonth(1,date),addMonth(2,date),addMonth(6,date),addMonth(8,date)],buttonState:false})
	}
	if(props == "1st Dose"){
		
		this.setState({Q:[this.state.Q[0],date,addMonth(1,date),addMonth(5,date),addMonth(6,date)],buttonState:false})
	}
	if(props == "2nd Dose"){
		
	this.setState({Q:[this.state.Q[0],this.state.Q[1],date,addMonth(4,date),addMonth(6,date)],buttonState:false})
	}
	
	if(props == "3rd Dose"){
		
		this.setState({Q:[this.state.Q[0],this.state.Q[1],this.state.Q[2],date,addMonth(2,date)],buttonState:false})
	}
	
	if(props == "Antibody Test"){
		this.setState({Q:[this.state.Q[0],this.state.Q[1],this.state.Q[2],this.state.Q[3],date],buttonState:false})
	}
	
	if(props == "Boosterdose"){
			
			this.setState({Q:[this.state.Q[0],this.state.Q[1],this.state.Q[2],this.state.Q[3],addMonth(2,date)],doseDate1:date})
		}
	}
	handleabtValuechange = (value) => {
		this.setState({abtValue:value})
		this.setState({buttonState:false})
		
		}
	
	antibodyValue = () => {
		
		if(this.state.abtValue == "0"){
			return (
				<View>
					<Text style={styles.atest}> Note : Go for new form</Text>
				</View>
			)
		}
		else if(parseInt(this.state.abtValue) > 1 && parseInt(this.state.abtValue) <=9){
			return (
				<View>
					<Text style={styles.atest}> Note : Go for Booster dose</Text>
					<View style={{flexDirection:'row',marginBottom:2,},styles.datesContainer}>
				
						<Text style={{marginBottom:10,fontSize:15,}}>Booster dose Date : </Text>
						<DatePicker  
							date={this.state.doseDate1}
							 style={{width:220,marginLeft:40,marginBottom:2}}  mode="date" 
							format="DD/MM/YYYY"
							value={this.state.doseDate1} onDateChange={(date) => this.setDate(date,"Boosterdose")}/>
					</View>
				</View>
			)
		}
		else if(parseInt(this.state.abtValue) > 9){
			return (
				<View>
					<Text style={styles.atest}>Note : Go for antibody test after a year</Text>
				</View>
			)
		}
	}
	history = async() => {
	
		this.setState({visible:true})
		
		const response = await fetch("http://192.168.1.4:5000/getScheduleHistroy?Email="+this.props.navigation.state.params.name)
		const result = await response.json()
		console.log(result)
		this.setState({histroyData:result,animatingM:false})
	}
	insertDate = async() =>{	
		
		this.setState({animating:true})
		if(this.state.abtValue == "0"){ 
			this.setState({Q:[todayDate],abtValue:'',})
		}
		if(this.state.abtValue > 9){
					
			let Dat5 = new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate());
			Dat5.setDate(Dat5.getDate()+365)
			let nextDate5 = `${Dat5.getDate()}/${parseInt(Dat5.getMonth())+1}/${Dat5.getFullYear()}`
		
				const res= await addDose(this.props.navigation.state.params.name,[this.state.Q[0],this.state.Q[1],this.state.Q[2],this.state.Q[3],nextDate5],this.state.abtValue,this.state.doseDate1)
				this.setState({animating:false,buttonState:true,Q:[this.state.Q[0],this.state.Q[1],this.state.Q[2],this.state.Q[3],nextDate5]})
		}else{
	
				const res= await addDose(this.props.navigation.state.params.name,this.state.Q,this.state.abtValue,this.state.doseDate1)
				this.setState({animating:false,buttonState:true,abtValue:''})	
		}
	}	
	selectDates = (Qu,indexOfQ) => {
		
		//if Q[5] == Dose0 then show the datePicker
		
		return (	
			<View style={{flexDirection:'row',}}>
			<Text style={{fontSize:18}}>{this.state.doseType[indexOfQ]} : </Text>
				{Qu  == todayDate ? 
					<DatePicker  
						date={Qu} style={{width:220}}  mode="date" 
						format="DD/MM/YYYY"
						value={this.state.doseDate} onDateChange={(date) => this.setDate(date,this.state.doseType[indexOfQ])}/>
						:
						<Text style={{fontSize:18}}>{Qu}</Text>	
				}
			</View>
		)
	}
	render(){
		if(this.state.animating){
				return(
					<ActivityIndicator  animating = {this.state.animating} color = 'red' size = "large" style={styles.activityIndicator}/>
				)
			}
		else{
			return(
				<ScrollView>
				
					{this.state.Q.map((Qu) => 
						<View style={styles.datesContainer}>
							{this.selectDates(Qu,this.state.Q.indexOf(Qu))}
								
							{doseType[this.state.Q.indexOf(Qu)] == "Antibody Test" && this.state.Q[4] == todayDate ?
								<TextInput placeholder="Antibody test value" maxLength={4}
									style={{fontSize:19,height:40,borderRightWidth:1,
									paddingLeft:5,borderTopWidth:1,borderLeftWidth:1,borderBottomWidth:1,
									margin:10,
									marginLeft:100,
									borderColor:'grey'}}
									value={this.state.abtValue}
									onChangeText = {this.handleabtValuechange} 
									keyboardType="numeric" underlineColorAndroid={'transparent'}/>
									:
								<Text style={styles.Notes}>Note :
									{this.state.month[this.state.Q.indexOf(Qu)]}
								</Text>
							}
						</View>	
					)}
					{this.antibodyValue()}
					<View style={{margin:10}}>
					<Button title="Submit" onPress={this.insertDate} disabled={this.state.buttonState} />	
					<Text style={{color:'blue',textAlign:'center',marginTop:10}} onPress={this.history}>Previous dose</Text>
				</View>	
				<Modal visible={this.state.visible}  onRequestClose={() => this.setState({visible:false})}>
					<Text style={{textAlign:'center',color:'green',marginTop:10}}>Previous doses dates and values</Text>
					<ScrollView>
					{
						this.state.histroyData.map((items) => <Histroy  items={items}  /> ) 
					}
					</ScrollView>
				</Modal >
			</ScrollView>										
			)
		}
	}
}
		