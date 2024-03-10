import  FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  IonIcons from 'react-native-vector-icons/Ionicons';
import  AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import React from 'react';


const iconFamilies = {
  FontAwesome: FontAwesomeIcons,
  MaterialIcons: MaterialIcons,
  Ionicons: IonIcons,
  AntDesign: AntDesign,
  Fontisto:Fontisto,
  FontAwesome5:FontAwesome5,
  Entypo:Entypo,
  MaterialCommunityIcons:MaterialCommunityIcons,
  Feather:Feather,
  EvilIcons:EvilIcons,
  Octicons:Octicons
};

const VectorIcon = ({ name, family, size = 30, color = '#000' }) => {
  const IconFamily = iconFamilies[family];
  if(iconFamilies){

    return <IconFamily size={size} color={color} name={name}
   
    />;
  }
  return null;
};

export default VectorIcon;
