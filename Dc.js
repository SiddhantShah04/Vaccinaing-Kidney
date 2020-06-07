import React from 'react';

import {Image,TouchableOpacity,TouchableHighlight,TextInput,ScrollView, Button,Text, View, StyleSheet,Dimensions ,FlatList,ActivityIndicator  } from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/FontAwesome5';

const c = ["Adipur","Agartala","Agra","Ahmedabad","Ajmer","Ambala","Amritsar","Athoil","Aurangabad","Bagalkot","Bangalore","Bareilly","Baroda","Bathinda","Berhampur","Bharatpur","Bharuch",
"Bhavnagar","Bhopal","Bhubaneshwar","Bhuj","Bijapur","Bikaner","Bilimora","Bokaro","Calicut","Chandigarh","Chengapur","Chennai","Chidambaram","Chiplun","Coimbatore","Cuddalore",
"Cuttack","Davangere","Dehradun","Derwan","Dhanbad","Dibrugarh","Dimapur","Dindigul","Durgapur.","Erode","Faridkot","Feroke","Gandhinagar","Ganganagar","Ghaziabad","Gulbarga",
"Gurdaspur","Guwahati","Gwalior","Haldwani","Halol","Haryana","Hissar","Hubli","Hyderabad","Ichalkaranji","Indore","Jabalpur","Jaipur","Jalandhar","Jalgaon","Jammu","Jamshedpur",
"Jodhpur","Kaipetta","Kanchipuram","Kannur","Karad","Karamsad","Katni","Katra","Kolkata","Kota","Kottakkal","Kozhecheri","Ludhiana","Madgaon","Madurai","Mangalore","Mapusa","Mathura",
"Meerut","Mehsana","Miraj","Mohali","Moradabad","Mukkam","Mullana","Mumbai","Mysuru","Nadiad","Nagercoil","Nasik","Naysari","New Delhi","Neyveli","Noida","Palanpur","Panchkula",
"Pandalam","Panjim","Patan","Pathankot","Pathanmthitta","Perinthalmanna","Pondicherry","Pune","Quilon","Rajkot","Ramanathapuram","Ranchi","Ratnagiri","Rohtak","Rourkela","Salem",
"Sambhalpur","Satara","Sattur","Shillong","Shimla","Shimoga","Shingrouli","Sikar","Silchar","Siliguri","Sivakasi","Sohan","Solhapur","Srinagar","Surat","Surendranagar","Thane","Theni",
"Thiruvalla","Thrissur","Tirunelveli","Tirupur","Tripathi","Trivandrum","Tuticorin","Udaipur","Ujjain","Vadakara","Vallioor","Valsad","Vapi","Vellore","Yamunanagar"]


