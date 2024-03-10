import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../../Utils/Theme'
import { assert } from 'console'
import { getDataFromStorage } from '../../Utils/Utils'
import { STORAGE_KEY, ScreenNames } from '../../Utils/Constants'
import { resetToScreen } from '../../Router/NavigationsUtils'
import { useDispatch } from 'react-redux'
import { getUserProfileAPI } from '../Auth/Redux/dispatcher'
const Splash = () => {
    const dispatch = useDispatch()

     const checkAuthStatus = async()=>{
        const token = await getDataFromStorage(STORAGE_KEY.ACCESS_TOKEN)
        if(token) {
            dispatch(getUserProfileAPI())
            return
        }else{
            resetToScreen(ScreenNames.AUTH)

        }

     }

     useEffect(()=>{
        const Timeout = setTimeout(() => {
            checkAuthStatus()
        }, 3000);

        return()=>{
            clearTimeout(Timeout)
        }
     },[])

    return (
        <View

            style={styles.container}


        >
            <Text
                style={{ color: Colors.PrimarytextColor }}
            >Splash</Text>  
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary
    }
})