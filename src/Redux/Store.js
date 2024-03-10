import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from '../Screens/Auth/Redux/AuthSlice'
import HomeSlice from '../Screens/Home/Redux/HomeSlice'

export const store = configureStore({
  reducer: {
    user:AuthSlice,
    home:HomeSlice
  },
})