import { createSlice } from '@reduxjs/toolkit'
import { getUserProfileAPI, loginApi } from './dispatcher'
import { hideProgressDialog, resetToScreen, showProgressDialog } from '../../../Router/NavigationsUtils'
import { ScreenNames } from '../../../Utils/Constants'
import { stat } from 'fs'

const initialState = {
  username: "",
  password:"",
  showPassword: false,
  usernameFocused: false,
  passwordFocused: false,
  userInfo: {}
}

export const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    updateUsername: (state,action) => {
    state.username = action.payload
    },
    updatePassword: (state,action) => {
      state.password = action.payload
    },
    onChangeShowPassword: (state) => {
      state.showPassword = !state.showPassword
    },
    onChangeInputFocus: (state,action) => {
      if(action.payload === "username"){
        state.usernameFocused = true
        state.passwordFocused = false
      }else if (action.payload === "password"){
        state.passwordFocused = true
        state.usernameFocused = false
      }else{
        state.usernameFocused = false
        state.passwordFocused = false
      
      }
      
    },
  
  },
  extraReducers: (builder) => {
    builder.addCase(loginApi.pending, (state, action) => {
      showProgressDialog()
    })
    builder
      .addCase(loginApi.fulfilled, (state, action) => {
        state.username = ""
        state.password = ""
      })
      .addCase(loginApi.rejected, (state, action) => {
        hideProgressDialog()
      })

      .addCase(getUserProfileAPI.pending, (state, action) => {
        showProgressDialog()
      })
      .addCase(getUserProfileAPI.fulfilled, (state, action) => {
        state.userInfo = action.payload
      })
      
  
  }
})

// Action creators are generated for each case reducer function
export const { updateUsername,updatePassword, onChangeInputFocus, onChangeShowPassword} = AuthSlice.actions

export default AuthSlice.reducer