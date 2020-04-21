import * as React from 'react';
import {Image,TouchableOpacity,KeyboardAvoidingView,TouchableHighlight,TextInput,FlatView,ScrollView,Button,Text,View,StyleSheet,Picker,
} from 'react-native';

//import { Ionicons } from 'react-native-elements';
//import { Ionicons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';

import { SliderBox } from "react-native-image-slider-box";
export default class Test extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", // Network image
        //require('./assets/images/girl.jpg'),          // Local image
      ]
    };
  }
  render(){
	  return(
		<SliderBox images={this.state.images} />
	  )
  }
}