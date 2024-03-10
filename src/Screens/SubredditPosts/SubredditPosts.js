import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../Utils/Theme'
import Post from '../Home/Component/Post/Post'
import { getSubredditPostsAPI } from './Redux/dispatcher'
import { useSelector, useDispatch } from 'react-redux'

const SubredditPosts = (props) => {

  const subredditName = props.route.params.subredditName
  const {
    subredditPosts, loading
  } = useSelector(state => state.home)
  const [visibleId, setVisibleId] = React.useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    props.navigation.setOptions({ title: subredditName + ' Posts' })
    getPosts()

  }, [])

  const getPosts = () => {
    dispatch(getSubredditPostsAPI({ subredditName: subredditName }))
 
  }

  const onViewableItemsChanged = React.useRef(({ viewableItems, changed }) => {
    if (viewableItems.length > 0 && viewableItems[0].item && viewableItems[0].item.data.id != visibleId){
      setVisibleId(viewableItems[0].item.data.id)

    }

  })

  return (
    <View
      style={styles.container}
    >
      <FlatList
        data={subredditPosts}
        renderItem={({ item }) => <Post item={item}
          isCurrentViewPort={item.data.id == visibleId}
        />}
        keyExtractor={(_, index) => `subreddit-post-item-${index}`}
        onEndReachedThreshold={0.6}
        onEndReached={() => {
          if (!loading) {
            getPosts()
          }

        }}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50
        }}
      />
    </View>
  )
}

export default SubredditPosts

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary
  }
})