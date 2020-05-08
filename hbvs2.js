import React from 'react';
import {Image,TouchableOpacity,KeyboardAvoidingView,TouchableHighlight,TextInput,FlatView,ActivityIndicator, ScrollView, Button,Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import DatePicker from 'react-native-datepicker'
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
		marginTop:25,
		marginBottom:5,
		paddingTop:10,
		paddingBottom:15,
		borderBottomWidth:1,
		marginLeft:10,
		marginRight:10,
	},
	dates:{
		fontSize:15,
		
	},
	Notes:{
		fontSize:14,
		paddingTop:10,
		marginBottom:10,
		
	},
})


export default class HBVS2 extends React.Component{
	static navigationOptions = ({ navigation, screenProps }) => ({
		headerTitle:"Hepatitis B Vaccine Schedule",	
	 
	})
	
	constructor(props){
		super(props);
		this.state ={
			doseDate:'',
			expoPushToken:'',
			vaccineDate:'',
			doseState:false,		
			Q:[],
			showDose:false,
			animating: true,
			showDate:false,
			notification:'',		
		}
		this.dateInserted();
	}
	
	dateInserted = async() => {

				const response = await fetch("http://192.168.1.4:5000/notification"
				,{
					method : 'POST',
					cache: 'no-cache',
					credentials:'include',
					headers : {'Content-Type': 'application/json'},
					
					body:JSON.stringify({Email:"siddhantshah04@gmail.com"}),
				})
				const re = await response.json()
				console.log(re)
				this.setState({Q:re})
			this.setState({animating:false })  
		}
	
	insertDose = async(dose) => {
		console.log(dose)
		console.log(this.state.doseDate)
		
		
		const response = await fetch("http://192.168.1.4:5000/DoseInsert",{
					method : 'POST',
					cache: 'no-cache',
					credentials:'include',
					headers : {'Content-Type': 'application/json'},
					body:JSON.stringify({expoPushToken:this.state.expoPushToken,doseDate:this.state.doseDate,vaccineDate:this.state.vaccineDate,doseType:dose,Email:"siddhantshah04@gmail.com"}),
				})
				const res= await response.text()
				console.log(res)
				if(res == "ok"){
					alert(`Your dose  details has been set for notification`)
					this.dateInserted()
				}else{
					alert("Some thing went wrong")
				}		
	}
	render(){
		return(
			<View Style={styles.container}>				
				<ScrollView>
				<View style={styles.datesContainer}>
				<ActivityIndicator  animating = {this.state.animating} color = 'red'size = "large"style={styles.activityIndicator}/>
					<View style={{flexDirection:'row',}}>
						<Text style={styles.dates,{fontSize:20,}}>{this.state.Q.doseType} : </Text><DatePicker  disabled={this.state.doseState} date={this.state.doseDate} style={{width:220}}  mode="date" value={this.state.doseDate} onDateChange={this.setDate}/>			
					</View>
						<Text style={styles.Notes}> <Text style={{fontWeight:'bold'}}>Note :</Text> You need to take next dose after one month and notification will be sent for the same.</Text>					
						<Button title="Submit" onPress={()=> {this.insertDose(`${this.state.Q.doseType}`)}} />
						
				</View>
			</ScrollView>	
		</View>
		)
	}
}