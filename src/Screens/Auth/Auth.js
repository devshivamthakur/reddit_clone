import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { constants } from './Constants'
import { Colors } from '../../Utils/Theme'
import Button from '../../Common/Button/Button'
import { onChangeInputFocus, updatePassword, updateUsername, onChangeShowPassword } from './Redux/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'
import VectorIcon from '../../Common/VectorIcons'
import { showMessage } from 'react-native-flash-message'
import { loginApi } from './Redux/dispatcher'

const Auth = () => {
  const { showPassword,
    usernameFocused,
    passwordFocused, username, password } = useSelector((state) => state.user)

  const dispatch = useDispatch()

  const onChangeUsername = (text) => {
    dispatch(updateUsername(text))

  }

  const onChangePassword = (text) => {
    dispatch(updatePassword(text))

  }

  const onShowPassword = () => {
    dispatch(onChangeShowPassword())

  }


  const onPressLogin = () => {

    if (username.length === 0) {
     showMessage({
        message: constants.Please_enter_username,
        type: "danger",
        duration: 2000
      
     })
      return
    }
    if (password.length === 0) {
      showMessage({
        message: constants.Please_enter_password,
        type: "danger",
        duration: 2000
      })
      return
    }
    
    dispatch(loginApi({ username, password }))


  }


  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.heading}
      >{constants.hi_new_friend} </Text>
      <View
        style={styles.inputContainer}
      >

        <TextInput
          placeholder={constants.username}
          placeholderTextColor={Colors.secondaryTextColor2}
          style={styles.input(usernameFocused)}
          onChangeText={onChangeUsername}
          onFocus={() => dispatch(onChangeInputFocus("username"))}
          onBlur={() => dispatch(onChangeInputFocus(""))}


        />
        <View
          style={styles.passwordContainer}
        >

          <TextInput
            placeholder={constants.password}
            placeholderTextColor={Colors.secondaryTextColor2}
            style={styles.input(passwordFocused)}
            onChangeText={onChangePassword}
            onFocus={() => dispatch(onChangeInputFocus("password"))}
            onBlur={() => dispatch(onChangeInputFocus(""))}
            secureTextEntry={!showPassword}
            maxLength={50}

          />
          <TouchableOpacity
            style={styles.showPasswordBtn}
            onPress={onShowPassword}
            activeOpacity={0.7}
          >
            <VectorIcon
              family={"Ionicons"}
              name={!showPassword ? "eye-outline" : "eye-off-outline"}
              color={Colors.PrimarytextColor}
              size={20}
            />
          </TouchableOpacity>

        </View>

      </View>

      <Button
        title={constants.login}
        buttonStyle={styles.Button}
        textStyle={styles.textStyle}
        onPress={onPressLogin}
      />

    </View>
  )
}

export default Auth

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 40,

  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    padding: 20

  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.PrimarytextColor,
    textAlign: 'center',
    marginTop: 60
  },
  input: (isFocused) => ({
    backgroundColor: Colors.dark50,
    padding: 10,
    borderRadius: 18,
    color: Colors.PrimarytextColor,
    paddingLeft: 15,
    fontSize: 14,
    borderWidth: 1,
    borderColor: isFocused ? Colors.PrimarytextColor : Colors.dark50,
    width: "100%"
  }),
  Button: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: Colors.red,
    marginTop: 100
  },
  passwordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    alignSelf: "center",
    backgroundColor: 'red',
    backgroundColor: Colors.dark50,
    borderRadius: 18,

  },
  showPasswordBtn: {
    position: "absolute",
    right: 10

  }
})
