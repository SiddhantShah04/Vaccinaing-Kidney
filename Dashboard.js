import * as React from 'react';
import {Dimensions, Text, View, StyleSheet,Button,TouchableOpacity,ScrollView,TouchableWithoutFeedback} from 'react-native';
import Constants from 'expo-constants';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import { FontAwesome5 } from '@expo/vector-icons';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Modal from 'react-native-modal';
import { SliderBox } from "react-native-image-slider-box";
import AsyncStorage from '@react-native-community/async-storage';

//onPress={()=> alert("Pressed")}
 
//const AppNav = createAppContainer(Nav);
//TouchableWithoutFeedback 
//<FontAwesome5 name="comment-medical" size={24} color="black" />
let screenWidth=Dimensions.get('window').width/2.3

const Calculator = (props) => {
	
	return(
		<View style={{alignSelf:'center',backgroundColor:'white',width:screenWidth+200,height:275,borderRadius:15}} >	
			<TouchableOpacity onPress={props.calNavU} style={style.vaccineB}>
				<View style={{textAlign:'center'}}>
					<Text style={style.vaccineT}> Ultrafiltration Rate Calculator</Text>
				</View>
			</TouchableOpacity>
			
			<TouchableOpacity onPress={props.calNavI} style={style.vaccineB}>
				<View style={{textAlign:'center'}}>
					<Text style={style.vaccineT}> Ideal Interdialytic Weight Gain Calculator</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
} 
const Schedule = (props) => {
	return(
		<View style={{alignSelf:'center',backgroundColor:'white',width:screenWidth+200,height:275,borderRadius:15}} >	
			<TouchableOpacity onPress={props.calNavH} style={style.vaccineB}>
				<View style={{textAlign:'center'}}>
					<Text style={style.vaccineT}> Hepatitis B Vaccine Schedule</Text>
				</View>
			</TouchableOpacity>
			
			<TouchableOpacity onPress={props.calNavP} style={style.vaccineB}>
				<View style={{textAlign:'center'}}>
					<Text style={style.vaccineT}> Pneumococcal Vaccine Schedule</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity onPress={props.calNavI} style={style.vaccineB}>
				<View style={{textAlign:'center'}}>
					<Text style={style.vaccineT}>  Influenza Vaccine Schedule</Text>
				</View>
			</TouchableOpacity>
			
		</View>
	)
}
export default class Dashboard extends React.Component{
  static navigationOptions = ({ navigation, screenProps }) => ({
	 //  const {state} = navigation;
	headerStyle: {
        backgroundColor: '#ffc0cb',
    },  
	headerTitle:"Kidnified",	
	headerLeft: () =><Ionicons name="bars"size={30} style={{marginLeft:13,color:'blue',}} onPress={(props)=>{navigation.navigate('Fouth',{name:`${navigation.state.params.Email}`})}}/>,
	headerRight: () =><FontAwesome5  name="comment-medical" size={30} style={{marginRight:7,color:'blue'}} onPress={(props)=>{navigation.navigate('Thirteen',{name:`${navigation.state.params.Email}`})}}/>,
  })
 

  constructor(props){
    super(props);
    this.state ={
		expoPushToken:'',
		Email:'',
      Dashboard:false,
	 visible:'',
	  sVisible:false,
	  images: [
        //"https://source.unsplash.com/1024x768/?tree", // Network image
        require('./assets/Dialysis_equipment_July-2019.jpg'),          // Local image
		require('./assets/doctor_450x300.jpg'),
		require('./assets/urology_med.jpg'),
		require('./assets/Vaccines_iStock.jpg'),
      ],
    }
	this.registerForPushNotificationsAsync()
	
  }
		async componentDidMount (){
	   try {
    const value = await AsyncStorage.getItem('come')	
	const {setParams} = this.props.navigation;
     setParams({Email:value});
	}
	   catch(e){alert(e)}
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
      this.setState({ expoPushToken: token });
	  this.sendToken()
    } else {
      alert('Must use physical device for Push Notifications');
    }
  }
  
	sendToken = async () => {
	  	try{
		const response = await fetch("https://vkidneym.herokuapp.com/rToken"
				,{
					method : 'POST',
					cache: 'no-cache',
					credentials:'include',
					headers : {'Content-Type': 'application/json'},
					body:JSON.stringify({Email:this.props.navigation.state.params.name,Token:this.state.expoPushToken}),
				})
				
				//console.log(re)		
		}catch(e){alert(e)}
  }
  
	q (v){
		 {this.props.navigation.navigate(v)}
	}
  
  render(){
	const {state} = this.props.navigation;
    return(
		<ScrollView style={{flex:1}}>
	  
		<View style={{flex:2,}}>
          <SliderBox  autoplay={true}  images={this.state.images} />
		</View>
		<View style={{paddingTop:20,marginBottom:10,flex:5,alignItems: 'center',}}>
			
			
		
				<TouchableWithoutFeedback  onPress={() => this.q("Fifth")}>
					<View style={{flexDirection:'row',backgroundColor:"#9b59b6",width:screenWidth+190,height:140 }}>
						<Ionicons style={{marginLeft:10,alignSelf:'center'}} name="book-reader" size={35} color='white' />
						<Text style={style.buttonText} > Educate Yourself</Text>
					</View>
				</TouchableWithoutFeedback>
				
				<View style={{flexDirection:'row',marginTop:10}}>
					<TouchableWithoutFeedback   onPress={() => this.setState({visible:'Calculator',sVisible:true})}>
					<View style={{flexDirection:'row',backgroundColor:"#b6c617",width:screenWidth+5,height:140}}>
						<Ionicons style={{marginLeft:10,alignSelf:'center'}} name="calculator" size={35} color='white' />
						<Text style={style.buttonText} > Calculator</Text>
					</View>
				</TouchableWithoutFeedback>
				
				
				<TouchableWithoutFeedback  onPress={() => this.setState({visible:'Schedule',sVisible:true})}>
					<View style={{flexDirection:'row',backgroundColor:"#ff7675",width:screenWidth+5,height:140,marginLeft:8}}>
						<Ionicons style={{marginLeft:10,alignSelf:'center'}} name="calendar-alt" size={35} color='white' />
						<Text style={style.buttonText} >Schedule</Text>
					</View>
				</TouchableWithoutFeedback>
				
				<Modal isVisible={this.state.sVisible} onBackButtonPress={() => this.setState({sVisible:false})}>
					{ this.state.visible == "Schedule" ? 
						<Schedule 
						calNavP ={()=>{{this.props.navigation.navigate("Eleven",{name:`${this.props.navigation.state.params.name}`})}  this.setState({sVisible:false}) }} 
						calNavH = {()=>{{this.props.navigation.navigate("Sixth",{name:`${this.props.navigation.state.params.name}`})} this.setState({sVisible:false})}}
						calNavI = {()=>{{this.props.navigation.navigate("Tweleve",{name:`${this.props.navigation.state.params.name}`})} this.setState({sVisible:false})}}
					/> 
					:
					<Calculator
						calNavU ={()=>{{this.props.navigation.navigate("Nine")}  this.setState({sVisible:false}) }} 
						
						calNavI = {()=>{{this.props.navigation.navigate("Eight")} this.setState({sVisible:false}) }}
					/> 
					}
						<View style={{backgroundColor:'white',marginTop:25,borderRadius:15}}>
						<TouchableOpacity onPress={() => this.setState({sVisible:false})} >
							<View style={{textAlign:'center',marginTop:10,marginBottom:10}}>
								<Text style={style.vaccineT}>  back</Text>
							</View>
						</TouchableOpacity>
					</View>
				</Modal>
				
			
				</View>
				<View style={{marginTop:10}}>
				
				<TouchableWithoutFeedback   onPress={()=>{this.props.navigation.navigate("fourteen")}}>
					<View style={{flexDirection:'row',backgroundColor:"#8293ee",width:screenWidth+190,height:140 }}>
						<Ionicons style={{marginLeft:10,alignSelf:'center'}} name="flask" size={35} color='white' />
						<Text style={style.buttonText} >Lab values interpretation</Text>
					</View>
				</TouchableWithoutFeedback>
				
			</View>
			
			<View style={{flexDirection:'row',marginTop:10}}>
					<TouchableWithoutFeedback    onPress={() => this.q("Fifteen")}>
					<View style={{flexDirection:'row',backgroundColor:"#734F96",width:screenWidth+5,height:140}}>
						<Ionicons style={{marginLeft:10,alignSelf:'center'}} name="search" size={30} color='white' />
						<Text style={style.buttonText} >Dialysis {"\n"}Centers</Text>
						
					</View>
				</TouchableWithoutFeedback>
				
				
				<TouchableWithoutFeedback  onPress={() => this.q("Sixteen")}>
					<View style={{flexDirection:'row',backgroundColor:"#ff005d",width:screenWidth+5,height:140,marginLeft:8}}>
						<Ionicons style={{marginLeft:10,alignSelf:'center'}} name="search" size={30} color='white' />
						<Text style={style.buttonText}> Search Nephrologist </Text>
					</View>
				</TouchableWithoutFeedback>
				</View>
			
		</View>
      </ScrollView>                    
    )
  }
}
	
const style = StyleSheet.create({
  Options:{
    height: 40,
    marginTop: 5,
    marginLeft:18,
    marginRight:15,
    borderColor: '#6c757d',
    paddingBottom:50,
    paddingTop:15,
    borderBottomWidth: 1,
  },
  input:{
       
    fontSize:20,
    color:'blue',
    paddingLeft:15,
	backgroundColor:"#00b894",
  },
  buttonText:{
	  color: 'white',fontSize:18,
	  marginLeft:10,
	alignSelf:'center'
  },
  vaccineB:{
	 
	  paddingTop:30,
	  paddingBottom:30,
	  borderBottomWidth:1,
	  borderColor:'#D3D3D3',
	 
  },
  vaccineT:{
	fontSize:18,
	alignSelf:'center',
	color:'blue',
  }
})

	
	
	
	
	
	
	
