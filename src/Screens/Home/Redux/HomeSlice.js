import { createSlice } from '@reduxjs/toolkit'
import { geSubredditListAPI, postListAPI, } from './dispatcher'
import { getSubredditPostsAPI } from '../../SubredditPosts/Redux/dispatcher'
import { logoutApi } from '../../Auth/Redux/dispatcher'

const initialState = {
subredditList:[],
PostList:[],
loading:false,
after:'',
subredditPostsAfter:'',
subredditPosts:[]
}

export const HomeSlice = createSlice({
  name: 'HomeSlice',
  initialState,
  reducers: {

    resetSubredditPosts: (state) => {
      state.subredditPosts = []
      state.subredditPostsAfter = ''
    }
 
  
  },
  extraReducers: (builder) => {

    builder
      .addCase(geSubredditListAPI.fulfilled, (state, action) => {
        state.subredditList = action.payload
      })
      .addCase(postListAPI.fulfilled, (state, action) => {
        if(action.payload[2].length == 0){
          state.PostList = [...action.payload[0]]
        }else{
          state.PostList = [...state.PostList,...action.payload[0]]
        }
        state.after = action.payload[1]
        state.loading = false
      }
      )
      .addCase(postListAPI.pending, (state, action) => {
        state.loading = true
      })
      .addCase(postListAPI.rejected, (state, action) => {
        state.loading = false
      })

      .addCase(getSubredditPostsAPI.fulfilled, (state, action) => {
        if(action.payload[2].length == 0){
          state.subredditPosts = [...action.payload[0]]
        }else{
          state.subredditPosts = [...state.subredditPosts,...action.payload[0]]
        }
        state.subredditPostsAfter = action.payload[1]
        state.loading = false
      }
      )
      .addCase(getSubredditPostsAPI.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getSubredditPostsAPI.rejected, (state, action) => {
        state.loading = false
      })



    
  
      

  
  }
})

export const { resetSubredditPosts } = HomeSlice.actions


export default HomeSlice.reducer