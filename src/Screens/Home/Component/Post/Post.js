import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PostHeader from './PostHeader'
import moment from 'moment'
import PostMedia from './PostMedia'
import { Colors } from '../../../../Utils/Theme'

const Post = (
  {
    item,
    isCurrentViewPort = false
  }
) => {

  const postItem = item.data

  return (
    <View
      style={styles.container}
    >
      <PostHeader
        name={postItem.subreddit_name_prefixed}
        time={moment(postItem.created_utc * 1000).fromNow()}
        title={postItem.title}
      />
      {((postItem.url != '' && postItem.url != null) || postItem.is_video) && <PostMedia
        imageUrl={postItem.url}
        media={postItem.media}
        is_video={postItem.is_video}
        isCurrentViewPort={isCurrentViewPort}
        selftext={postItem.selftext}
        selftext_html={postItem.selftext_html}
      />}
    </View>
  )
}

export default React.memo(Post)

const styles = StyleSheet.create({

  container: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.SecondaryTextColor,
    borderStyle: 'dashed',
    padding: 13
  }

})