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
	},
	datesContainer:{
		justifyContent: 'center',	
		alignItems: 'center',
		marginTop:25,
		marginBottom:5,
		paddingTop:10,
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
})


export default class HBVS extends React.Component{
	i
	static navigationOptions = ({ navigation, screenProps }) => ({
	
	headerTitle:"Hepatitis B Vaccine Schedule",	
	
  })
	constructor(props){
		super(props);
		this.state ={
			doseDate0:'2020-05-06',
			doseDate1:'2020-06-06',
			doseDate2:'2020-07-06',
			doseDate3:'2020-11-06',
			abtDate:'2021-01-06',
			vaccineDate:'',
			doseState1: true,
			doseState2: true,
			doseState3: true,
			dates:true,
			Q:[],
			
		}
			this.dateInserted()
	}
	
	
	
	dateInserted = async() => {
			try{ 		
				const response = await fetch("http://192.168.1.4:5000/hasDate"
				,{
					method : 'POST',
					cache: 'no-cache',
					credentials:'include',
					headers : {'Content-Type': 'application/json'},
					body:JSON.stringify({Email:this.props.navigation.state.params.name}),
				})
				const re = await response.json()
				
				console.log(re.length)
				if(re.length === 0){
					this.setState({dates:true})
					console.log(new Date().toLocaleDateString())
				}
				else{
					console.log("f")
					this.setState({dates:false})
				}
				re.map((qu) => {
					if(qu.dose0date == new Date().toLocaleDateString()) {
						this.setState({dates:true,})
					}
					else if(qu.dose1date == new Date().toLocaleDateString()) {
						this.setState({dates:true,doseState1:false,doseState0:true})
					}
					else if(qu.dose2date == new Date().toLocaleDateString()) {
						this.setState({dates:true,doseState2:false,doseState0:true})
					}
					else if(qu.dose3date == new Date().toLocaleDateString()) {
						this.setState({dates:true,doseState3:false,doseState0:true})
					}
					else if(qu.antibodyTestDate == new Date().toLocaleDateString()) {
						this.setState({dates:true,doseState4:false,doseState0:true})
					}
				})
				this.setState({Q:re})
			}catch(e){
				console.log(e)
			}
		}
	setDate0 = (date) => {
		
		let dm = new Date(date)
		this.setState({doseDate0:dm})
		let d = new Date(date);
		d.setMonth(d.getMonth() + 1)
		console.log(d.toLocaleDateString())
		this.setDate1(d)
		
	}
	setDate1 = (date) => {
		this.setState({doseDate1:date})
		let d = new Date(date);
		d.setMonth(d.getMonth() + 1)
		d.toLocaleDateString()
		this.setDate2(d);
	}
	setDate2 = (date) => {
		this.setState({doseDate2:date,})
		let d = new Date(date);
		d.setMonth(d.getMonth() + 4)
		this.setDate3(d);
	}
	setDate3 = (date) => {
		this.setState({doseDate3:date})
		let d = new Date(date);
		d.setMonth(d.getMonth() + 2)
		this.abtDate(d)
	}
	abtDate = (date) => {
		this.setState({abtDate:date})
	}
	insertDate = async() =>{
		
		
		console.log(this.state.doseDate)
		this.setState({doseState:false,animating:true})
		
		const response = await fetch("http://192.168.1.4:5000/DoseInsert",{
					method : 'POST',
					cache: 'no-cache',
					credentials:'include',
					headers : {'Content-Type': 'application/json'},
					body:JSON.stringify({Email:this.props.navigation.state.params.name,dose0:`${this.state.doseDate0.toLocaleDateString()}`,dose1:`${this.state.doseDate1.toLocaleDateString()}`,dose2:`${this.state.doseDate2.toLocaleDateString()}`,
					dose3:`${this.state.doseDate3.toLocaleDateString()}`,abtDate:`${this.state.abtDate.toLocaleDateString()}`}),
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
		if(this.state.dates){
		return(
			
			<View Style={styles.container}>
				<ScrollView>
				<View style={styles.datesContainer}>
				<Button title="Submit" onPress={this.insertDate} />
				<Text></Text>
					<View style={{flexDirection:'row',}}>
						<Text style={styles.dates,{fontSize:20,}}>0 Dose : </Text><DatePicker date={this.state.doseDate0} style={{width:220}}  mode="date" value={this.state.doseDate0} onDateChange={this.setDate0}/>					
					</View>
						<Text style={styles.Notes}>Note : You need to take next dose after one month and notification will be sent for the same.</Text>					
						
				</View>
				
				<View style={styles.datesContainer}>
					<View style={{flexDirection:'row',}}>
						<Text style={styles.dates,{fontSize:20,}}>1st Dose : </Text><DatePicker date={this.state.doseDate1} style={{width:220}} disabled={this.state.doseState1} mode="date" value={this.state.doseDate1} onDateChange={this.setDate1}/>					
					</View>
						<Text style={styles.Notes}>Note: You need to take next dose after one month and notification will be sent for the same.</Text>
				</View>
				
				<View style={styles.datesContainer}>
					<View style={{flexDirection:'row',}}>
						<Text style={styles.dates,{fontSize:20,}}>2nd Dose : </Text><DatePicker date={this.state.doseDate2} style={{width:220}} disabled={this.state.doseState2} mode="date" value={this.state.doseDate2} onDateChange={this.setDate2}/>					
					</View>
						<Text style={styles.Notes}>Note : You need  to take next dose after four months and notification will be sent for the same.</Text>						
				</View>
				
				<View style={styles.datesContainer}>
					<View style={{flexDirection:'row',}}>
						<Text style={styles.dates,{fontSize:20,}}>3rd Dose : </Text><DatePicker date={this.state.doseDate3} style={{width:220}} disabled={this.state.doseState3} mode="date" value={this.state.doseDate3} onDateChange={this.setDate3}/>					
					</View>
						<Text style={styles.Notes}>Note : You need to go for antibody test after two months and notification will be sent for the same.</Text>				
				</View>
					
				<View style={{flex:3,alignItems: 'center',}}>
				<Text style={{fontSize:20}}> Antibody test</Text>
					<View style={{flexDirection:'row',marginTop:12,}}>
						<Text style={styles.dates,{fontSize:17,}}> Antibody test date: </Text><DatePicker date={this.state.abtDate} style={{width:220}} disabled={this.state.doseState3} mode="date" value={this.state.abtDate} onDateChange={this.abtDate}/>					
					</View>
						<Text style={styles.Notes}>Note : You need to go for antibody test after two months and notification will be sent for the same.</Text>				
					</View>		
				</ScrollView>	
		</View>				
		)
		}
		else{
			return(
				<View>
			{this.state.Q.map((Qu) => 
							<View style={{alignItems: 'center',marginTop:20,marginBottom:20,}}>
								<Text style={{marginLeft:20,marginRight:20,fontSize:20,fontWeight: "bold",textAlign:'justify'}}>Dose0 :{Qu.dose0date}</Text>						
								<Text style={{marginLeft:20,marginRight:20,fontSize:20,textAlign:'justify',fontWeight: "bold" }}>Dose1:{Qu.dose1date}</Text>
								<Text style={{marginLeft:20,marginRight:20,fontSize:20,textAlign:'justify',fontWeight: "bold" }}>Dose2:{Qu.dose2date}</Text>
								<Text style={{marginLeft:20,marginRight:20,fontSize:20,textAlign:'justify',fontWeight: "bold" }}>Dose3:{Qu.dose3date}</Text>
								<Text style={{marginLeft:20,marginRight:20,fontSize:20,textAlign:'justify',fontWeight: "bold" }}>antibodyTestDate:{Qu.antibodyTestDate}</Text>
							</View>)
				}
				</View>
			)
		}
	}
}