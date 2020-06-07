import * as React from 'react';
import {
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableHighlight,
  TextInput,
  FlatView,
  ScrollView,
  Button,
  Text,
  View,
  StyleSheet,
  Picker,
  Dimensions,
   ActivityIndicator
} from 'react-native';


import DatePicker from 'react-native-datepicker';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
// You can import from local files
// You can import from local files

//styles
const width=Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  data:{
		flexDirection:'row',
		borderColor: 'grey',
		borderBottomWidth: 1,
		paddingTop:45,
		marginRight:17,
		marginLeft:5,
		
	},
	button:{
		marginLeft:10,
		width:width,
		fontSize:20,
},
	pickerStyle: {
		height: 50,
		width: '95%',
		color: 'black',
		borderColor: 'black',
		marginLeft:10,
		borderBottomColor: 'black',
		borderBottomWidth: 1,
  },
});
export default class SignUp extends React.Component {
	
  static navigationOptions = {
    headerTitle: 'Back to login page',
  };
  constructor(props) {
    super(props);
	this.state = {
		fullName : '',
		gender : '',
		Email : '',
		password : '',
		Age : '',
		contactNumber : '',
		confPassword:'',
		animating: false,
		userName:'',
	}
    
  }
  	Registartion = async () => {
		if(this.state.gender == "")
			alert(" Invalid gender unselection")
		else if(this.state.fullName === '' || this.state.Email === ''){
			alert("Some field are missing")
		}
  
		else if(this.state.confPassword != this.state.password){
			alert("Password did not matched")
		}else{
			//start snipper
			this.setState({animating: true })
			const response = await fetch("https://vkidneym.herokuapp.com/signUp",{
			method : 'POST',
			cache: 'no-cache',
			credentials:'include',
			headers : {'Content-Type': 'application/json'},
			body:JSON.stringify({fullName:this.state.fullName,userName:this.state.userName,gender:this.state.gender,Email:this.state.Email,Password:this.state.password,
			age:this.state.age,contactNumber:this.state.contactNumber}),
			})
				const res= await response.text()
				console.log(res)
			//end spinner	
			this.setState({animating: false })
			if(res === "ok"){
				{this.props.navigation.navigate("One")}
			}
			else{
			alert(res)
			}
		}
	}  
	
	handleEmailChange = (Email) =>{
    	this.setState({Email:Email})
  	}
	handleFullnamechange = (fullName) => {
		  this.setState({fullName:fullName})
	  }
	  handlecontactNumberchange = (contactNumber) => {
		  
		  this.setState({contactNumber:contactNumber})
	}

	handlePasswordchange = (password) => {
		this.setState({password:password})
	}
	
	handleAgechange = (age) => {
		this.setState({age:age})
	}
	
	handleconfPasswordchange = (confPassword) => {
		
		this.setState({confPassword:confPassword})
	}
	
	handlegenderchange = (gender) => {
		console.log(gender)
		if(gender==="Select a gender")
			alert(" Invalid selection")
		else{
			this.setState({gender:gender})
		}
		
	}
	handleuserNamechange = (name) => {
		this.setState({userName:name})
	}

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{flex:1,marginTop:3,marginLeft:15,}}>
				<View style={styles.data}>
					<Ionicons name="user" size={28}/>
					<TextInput placeholder="Full name"   underlineColorAndroid={'transparent'} style={styles.button} value={this.state.fullName}
              				onChangeText = {this.handleFullnamechange}/>
				</View> 
				<View style={styles.data}>
					<Ionicons name="user-tie" size={28}/>
					<TextInput placeholder="User name"   underlineColorAndroid={'transparent'}  style={styles.button}  value={this.state.userName}
              				onChangeText = {this.handleuserNamechange}/>
				</View>
				
				<View style={styles.data}>
					<Ionicons name="envelope" size={28}/>
					<TextInput placeholder="Email"   underlineColorAndroid={'transparent'}  style={styles.button} value={this.state.Email} onChangeText = {this.handleEmailChange}/>
				</View>
				
				<View style={styles.data}>
					<Ionicons name="phone-square" size={28}/>
					<TextInput placeholder="Contact number" maxLength={10}  style={styles.button}  value={this.state.contactNumber} onChangeText = {this.handlecontactNumberchange} keyboardType="numeric" underlineColorAndroid={'transparent'}/>
				</View>
				
					<View style={styles.data}>
					<Ionicons name="child" size={28}/>
					<TextInput placeholder="Age" maxLength={2} value={this.state.age} onChangeText = {this.handleAgechange}  style={styles.button}  keyboardType="numeric" underlineColorAndroid={'transparent'}/>
				</View>
				
				<View style={styles.data}>
					<Ionicons name="lock" size={28} onPress={() => {alert("ok")}}/>
					<TextInput placeholder="Password"  value={this.state.password} onChangeText = {this.handlePasswordchange} secureTextEntry={true}  style={styles.button}   underlineColorAndroid={'transparent'}/>
					<Ionicons name="eye-slash" size={25} style={{marginLeft:190,fontSize:20}}/>
				</View>
				<View style={styles.data}>
					<Ionicons name="lock" size={28}/>
					<TextInput placeholder="Confirm password" value={this.state.confPassword} onChangeText = {this.handleconfPasswordchange}  secureTextEntry={true}  style={styles.button}  underlineColorAndroid={'transparent'}/>
					<Ionicons name="eye-slash" size={28} style={{marginLeft:190}}/>
				</View>
				
				<View style={{borderColor: 'grey',borderBottomWidth: 1,marginRight:45,marginLeft:15,paddingTop:35,marginLeft:15}}>
					<Text>Gender</Text>
					<View style={{flexDirection:'row',marginTop:-5}}>
						<Ionicons name="mars" size={25} style={{marginTop:12}}/>
						<Picker style={styles.pickerStyle} selectedValue = {this.state.gender} onValueChange = {this.handlegenderchange}>
						<Picker.Item label="Select a gender" value="Male" />
						<Picker.Item label="Male" value="Male" />
						<Picker.Item label="Female" value="Female" />
						<Picker.Item label="Transgender" value="Transgender" />
					</Picker>
					</View>	
				</View>
			</View>
			<View style={{marginTop:50,margin:25}}>
					<Button title="Sign Up" onPress={this.Registartion}/>
				</View>
			 <ActivityIndicator animating = {this.state.animating} color = 'blue' size = "large" style={styles.activityIndicator}/>
      </ScrollView>
    );
  }
}

