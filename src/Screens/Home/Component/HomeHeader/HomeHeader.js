import { View, Text ,Image, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import VectorIcon from '../../../../Common/VectorIcons'
import { Colors } from '../../../../Utils/Theme'
import { Constants } from '../Constants'
import { removeDataFromStorage } from '../../../../Utils/Utils'
import { STORAGE_KEY, ScreenNames } from '../../../../Utils/Constants'
import { resetToScreen } from '../../../../Router/NavigationsUtils'

const HomeHeader = () => {
  const userInfo = useSelector(state => state.user.userInfo)
  
  const logout = () => {
    Alert.alert(Constants.LOGOUT, Constants.LOGOUT_MESSAGE,[
      {
        text:Constants.CANCEL,
        onPress:()=>{}
      },
      {
        text:Constants.LOGOUT,
        onPress:()=>{
          removeDataFromStorage(STORAGE_KEY.ACCESS_TOKEN)
          resetToScreen(ScreenNames.AUTH)
        }
      }
    ])
    

  }
  return (
    <View
    style={styles.container}
    >
      <View
      style={styles.image}
      >
     {userInfo.icon_img && <Image
      source={{uri:userInfo?.icon_img}}
      style={styles.image}
      />}
      <View
      style={styles.dot}
      />

      </View>

      <TouchableOpacity
      style={styles.logout}
      onPress={logout}
      >
        <VectorIcon
        family={'AntDesign'}
        name={'logout'}
        size={25}
        color={'white'}
        />
      </TouchableOpacity>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth:0.6,
    borderBottomColor:Colors.lightGray

  },
  image:{
    height:35,
    width:35,
    borderRadius:20
  },
  logout:{
    padding:5

  },
  dot:{
    height:8,
    width:8,
    backgroundColor:Colors.GREEN,
    borderRadius:10,
    position:'absolute',
    bottom:2,
    right:1,
    overflow:'hidden',
  }

})