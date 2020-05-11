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

const doseType=["0 Dose","1st Dose","2nd Dose","3rd Dose","Antibody Test"]

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
			doseDate1:'06-06-2020',
			doseDate2:'06-07-2020',
			doseDate3:'06-11-2020',
			buttonState:true,
			dates:true,
			Q:[todayDate],
			notify:'',
			abtValue:'',
			expoPushToken:'',
			animating: true,
			doseType:["0 Dose","1st Dose","2nd Dose","3rd Dose","Antibody Test"],
			month:[" You need to take next dose after One month and notification will be sent for the same",
			" You need to take next dose after One month and notification will be sent for the same",
			"You need to take next dose after Four Months and notification will be sent for the same" 
			,"You need to take next dose after Two months and notification will be sent for the same","Next Dose based on Antibody Value"]
		}
			this.dateInserted()
			
			this.registerForPushNotificationsAsync();
	}
	
	registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      this.setState({ expoPushToken: token });
    } else {
      alert('Must use physical device for Push Notifications');
    }
  } 
	
	
	dateInserted = async() => {
		
			try{ 		
				const response = await fetch("https://vkidneym.herokuapp.com/hasDate"
				,{
					method : 'POST',
					cache: 'no-cache',
					credentials:'include',
					headers : {'Content-Type': 'application/json'},
					body:JSON.stringify({Email:this.props.navigation.state.params.name}),
				})
				const re = await response.json()
				
				console.log(re)
				if(re.length === 0){
					//this.setState({dates:true})
					this.setState({animating:false})
				}
				else{
					
					this.setState({dates:false})
					this.setState({Q:re,buttonState:true,animating:false})
					this.setState({notify:this.state.Q[5]})
					this.setState({Q:this.state.Q.filter(elt => elt != "yes")})
					this.setState({Q:this.state.Q.filter(elt => elt != "no")})
				}	
				
			}catch(e){
				alert(e)
			}
		}
	setDate(date,props) {
	console.log("ss",props)
	console.log(date)
	this.setState({buttonState:false})
	let d = date[0]+date[1]
	let m = date[3]+date[4]
	let y = date[6]+date[7]+date[8]+date[9]
	
	//console.log(Dat.getMonth() + 1)
	//make it into sequence like add +1 into last date not the date in the parameter
		
		let Dat1 = new Date(y,m,d);
		
	if(props == "0 Dose"){
		
		Dat1.setDate(Dat1.getDate()+30)
		let nextDate1 = `${Dat1.getDate()}/${Dat1.getMonth()}/${Dat1.getFullYear()}`
		
		let Dat2 = new Date(Dat1.getFullYear(),Dat1.getMonth(),Dat1.getDate());
		Dat2.setDate(Dat2.getDate()+30)
		let nextDate2 = `${Dat2.getDate()}/${Dat2.getMonth()}/${Dat2.getFullYear()}`
		
		let Dat3 = new Date(Dat2.getFullYear(),Dat2.getMonth(),Dat2.getDate());
		Dat3.setDate(Dat3.getDate()+110)
		let nextDate3 = `${Dat3.getDate()}/${Dat3.getMonth()}/${Dat3.getFullYear()}`
		
		let Dat4 = new Date(Dat3.getFullYear(),Dat3.getMonth(),Dat3.getDate());
		Dat4.setDate(Dat4.getDate()+60)
		console.log(Dat4.getMonth())
		
		if(Dat4.getMonth() == "0"){ 	
			let nextDate4 = `${Dat4.getDate()}/${Dat4.getMonth()+1}/${Dat4.getFullYear()}`
			this.setState({Q:[date,nextDate1,nextDate2,nextDate3,nextDate4],buttonState:false})
		}
		else{
			let nextDate4 = `${Dat4.getDate()}/${Dat4.getMonth()}/${Dat4.getFullYear()}`
			this.setState({Q:[date,nextDate1,nextDate2,nextDate3,nextDate4],buttonState:false})
		}
		
		
		
	}
	if(props == "1st Dose"){
		
		let Dat2 = new Date(Dat1.getFullYear(),Dat1.getMonth(),Dat1.getDate());
		Dat2.setDate(Dat2.getDate()+30)
		if(Dat2.getMonth() == "0"){ parseInt(Dat2.getMonth())+1}
		let nextDate2 = `${Dat2.getDate()}/${Dat2.getMonth()}/${Dat2.getFullYear()}`
		
		let Dat3 = new Date(Dat2.getFullYear(),Dat2.getMonth(),Dat2.getDate());
		Dat3.setDate(Dat3.getDate()+120)
		if(Dat3.getMonth() == "0"){ parseInt(Dat3.getMonth())+1}
		let nextDate3 = `${Dat3.getDate()}/${Dat3.getMonth()}/${Dat3.getFullYear()}`
		
		let Dat4 = new Date(Dat3.getFullYear(),Dat3.getMonth(),Dat3.getDate());
		Dat4.setDate(Dat4.getDate()+60)
		
		if(Dat4.getMonth() == 0){ console.log("0")  
			parseInt(Dat4.getMonth())+1
		}
		let nextDate4 = `${Dat4.getDate()}/${Dat4.getMonth()}/${Dat4.getFullYear()}`
		
		this.setState({Q:[this.state.Q[0],date,nextDate2,nextDate3,nextDate4],buttonState:false})
	}
	if(props == "2nd Dose"){
		
		
		let Dat3 = new Date(Dat1.getFullYear(),Dat1.getMonth(),Dat1.getDate());
		Dat3.setDate(Dat3.getDate()+120)
		if(Dat3.getMonth() == "0"){ parseInt(Dat3.getMonth())+1}
		let nextDate3 = `${Dat3.getDate()}/${Dat3.getMonth()}/${Dat3.getFullYear()}`
		
		let Dat4 = new Date(Dat3.getFullYear(),Dat3.getMonth(),Dat3.getDate());
		Dat4.setDate(Dat4.getDate()+60)
		if(Dat4.getMonth() == "0"){ console.log("0") 
			parseInt(Dat4.getMonth())+1
		}
		let nextDate4 = `${Dat4.getDate()}/${Dat4.getMonth()}/${Dat4.getFullYear()}`
		
		this.setState({Q:[this.state.Q[0],this.state.Q[1],date,nextDate3,nextDate4],buttonState:false})
	}
	
	if(props == "3rd Dose"){
		//use filter for month == 0
	
		let Dat4 = new Date(Dat1.getFullYear(),Dat1.getMonth(),Dat1.getDate());
		Dat4.setDate(Dat4.getDate()+60)
		let nextDate4 = `${Dat4.getDate()}/${Dat4.getMonth()}/${Dat4.getFullYear()}`
		
		this.setState({Q:[this.state.Q[0],this.state.Q[1],this.state.Q[2],date,nextDate4],buttonState:false})
	}
	
	if(props == "Antibody Test"){
		this.setState({Q:[this.state.Q[0],this.state.Q[1],this.state.Q[2],this.state.Q[3],date],buttonState:false})
	}
	
	if(props == "Boosterdose"){
			
			let Dat5 = new Date(Dat1.getFullYear(),Dat1.getMonth(),Dat1.getDate());
			Dat5.setDate(Dat5.getDate()+60)
			
			let nextDate5 = `${Dat5.getDate()}/${Dat5.getMonth()}/${Dat5.getFullYear()}`
			
			this.setState({Q:[this.state.Q[0],this.state.Q[1],this.state.Q[2],this.state.Q[3],nextDate5],doseDate1:date})
		}
	}
	handleabtValuechange = (value) => {
		this.setState({abtValue:value})
		this.setState({buttonState:false})
		if(parseInt(value) > 9){
					console.log("good")
			let Dat5 = new Date(new Date().getFullYear(),new Date().getMonth()+1,new Date().getDate());
			console.log(Dat5.getFullYear())
			Dat5.setDate(Dat5.getDate()+365)
			
			let nextDate5 = `${Dat5.getDate()}/${Dat5.getMonth()}/${Dat5.getFullYear()}`
			
			this.setState({Q:[this.state.Q[0],this.state.Q[1],this.state.Q[2],this.state.Q[3],nextDate5]})
		}
		}
	
	antibodyValue = () => {
		
		if(this.state.abtValue == "0"){
			return (
				<View>
					<Text style={styles.atest}> Note : Go for new form</Text>
				</View>
			)
		}
		else if(parseInt(this.state.abtValue) > 1 && parseInt(this.state.abtValue) <9){
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
	
	insertDate = async() =>{	
		console.log("s",this.state.Q[0])
		this.setState({animating:true})
		if(this.state.abtValue == "0"){ 
			this.setState({Q:[todayDate],abtValue:'',})
		}
		const response = await fetch("https://vkidneym.herokuapp.com",{
					method : 'POST',
					cache: 'no-cache',
					credentials:'include',
					headers : {'Content-Type': 'application/json'},
					body:JSON.stringify({Email:this.props.navigation.state.params.name,
					dose0:`${this.state.Q[0]}`,
					dose1:`${this.state.Q[1]}`,
					dose2:`${this.state.Q[2]}`,
					dose3:`${this.state.Q[3]}`,
					abtDate:`${this.state.Q[4]}`,
					Token:this.state.expoPushToken}),
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
	
	selectDates = (Qu,indexOfQ) => {
		
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
					<ActivityIndicator  animating = {this.state.animating} color = 'red' size = "large"style={styles.activityIndicator}/>
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
				</View>	
				</ScrollView>									
				
			)
		}
	}
}
		