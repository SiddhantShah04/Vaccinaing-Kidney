
import * as React from 'react';
import { Text, View, StyleSheet,Button,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// onPress={this.props.navigation.navigate("Two")}

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

  }
})


//onPress={()=> alert("Pressed")}
class Dash extends React.Component{
  
    static navigationOptions = ({ navigation, screenProps }) => ({
  title: "Vaccinating Kidney Warriors",
  headerTintColor:'blue',
  headerRight: () => <Button title="Menu" style={{width:10}} onPress={(props)=>{navigation.navigate('Two')}} />,

  })

  render(){
    return(
      <View style={{flex:1,justifyContent: 'center',alignItems: 'center',}}>
          <Text style={{fontSize:25}}>Dashboard Items</Text>
      </View>
    )
  }
}
class Menu extends React.Component{
  static navigationOptions = {
    headerTitle: 'Back ',
    headerTintColor:'blue',
  }
  render(){
  
    return(
      <View style={{flexDirection:'column'}}>
        <TouchableOpacity style={style.Options}>
            <Text style={{ color: '#6c757d',fontSize: 30, }}>Option1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.Options}>
            <Text style={{ color: '#6c757d',fontSize: 30,}}>Option2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.Options}>
            <Text style={{ color: '#6c757d',fontSize: 30, }}>Option3</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.Options}>
            <Text style={{ color: '#6c757d',fontSize: 30,}}>Option4</Text>
          </TouchableOpacity>
      </View>
    )
  }
}
const Nav = createStackNavigator({
  One : Dash,
  Two:Menu,

});
const AppNav = createAppContainer(Nav);
export default class Dashboard extends React.Component{
  render(){
    return(
      <AppNav />
    )    
  }
}
 