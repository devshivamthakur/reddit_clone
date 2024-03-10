import { View, Text, StyleSheet, FlatList } from 'react-native'
import React ,{useEffect} from 'react'
import { Colors } from '../../Utils/Theme'
import Subreddit from './Component/Subreddit/Subreddit'
import HomeHeader from './Component/HomeHeader/HomeHeader'
import Post from './Component/Post/Post'
import { useSelector, useDispatch} from 'react-redux'
import { postListAPI } from './Redux/dispatcher'
const Home = () => {
  const {
    PostList,loading
  } = useSelector(state => state.home)
  const [visibleId, setVisibleId] = React.useState(null)
  const dispatch = useDispatch()

  const item = [{
    "approved_at_utc": null,
    "subreddit": "mildlyinfuriating",
    "selftext": "",
    "author_fullname": "t2_1kkuc0sp",
    "saved": false,
    "mod_reason_title": null,
    "gilded": 0,
    "clicked": false,
    "title": "My kid\u2019s teacher insists these two words are placed incorrectly and now her grade dropped a whole level.",
    "link_flair_richtext": [

    ],
    "subreddit_name_prefixed": "r/mildlyinfuriating",
    "hidden": false,
    "pwls": 6,
    "link_flair_css_class": null,
    "downs": 0,
    "thumbnail_height": 140,
    "top_awarded_type": null,
    "hide_score": false,
    "name": "t3_1b9ysim",
    "quarantine": false,
    "link_flair_text_color": "dark",
    "upvote_ratio": 0.92,
    "author_flair_background_color": null,
    "subreddit_type": "public",
    "ups": 25736,
    "total_awards_received": 0,
    "media_embed": {

    },
    "thumbnail_width": 140,
    "author_flair_template_id": null,
    "is_original_content": false,
    "user_reports": [

    ],
    "secure_media": null,
    "is_reddit_media_domain": true,
    "is_meta": false,
    "category": null,
    "secure_media_embed": {

    },
    "link_flair_text": null,
    "can_mod_post": false,
    "score": 25736,
    "approved_by": null,
    "is_created_from_ads_ui": false,
    "author_premium": false,
    "thumbnail": "https://b.thumbs.redditmedia.com/Q50-yLSDk6hiMQHOewuQ2LWCd69A49HhyiedEbDCCSk.jpg",
    "edited": false,
    "author_flair_css_class": null,
    "author_flair_richtext": [

    ],
    "gildings": {

    },
    "post_hint": "image",
    "content_categories": null,
    "is_self": false,
    "mod_note": null,
    "created": 1709930830.0,
    "link_flair_type": "text",
    "wls": 6,
    "removed_by_category": null,
    "banned_by": null,
    "author_flair_type": "text",
    "domain": "i.redd.it",
    "allow_live_comments": true,
    "selftext_html": null,
    "likes": null,
    "suggested_sort": null,
    "banned_at_utc": null,
    "url_overridden_by_dest": "https://i.redd.it/t5r8kzi9a6nc1.jpeg",
    "view_count": null,
    "archived": false,
    "no_follow": false,
    "is_crosspostable": false,
    "pinned": false,
    "over_18": false,
    "preview": {
      "images": [
        {
          "source": {
            "url": "https://preview.redd.it/t5r8kzi9a6nc1.jpeg?auto=webp&amp;s=6b68290e7333b8e40b10dba7fcbfb37357233549",
            "width": 3024,
            "height": 4032
          },
          "resolutions": [
            {
              "url": "https://preview.redd.it/t5r8kzi9a6nc1.jpeg?width=108&amp;crop=smart&amp;auto=webp&amp;s=e4ec2a549585e0c203b88d954a26256a04ecdfa4",
              "width": 108,
              "height": 144
            },
            {
              "url": "https://preview.redd.it/t5r8kzi9a6nc1.jpeg?width=216&amp;crop=smart&amp;auto=webp&amp;s=a92d3098199a761f851fb78b65e180f0c67d8667",
              "width": 216,
              "height": 288
            },
            {
              "url": "https://preview.redd.it/t5r8kzi9a6nc1.jpeg?width=320&amp;crop=smart&amp;auto=webp&amp;s=b154e5b6f0626b63c4218cf0a7cfc2d6bfdb6d09",
              "width": 320,
              "height": 426
            },
            {
              "url": "https://preview.redd.it/t5r8kzi9a6nc1.jpeg?width=640&amp;crop=smart&amp;auto=webp&amp;s=0c0605016f5db034ccf47c3fa6ef882fb8755c76",
              "width": 640,
              "height": 853
            },
            {
              "url": "https://preview.redd.it/t5r8kzi9a6nc1.jpeg?width=960&amp;crop=smart&amp;auto=webp&amp;s=13387fd018842c2c11c04b4e874188cca730468f",
              "width": 960,
              "height": 1280
            },
            {
              "url": "https://preview.redd.it/t5r8kzi9a6nc1.jpeg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=78440ef3ed28e7447fd66273639258cba799c325",
              "width": 1080,
              "height": 1440
            }
          ],
          "variants": {

          },
          "id": "35oMFjFHzIztIfWbXFaH1Rd-TZMWBrPs7EQXgYiTF0Y"
        }
      ],
      "enabled": true
    },
    "all_awardings": [

    ],
    "awarders": [

    ],
    "media_only": false,
    "can_gild": false,
    "spoiler": false,
    "locked": false,
    "author_flair_text": null,
    "treatment_tags": [

    ],
    "visited": false,
    "removed_by": null,
    "num_reports": null,
    "distinguished": null,
    "subreddit_id": "t5_2ubgg",
    "author_is_blocked": false,
    "mod_reason_by": null,
    "removal_reason": null,
    "link_flair_background_color": "",
    "id": "1b9ysim",
    "is_robot_indexable": true,
    "report_reasons": null,
    "author": "LuLuWanda",
    "discussion_type": null,
    "num_comments": 2991,
    "send_replies": true,
    "whitelist_status": "all_ads",
    "contest_mode": false,
    "mod_reports": [

    ],
    "author_patreon_flair": false,
    "author_flair_text_color": null,
    "permalink": "/r/mildlyinfuriating/comments/1b9ysim/my_kids_teacher_insists_these_two_words_are/",
    "parent_whitelist_status": "all_ads",
    "stickied": false,
    "url": "https://i.redd.it/wxd2jotdoanc1.jpeg",
    "subreddit_subscribers": 7153101,
    "created_utc": 1709930830.0,
    "num_crossposts": 0,
    "media": {
      "reddit_video": {
        "bitrate_kbps": 1200,
        "fallback_url": "https://v.redd.it/hn72mcubl9nc1/DASH_480.mp4?source=fallback",
        "has_audio": true,
        "height": 854,
        "width": 480,
        "scrubber_media_url": "https://v.redd.it/hn72mcubl9nc1/DASH_96.mp4",
        "dash_url": "https://v.redd.it/hn72mcubl9nc1/DASHPlaylist.mpd?a=1712591391%2CN2NjNzU3Zjk0OTk3MWI0M2MyZDcxZGU0YzFmZjljNDBkMmM4MjU1MTdlMWM4M2VjZWQyNGU3ZmFmNDliMDMyMA%3D%3D&amp;v=1&amp;f=sd",
        "duration": 60,
        "hls_url": "https://v.redd.it/hn72mcubl9nc1/HLSPlaylist.m3u8?a=1712591391%2COTNhZDFjZDJmOWI4NzQxN2RhMTZhMGZjYzgyYTRmYjE3NmE1YWRhMjdmZDI5ZWFlMzIzMGYwZjljNWZkMTZkOA%3D%3D&amp;v=1&amp;f=sd",
        "is_gif": false,
        "transcoding_status": "completed"
      }
    },
    "is_video": true
  }]

  const Header=()=>{
    return(
      <View>
        <HomeHeader />
        <Subreddit />
      </View>
    )
  }
  useEffect(()=>{
    getPosts()
  },[])

  const getPosts=()=>{
    dispatch(postListAPI())
  }
  
  const onViewableItemsChanged = React.useRef(({ viewableItems, changed }) => {
    if(viewableItems.length > 0 && viewableItems[0].item && viewableItems[0].item.data.id != visibleId){
      setVisibleId(viewableItems[0].item.data.id)
    }

  })

  return (
    <View
      style={styles.container}
    >

      <FlatList
        data={PostList}
        renderItem={({ item }) => <Post item={item} 
        isCurrentViewPort={item.data.id == visibleId}
        />}
        keyExtractor={(_, index) => `post-item-${index}`}
        ListHeaderComponent={Header()}
        onEndReachedThreshold={0.6}
        onEndReached={() => {
          if(!loading){
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

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,

  }
})