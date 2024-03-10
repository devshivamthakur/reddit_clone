import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RequestMethods } from '../../../Utils/API/APIConstants';
import { serverCall } from '../../../Utils/API/ApiService';


export const getSubredditPostsAPI = createAsyncThunk(
    'subredditPosts/getSubredditPosts',
    async (payload, thunkAPI) => {
        try {
            const after = thunkAPI.getState().home.subredditPostsAfter
            const APIEndPoints = `${payload.subredditName}/new?limit=10&after=${after}&sr_detail=true`
            const response = await serverCall(APIEndPoints, RequestMethods.GET)
            if (response.success && response.data && response.data.data && response.data.data.children) {
                if (response.success && response.data && response.data.data && response.data.data.children && response.data.data.children.length > 0) {
                    return [response.data.data.children, response.data.data.after, after]
                }
            }
            else {
                return thunkAPI.rejectWithValue(JSON.stringify(response))
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(JSON.stringify(error))
        }

    }
);


