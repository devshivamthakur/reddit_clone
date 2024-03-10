import { View, Text, FlatList,TouchableOpacity,Image, StyleSheet } from 'react-native'
import React, {useEffect} from 'react'
import { Colors } from '../../../../Utils/Theme'

import {useDispatch, useSelector} from "react-redux"
import { geSubredditListAPI } from '../../Redux/dispatcher'
import { useNavigation } from '@react-navigation/native'
import { ScreenNames } from '../../../../Utils/Constants'
import { resetSubredditPosts } from '../../Redux/HomeSlice'
  
const Subreddit = () => {
  const subredditList = useSelector(state => state.home.subredditList)
  const navigation = useNavigation()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(geSubredditListAPI())
  }, [])
  
  const onSubredditPress = (subredditName) =>{
    dispatch(resetSubredditPosts())
    navigation.navigate(ScreenNames.SUBREDDITPOSTS,{subredditName})
  }
   
  const renderItem = ({item,index}) =>{
    return(
        <TouchableOpacity
        style={styles.imageContainer}
        activeOpacity={0.6}
        onPress={()=>onSubredditPress(item.data.display_name_prefixed)}
        >
            <Image
            source={{uri:item.data.community_icon.split("?")[0]}}
            style={styles.image}
            />
            
        </TouchableOpacity>
    )
  } 

  return (
    <View
    style={styles.subreditContainer}
    >
      <FlatList
      data={subredditList}
      renderItem={renderItem}
      keyExtractor={(_,index)=>`subreddit-item-${index}`}
      horizontal
      showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Subreddit

const styles = StyleSheet.create({
    image:{
        width:40,
        height:40,
        borderRadius:40/2,
    },
    imageContainer:{
        width:45,
        height:45,
    },
    subreditContainer:{
        borderBottomWidth:0.7,
        borderBottomColor: Colors.lightGray2,
        paddingHorizontal:10,
        marginTop:10
    }
})