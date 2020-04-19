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
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/FontAwesome';
// You can import from local files
// You can import from local files

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
   
  },
  data:{
		
		flexDirection:'row',
		borderColor: 'grey',
		borderBottomWidth: 1,
		marginRight:45,
		marginLeft:15,
		paddingTop:45,
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
    
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{flex:1,marginTop:3,marginLeft:15,}}>
				<View style={styles.data}>
					<Ionicons name="user" size={25}/>
					<TextInput placeholder="Full name"   underlineColorAndroid={'transparent'} style={{marginLeft:15}}/>
				</View>
				
				<View style={styles.data}>
					<Ionicons name="envelope" size={25}/>
					<TextInput placeholder="Email"   underlineColorAndroid={'transparent'} style={{marginLeft:15}}/>
				</View>
				
				<View style={styles.data}>
					<Ionicons name="phone-square" size={25}/>
					<TextInput placeholder="Contact number" style={{marginLeft:15}} keyboardType="numeric" underlineColorAndroid={'transparent'}/>
				</View>
				
					<View style={styles.data}>
					<Ionicons name="child" size={25}/>
					<TextInput placeholder="Age" style={{marginLeft:15}} keyboardType="numeric" underlineColorAndroid={'transparent'}/>
				</View>
				
				<View style={styles.data}>
					<Ionicons name="lock" size={25}/>
					<TextInput placeholder="Password"   secureTextEntry={true} style={{marginLeft:15}}  underlineColorAndroid={'transparent'}/>
					<Ionicons name="eye-slash" size={25} style={{marginLeft:190}}/>
				</View>
				<View style={styles.data}>
					<Ionicons name="lock" size={25}/>
					<TextInput placeholder="Confirm password"   secureTextEntry={true} style={{marginLeft:15}}  underlineColorAndroid={'transparent'}/>
					<Ionicons name="eye-slash" size={25} style={{marginLeft:190}}/>
				</View>
				
			
				
				
				<View style={{borderColor: 'grey',borderBottomWidth: 1,marginRight:45,marginLeft:15,paddingTop:35,marginLeft:15}}>
					<Text>Gender</Text>
					<View style={{flexDirection:'row',marginTop:-5}}>
						<Ionicons name="mars" size={25} style={{marginTop:12}}/>
						<Picker style={styles.pickerStyle} selectedValue={this.state.language}
						onValueChange={(itemValue, itemPosition) =>
							this.setState({
							language: itemValue,
							choosenIndex: itemPosition,
							})
						}>
						<Picker.Item label="Male" value="Male" />
						<Picker.Item label="Female" value="Female" />
						<Picker.Item label="Transgender" value="Female" />
					</Picker>
					</View>	
				</View>
				
			</View>
			
			<View style={{marginTop:50,margin:25}}>
					<Button title="Sign Up"/>
				</View>
			
      </ScrollView>
    );
  }
}