const Cities = (props) => {
	return(
			<View style={{borderTopWidth:1,paddingTop:10,paddingBottom:10}}>	
			<TouchableOpacity onPress={props.calNavH} style={styles.vaccineB} onPress={() => props.citySelect(props.cities)}>
				<View style={{textAlign:'center'}}>
					<Text style={{marginLeft:5,fontSize:17,color:'white'}}>{props.cities}</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
} 
const Zones = (props) => {
	return(
		<View style={{borderTopWidth:1,alignSelf:'center',backgroundColor:'white',width:screenWidth+200,height:65,borderRadius:15,paddingBottom:5,}} >	
			<TouchableOpacity  style={styles.vaccineB} onPress={() => props.zoneSelect(props.zones)}>
				<View style={{textAlign:'center'}}>
					<Text style={styles.vaccineT}> {props.zones} zone</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
} 
let screenWidth=Dimensions.get('window').width/2.3
export default class AboutUs extends React.Component {
	 static navigationOptions = {
    headerTitle: 'Dialysis centers',
  }
  constructor(props){
	  super(props);
	  this.state={
		  cZ:'',
		  mVisible:false,
		  data:[],
		  a:false,
		  textValue:'',
		  toggelC:c,
		  textType:'',
		  Zones : ["North","South","East","West"]
	  }
  }
  
  cityS= async(city) => {
	  this.setState({a:true,mVisible:false})
	  try{
	   const response = await fetch("https://vkidneym.herokuapp.com/Dc?City="+city)
		const result = await response.json()
		
		this.setState({data:result,a:false})
	
	  }catch(e){alert(e)}
  }
  zo =  async(zone) => {
	   this.setState({a:true,mVisible:false})
	     try{
	   const response = await fetch("https://vkidneym.herokuapp.com/Zone?zone="+zone)
		const result = await response.json()
		this.setState({data:result,a:false})
	  }catch(e){alert(e)}
  }
  
  handleTextChange = (v) => {
	const regexp =  new RegExp(v,"g")
	let a = [];
	let s=""
	for(let i=0;i<c.length;i++){
		s = c[i].match(regexp)
		if( s != null){
			a.push(c[i])
		}
	}	
	this.setState({textType:v,toggelC:a})
	}
	render(){
		return(
			<View style={styles.container}>
				<TouchableOpacity style={styles.searchButton} onPress={ () =>this.setState({mVisible:true,cZ:'Cities'})}>
				<View style={{alignSelf:'center',marginTop:7,flexDirection:'row'}}>
					<Ionicons style={{marginLeft:10,alignSelf:'center'}} name="search" size={22} color='white' />
					<Text style={styles.searchText}> Search by City</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity style={styles.searchButton} onPress={ () =>this.setState({mVisible:true,cZ:''})}>
				<View style={{alignSelf:'center',marginTop:7,flexDirection:'row'}}>
					<Ionicons style={{marginLeft:10,alignSelf:'center'}} name="search" size={22} color='white' />
					<Text style={styles.searchText}> Search by Zone</Text>
				</View>
			</TouchableOpacity>
			
			<Modal isVisible={this.state.mVisible} onBackButtonPress={() => this.setState({mVisible:false})}>
			
				{this.state.cZ == "Cities" ?
					<View style={{marginTop:5,flex:1}}>
						<View style={styles.input}>
							<Ionicons style={{paddingTop:15}} name="search" size={20} color='#5e60ce'/>
							<TextInput style={{fontSize:15,paddingLeft:5,width:350}} placeholder="Write a city name" value={this.state.textType} onChangeText = {this.handleTextChange}   underlineColorAndroid='transparent'/>
						</View>
				<FlatList   data={this.state.toggelC}
				  renderItem={({item}) =>  
				  <Cities  cities = {item} citySelect={ (v) => this.cityS(v)} />}
				  keyExtractor={(item, index) => index.toString()}
				/>
					</View>
				:
				this.state.Zones.map((zone) =>   <Zones zones={zone}  zoneSelect= { (zone) => this.zo(zone)}/>)
				}
			</Modal>
			{this.state.a == true ? 
			  <ActivityIndicator  animating = {this.state.a} color = 'red' size = "large"style={{marginTop:20}}/>
			 :
				<ScrollView>
					
					{this.state.data.map((d) =>
					<View style={{borderTopWidth:1,marginTop:15,marginBottom:10}}>
						<Text style={styles.dataText}>Center name : {d.centerName}</Text>
						<Text style={styles.dataText}>Center address : {d.centerAddress}</Text>
							<Text style={styles.dataText}>Contact person : {d.contactPerson}</Text>
							<Text style={styles.dataText}>Contact number : {d.contactNumber}</Text>
							<Text style={styles.dataText}>City : {d.city}</Text>
							<Text style={styles.dataText}>Zone : {d.Zone}</Text>
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
	input:{
		backgroundColor:'white',
		borderColor:'#5e60ce',
		borderWidth:2,
		paddingLeft:8,
		height:50,
		flexDirection:'row',
		borderRadius:20
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
	vaccineB:{
	  paddingTop:10,
	  paddingBottom:10,
  },
  dataText:{
	  fontSize:16,
  },
  vaccineT:{
	fontSize:20,
	alignSelf:'center',
	color:'blue',
	
  }
})