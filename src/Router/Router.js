import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNames } from '../Utils/Constants';
import Auth from '../Screens/Auth/Auth';
import ModalLoader from '../Common/MyLoader/ModalLoader';
import { Colors } from '../Utils/Theme';
import { NavigationRef } from './NavigationsUtils';
import Splash from '../Screens/Splash/Splash';
import Home from '../Screens/Home/Home';
import SubredditPosts from '../Screens/SubredditPosts/SubredditPosts';

const Stack = createNativeStackNavigator()
const Router = () => {
  return (
    <NavigationContainer
    ref={NavigationRef}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}

        initialRouteName={ScreenNames.SPLASH}
      >
        <Stack.Screen name={ScreenNames.SPLASH} component={Splash} />
        <Stack.Screen name={ScreenNames.AUTH} component={Auth} />
        <Stack.Screen name={ScreenNames.HOME} component={Home} />
        <Stack.Screen name={ScreenNames.SUBREDDITPOSTS} component={SubredditPosts}
        
        options={{
          headerShown:true,
          headerStyle:{
            backgroundColor:Colors.primary
          },
          headerTintColor:Colors.PrimarytextColor,
          headerTitleStyle:{
            color:Colors.PrimarytextColor
          },

        }}
        />



        <Stack.Group screenOptions={{

          presentation: 'transparentModal',
          contentStyle: { backgroundColor: Colors.transparent }

        }}>
          <Stack.Screen name={ScreenNames.PROGRESSDIALOG} component={ModalLoader} />

        </Stack.Group>



      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router