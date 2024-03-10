import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { APIEndPoints, RequestMethods } from '../../../Utils/API/APIConstants';
import { serverCall } from '../../../Utils/API/ApiService';

export const geSubredditListAPI = createAsyncThunk(
  'home/getSubredditList',
  async (payload,thunkAPI) => {
    try {
      const response = await serverCall(APIEndPoints.subredditList, RequestMethods.GET)
      if (response.success && response.data && response.data.data && response.data.data.children) {
        return response.data.data.children
      }
      else {
        return thunkAPI.rejectWithValue(JSON.stringify(response))
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(JSON.stringify(error))
    }
   
  }
);

export const postListAPI = createAsyncThunk(
  'home/getPostList',
  async (payload,thunkAPI) => {
    try {
      const after = thunkAPI.getState().home.after
      const Api = APIEndPoints.postList+`?limit=10&after=${after}`
      const response = await serverCall(Api, RequestMethods.GET)
      if (response.success && response.data && response.data.data && response.data.data.children && response.data.data.children.length > 0) {
        return [response.data.data.children,response.data.data.after,after]
      }
      else {
        return thunkAPI.rejectWithValue(JSON.stringify(response))
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(JSON.stringify(error))
    }
   
  }
);