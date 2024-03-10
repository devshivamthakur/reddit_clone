import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/Theme";


export const MyLoaderStyle = StyleSheet.create({
    container: {
        alignSelf: "center",
        alignItems: "center",
        height: '30%',
        justifyContent: "center"

    },
    Modalcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.transparent,

    },

    Modalbg: {
        position: "absolute",
        backgroundColor: Colors.transparent,
        width: "100%",
        height: "100%"

    },
    lottieView:{
        width: "50%",
        height: "50%",
        alignSelf: "center",
        marginTop:"-10%"

    }
})