import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { serverCall } from '../../../Utils/API/ApiService'
import { APIEndPoints, BASIC_AUTH, RequestMethods } from '../../../Utils/API/APIConstants'
import { showMessage } from 'react-native-flash-message'
import qs from "query-string"
import { hideProgressDialog, navigateToScreens, resetToScreen, showProgressDialog } from '../../../Router/NavigationsUtils'
import { STORAGE_KEY, ScreenNames } from '../../../Utils/Constants'
import { json } from 'stream/consumers'
import { Base64, SaveDataIntoStorage } from '../../../Utils/Utils'

export const loginApi = createAsyncThunk(
    'auth/login',
    async (payload, thunkAPI) => {
        try {

            let data = qs.stringify({
                'grant_type': 'password',
                'username': payload.username,
                'password': payload.password
            });

            var credentials = Base64.btoa(BASIC_AUTH.username + ':' + BASIC_AUTH.password);
            const additonalHeader = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization':'Basic ' + credentials
            }
            const response = await serverCall(APIEndPoints.LOGIN, RequestMethods.POST, data, additonalHeader)
            hideProgressDialog()
            if (response.success && response.data &&  response.data.access_token ) {
                await SaveDataIntoStorage(STORAGE_KEY.ACCESS_TOKEN,response.data.access_token)
                thunkAPI.dispatch(getUserProfileAPI())
                return response.data

            }
            else {
                showMessage({
                    message: response.message ?? '',
                    type: "danger",
                    duration: 2000

                })
                return thunkAPI.rejectWithValue(JSON.stringify(response))
            }

        } catch (error) {
            hideProgressDialog()
            return thunkAPI.rejectWithValue(JSON.stringify(error))
        }
    }
)

export const getUserProfileAPI = createAsyncThunk(
    'auth/getUserProfile',
    async (payload, thunkAPI) => {
        try {
            const response = await serverCall(APIEndPoints.userProfile, RequestMethods.GET)
            hideProgressDialog()
            if (response.success && response.data) {
              resetToScreen(ScreenNames.HOME)

                return response.data
            }
            else {
                showMessage({
                    message: response.message ?? '',
                    type: "danger",
                    duration: 2000

                })
                return thunkAPI.rejectWithValue(JSON.stringify(response))
            }

        } catch (error) {
            hideProgressDialog()
            return thunkAPI.rejectWithValue(JSON.stringify(error))
        }
    }
)

