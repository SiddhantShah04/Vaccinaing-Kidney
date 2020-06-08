import React from 'react';
import {Image,TouchableOpacity,KeyboardAvoidingView,ActivityIndicator,TouchableHighlight,TextInput,FlatView, ScrollView, Button,Text, View, StyleSheet,Modal } from 'react-native';
import Constants from 'expo-constants';
import DatePicker from 'react-native-datepicker'
import  {addDosevs, getDosevs} from './api.js'
import  {addMonth} from './Date.js' 
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { StackActions, NavigationActions } from 'react-navigation';
	const names = ['PCV Vaccine ','PPSV 23 Vaccine']
let i=-1
const Histroy = (props) => {

	if(props.items == "Please Wait..."){
		return(
		<View>
			<Text style={styles.atest}>Please wait...</Text>
		</View>
		)
	}else{
		if(i>=1){i =- 1}
		i=i+1
		console.log(i)
		return(
		<View>
				<Text style={{backgroundColor:'whitesmoke',fontSize:16,textAlign:'justify',marginLeft:10,marginRight:10}}><Text style={{fontWeight:'bold'}}>{names[i]} </Text>: {props.items}</Text> 
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
	headerTitle : "    Pneumococcal Vaccine Schedule",	
  })
	constructor(props){
		super(props);
		this.state= {
			histroyData:["Please Wait..."],
			doseDate:todayDate,
			Q:[todayDate,nextDate],
			month:['PPSV 23 Vaccine after two month','PPSV 23 Vaccine after one year'],
			animating:true,
			buttonState:true,
			type:['PCV B Vaccine :','PPSV 23 Vaccine : '],
			visible:false,
		}
		this.dateInserted()
	}
	
	dateInserted = async() => {
		const re = await  getDosevs(this.props.navigation.state.params.name,"dosePvs")
				console.log(re)
				if(re.length === 0){
					this.setState({animating:false})
				}
				else{
					this.setState({Q:re,buttonState:true,animating:false})
				}		
		}
	
	insertDose = async() => {
		const res= await addDosevs(this.props.navigation.state.params.name,this.state.Q,"dosePvs")
		this.setState({animating:true})
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
		//let Dat1 = new Date(y,m,d);
		let nextDate2
		if(type == "PPSV 23 Vaccine : "){
			nextDate2 = addMonth(12,date)	
				this.setState({Q:[this.state.Q[0],nextDate2],buttonState:false})
		}else{
			nextDate2 = addMonth(2,date)
				this.setState({Q:[date,nextDate2],buttonState:false})
		}
	}
	history = async() => {
		this.setState({visible:true})
		const response = await fetch("https://vkidneym.herokuapp.com/getScheduleHistroypvs?Email=" +this.props.navigation.state.params.name)
		const result = await response.json()
		this.setState({histroyData:result,animatingM:false})
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
						<Text style={styles.dates,{fontSize:18}}>{this.state.type[this.state.Q.indexOf(Qu)]} </Text>
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
