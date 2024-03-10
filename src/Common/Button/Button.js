import { ActivityIndicator, Text, TouchableOpacity, StyleSheet, TextStyle, ViewStyle, View } from 'react-native'
import React, { ReactNode } from 'react'
import VectorIcon, { IconProps } from '../VectorIcons'
import { Colors } from '../../Utils/Theme'

const Button = ({
    title = "",
    textStyle = {},
    buttonStyle = {},
    onPress,
    isVectorIcon = false,
    vectorIconFamily = 'AntDesign',
    iconName = "Button",
    iconColor = Colors.PrimarytextColor,
    iconSize = 20,
    isVectorIconRight = false,
    loading = false,
    showDotIndicator = false,
    disabled

}
) => {
    return (
        <TouchableOpacity
            style={[Style.btn, buttonStyle, loading ? { opacity: 0.5, flexDirection: 'row', alignItems: "center", justifyContent: 'center' } : {}]}
            activeOpacity={0.7}
            onPress={() => {
                if (onPress) {
                    onPress()
                }

            }}
            disabled={loading || disabled}
        >
            {
                !isVectorIconRight && isVectorIcon ?
                    <VectorIcon
                        family={vectorIconFamily}
                        name={iconName}
                        color={iconColor}
                        size={iconSize}
                    />
                    : null
            }

            {loading ? (
                <ActivityIndicator color={iconColor} size="large" style={{ marginRight: 5 }} />
            ) : null}
            {title.length > 0 ? <Text
                style={[Style.textStyle, textStyle]}
            >
                {title}
            </Text> : null}

            {
                isVectorIconRight ?
                    <VectorIcon
                        family={vectorIconFamily}
                        name={iconName}
                        color={iconColor}
                        size={iconSize}
                    />
                    : null
            }

            {
                showDotIndicator ? <View style={Style.dot} /> : null
            }
        </TouchableOpacity>
    )
}

export default React.memo(Button)
const Style = StyleSheet.create({
    btn: {
        alignSelf: "center",
        padding: 13,
        backgroundColor: Colors.buttonBackground,
        borderRadius: 10,
        marginTop: 28
    },
    textStyle: {
        alignSelf: "center",
        color: Colors.PrimarytextColor,
        fontSize: 14,
        fontWeight: "500"

    },
    dot: {
        backgroundColor: Colors.dotColor,
        width: 8,
        height: 8,
        borderRadius: 4,
        position: "absolute",
        right: 10,
        top: 15

    }
})