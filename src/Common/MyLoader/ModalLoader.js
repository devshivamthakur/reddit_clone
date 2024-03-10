import { View, Text, BackHandler } from 'react-native'
import React,{useEffect} from 'react'
import { MyLoaderStyle } from './MyLoader.Style'
import Lottie from 'lottie-react-native';
import { lottieFiles } from '../../Utils/Theme';


const ModalLoader = () => {

  React.useEffect(() => {
    const backAction = () => {
     return false
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);
  
  return (

        <View
          style={MyLoaderStyle.Modalcontainer}
        >


          
            <Lottie source={lottieFiles.loading} autoPlay loop
              style={MyLoaderStyle.lottieView}
              resizeMode='contain'
              colorFilters={[
                {
                  keypath: "button",
                  color: "#F00000"
                }
              ]}


              autoSize
            />
          


        </View>

  )
}

export default ModalLoader