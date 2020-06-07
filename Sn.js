import React from 'react';

import {Image,TouchableOpacity,TouchableHighlight,TextInput,ScrollView, Button,Text, View, StyleSheet,Dimensions ,FlatList,ActivityIndicator  } from 'react-native';
import Modal from 'react-native-modal';
//import Autocomplete from 'react-native-autocomplete-input';
import {S,name} from './Search.js'
import Ionicons from 'react-native-vector-icons/FontAwesome5';
//import  {addMonth} from './Date.js' 

const Cities = (props) => {
	return(
		<View style={{flex:1,}}>
		<View style={styles.input}>
			<Ionicons style={{paddingTop:15}} name="search" size={20} color='#5e60ce'/>
			<TextInput style={{fontSize:15,paddingLeft:5,width:350}} placeholder="Write a city name" value={props.textValue} onChangeText = {props.handleTextChange}   underlineColorAndroid='transparent'/>
		</View>	
			
			<FlatList   data={props.s(props.t)}
				  renderItem={({item}) =>  
					<View style={{borderTopWidth:1,paddingTop:10,paddingBottom:10}}>
						<TouchableOpacity onPress={() => props.cityData(item)}>
							<Text style={{marginLeft:5,color:'white',fontSize:17}}>{item}</Text>
						</TouchableOpacity>
					</View>}
				  keyExtractor={(item, index) => index.toString()}
				/>
			
		</View>
	)
}
const Names = (props) => {
	return(
		<View style={{flex:1,}}>
		<View style={styles.input}>
			<Ionicons style={{paddingTop:15}} name="search" size={20} color='#5e60ce'/>
			<TextInput style={{fontSize:15,paddingLeft:5,width:350}} placeholder="Write a name" value={props.textValue} onChangeText = {props.handleNameChange}  
			underlineColorAndroid='transparent'/>
		</View>	
			
			<FlatList   data={props.s(props.t)}
				  renderItem={({item}) =>  
					<View style={{borderTopWidth:1,paddingTop:10,paddingBottom:10}}>
						<TouchableOpacity onPress={() => props.cityData(item)}>
							<Text style={{marginLeft:5,color:'white',fontSize:17}}>{item}</Text>
						</TouchableOpacity>
					</View>}
				  keyExtractor={(item, index) => index.toString()}
				/>
			
		</View>
	)
}
export default class AboutUs extends React.Component {
	 static navigationOptions = {
    headerTitle: 'Search Nephrologist',
  }
	constructor(props){
		super(props)
		this.state={
			data:["a","b"],
			mVisible:false,
			textValue:'',
			textType:'',
			data:[],
			a:false,
			nVisible:false,
		}
	}
	handleTextChange(v){
		this.setState({textType:v})
	}
	handleNameChange(v){
		this.setState({textType:v})
	}
	async submitSelectedCity(city){
		
		this.setState({a:true,mVisible:false})
		
		try{
			const response = await fetch("https://vkidneym.herokuapp.com/dL?City="+city)
			const result = await response.json()
			this.setState({data:result,a:false})
	
		}catch(e){alert(e)}
	}
	async submitSelectedName(n){
		this.setState({a:true,nVisible:false})
		try{
			const response = await fetch("https://vkidneym.herokuapp.com/dLname?City="+n)
			const result = await response.json()
			this.setState({data:result,a:false})
		}catch(e){alert(e)}
	}

render(){
	return(
		<View style={styles.container}>
			<TouchableOpacity style={styles.searchButton} onPress={ () =>this.setState({mVisible:true})}>
				<View style={{alignSelf:'center',marginTop:7,flexDirection:'row'}}>
					<Ionicons style={{marginLeft:10,alignSelf:'center'}} name="search" size={22} color='white' />
					<Text style={styles.searchText}> Search by City</Text>
				</View>
			</TouchableOpacity>
			
			<TouchableOpacity style={styles.searchButton} onPress={ () =>this.setState({nVisible:true})}>
				<View style={{alignSelf:'center',marginTop:7,flexDirection:'row'}}>
					<Ionicons style={{marginLeft:10,alignSelf:'center'}} name="search" size={22} color='white' />
					<Text style={styles.searchText}> Search by Name</Text>
				</View>
			</TouchableOpacity>
			
			<Modal isVisible={this.state.mVisible} onBackButtonPress={() => this.setState({mVisible:false})}>
				<Cities s={S} t={this.state.textType}  cityData={(city) =>this.submitSelectedCity(city)} text={this.state.textValue} handleTextChange={(v) => this.handleTextChange(v)} />
			</Modal>
			
			<Modal isVisible={this.state.nVisible} onBackButtonPress={() => this.setState({nVisible:false})}>
				<Names s={name} t={this.state.textType}  cityData={(city) =>this.submitSelectedName(city)}  text={this.state.textValue} handleNameChange={(v) => this.handleNameChange(v)} />
			</Modal>

				{this.state.a == true ? 
			  <ActivityIndicator  animating = {this.state.a} color = 'red' size = "large"style={{marginTop:20}}/>
			 :
				<ScrollView>
					
					{this.state.data.map((d) =>
					<View style={{borderTopWidth:1,marginTop:15,marginBottom:10,paddingTop:5}}>
						<Text style={styles.dataText}>Doctor name : {d.docname}</Text>
						<Text style={styles.dataText}>Address : {d.address}</Text>
						<Text style={styles.dataText}>State : {d.state}</Text>
						<Text style={styles.dataText}>City : {d.city}</Text>
							<Text style={styles.dataText}>Phone number : {d.phone}</Text>
							<Text style={styles.dataText}>Mobile number : {d.mobile}</Text>
							<Text style={styles.dataText}>Email : {d.Email}</Text>
							
					</View>
					)}
				</ScrollView>
			}
		</View>
	)
}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		marginLeft:10,
		marginRight:10,
		 marginTop:1,
	},
	searchButton:{
	backgroundColor:'#5e60ce',
	height:40,
	borderRadius:20,
	alignContent:'center',
	marginTop:15,
	},
	searchText:{
		fontSize:18,
		alignSelf:'center',
		color:'white',
	},
	input:{
		backgroundColor:'white',
		borderColor:'#5e60ce',
		borderWidth:2,
		paddingLeft:8,
		height:50,
		flexDirection:'row',
		borderRadius:20
	},
	dataText:{
	  fontSize:16,
	  fontFamily:'sans-serif',
  },
})