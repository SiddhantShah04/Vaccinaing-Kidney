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

export default class HBVS extends React.Component{
	static navigationOptions = ({ navigation, screenProps }) => ({
	
	headerTitle:"Hepatitis B Vaccine Schedule",	
	 
  })
	constructor(props){
		super(props);
		this.state ={
			doseDate:'',
			doseDate1:'',
			doseDate2:'',
			doseDate3:'',
			vaccineDate:'',
			doseState:false,		
			Q:[],
			showDose:false,
			 animating: true,
			showDate:false,
		}
		this.dateInserted()
	}
	dateInserted = async() => {
			try{ 
				const response = await fetch("http://192.168.1.4:5000/hasDate")
				const re = await response.json()
			//re.map(this.QA)
				this.setState({Q:re})
				
				this.setState({showDose:true})
			}catch(e){
				this.setState({showDate:true})
			}
			
			this.setState({animating:false })  
		}
	setDate = (date) => {
		
		this.setState({doseDate:date})
		//console.log(date)
		var d = new Date(date);
		d.setMonth(d.getMonth() + 1)
		d.setDate(d.getDate()-1)
		this.setState({vaccineDate:(d.toLocaleDateString())})
		//console.log(d.toLocaleDateString())
		
	}


	insertDose = async(dose) => {
		console.log(dose)
		console.log(this.state.doseDate)
		this.setState({doseState:false,animating:true})
		
		const response = await fetch("http://192.168.1.4:5000/DoseInsert",{
					method : 'POST',
					cache: 'no-cache',
					credentials:'include',
					headers : {'Content-Type': 'application/json'},
					body:JSON.stringify({doseDate:this.state.doseDate,doseType:dose,Email:this.props.navigation.state.params.name}),
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
		
			
				
	
		
		if(this.state.showDose) return(
			
			<View>
					
				{this.state.Q.map((Qu) => 
							<View style={{alignItems: 'center',marginTop:20,marginBottom:20,}}>
								<Text style={{marginLeft:20,marginRight:20,fontSize:20,fontWeight: "bold",textAlign:'justify'}}>Dose0 :{Qu.dose0date}</Text>						
								<Text style={{marginLeft:20,marginRight:20,fontSize:20,textAlign:'justify',fontWeight: "bold" }}>Dose1:{Qu.dose1date}</Text>
								<Text style={{marginLeft:20,marginRight:20,fontSize:20,textAlign:'justify',fontWeight: "bold" }}>Dose2:{Qu.dose2date}</Text>
								<Text style={{marginLeft:20,marginRight:20,fontSize:20,textAlign:'justify',fontWeight: "bold" }}>Dose3:{Qu.dose3date}</Text>
								<Text style={{marginLeft:20,marginRight:20,fontSize:20,textAlign:'justify',fontWeight: "bold" }}>antibodyTestDate:{Qu.dose3date}</Text>
							</View>)
				}
		</View>
		)
		if(this.state.showDate) return(
		<View Style={styles.container}>				
				<ScrollView>
				<View style={styles.datesContainer}>
					<View style={{flexDirection:'row',}}>
						<Text style={styles.dates,{fontSize:20,}}>0 Dose : </Text><DatePicker disabled={this.state.doseState} date={this.state.doseDate} style={{width:220}}  mode="date" value={this.state.doseDate} onDateChange={this.setDate}/>			
					</View>
						<Text style={styles.Notes}> <Text style={{fontWeight:'bold'}}>Note :</Text> You need to take next dose after one month and notification will be sent for the same.</Text>					
						<Button title="Submit" onPress={()=> {this.insertDose("dose0date")}} />
						<ActivityIndicator  animating = {this.state.animating} color = 'red'size = "large"style={styles.activityIndicator}/>
				</View>
			</ScrollView>	
		</View>
					
		)
		
		else{
			return(
				<View Style={styles.container}>	
					<ActivityIndicator  animating = {this.state.animating} color = 'red'size = "large"style={styles.activityIndicator}/>
				</View>
			)
		}
	}
}