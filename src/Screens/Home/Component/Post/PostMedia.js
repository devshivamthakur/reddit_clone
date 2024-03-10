import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from '../../../../Utils/Theme'
import Video from 'react-native-video'
import convertToProxyURL from 'react-native-video-cache';
import WebView from 'react-native-webview';

const { width, height } = Dimensions.get('window')

const PostMedia = ({
  imageUrl = '',
  media ={},
  is_video = false,
  isCurrentViewPort = false,
  selftext="",
  selftext_html=""
}) => {

  const validateSelfText = () => {
    if(selftext != "" && selftext != null && selftext != undefined && selftext_html ==''){
      return true
    
    }
    return false
  }

  const isContainsLink= (text) => {
    return text.includes("http") || text.includes("https")
  }

  const isImageURL = (url) => {
    if(url == "" || url == null || url == undefined) return false
    return url.includes(".jpg") || url.includes(".png") || url.includes(".jpeg") || url.includes(".gif")
  }

  return (
    <View
      style={styles.container}
    >
      {
        isImageURL(imageUrl) && !is_video ?
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMethod="resize"
            resizeMode="contain"
          />

          : null
      }
      {
        is_video && media.reddit_video != undefined && media.reddit_video != null ?
          <Video
            source={{ uri: convertToProxyURL(media.reddit_video.fallback_url) }}
            style={styles.image}
            controls={false}
            resizeMode="contain"
            repeat={true}
            paused={!isCurrentViewPort}
            bufferConfig={{
              minBufferMs: 15000,
              maxBufferMs: 50000,
              bufferForPlaybackMs: 2500,
              bufferForPlaybackAfterRebufferMs: 5000
            }}

          />
          : null

      }

      {
        validateSelfText() && !isContainsLink(selftext)  ?
        <Text style={styles.selftext}
        
        numberOfLines={4}
        >
          {selftext}
        </Text>
        : null
      }

    </View>
  )
}

export default React.memo(PostMedia)

const styles = StyleSheet.create({
  container: {
    // margin: 10,
    backgroundColor: Colors.darkMedia,
    borderRadius: 14,
    marginTop:14

  },
  image: {
    width: width - 20,
    height: (height / 3 ) < 200 ? 200 : (height / 3),
    borderRadius: 14

  },
  selftext: {
    padding: 10,
    color: Colors.lightGray2,
    fontSize:13
  }
})