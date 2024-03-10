import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../../../Utils/Theme'

const PostHeader = ({
    name,
    time,
    title
}) => {
    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.headerRow}
            >
                <Text
                    style={styles.name}
                >{name}</Text>
                <Text
                    style={styles.time}
                >  {time}</Text>
            </View>
            {(title != undefined && title != "" && title != null) && <Text
                style={styles.title}
            >{title}</Text>}

        </View>
    )
}

export default React.memo(PostHeader)

const styles = StyleSheet.create({

    container: {
    },
    headerRow: {
        flexDirection: 'row',
    },
    name: {
        fontSize: 14,
        fontWeight: '400',
        color: Colors.PrimarytextColor,
        includeFontPadding: false,
        opacity: 0.8

    },
    time: {
        fontSize: 12,
        color: Colors.SecondaryTextColor,
        includeFontPadding: false,
        marginLeft: 5,
        fontWeight: "400",
        textAlignVertical: "center"


    },
    title: {
        fontSize: 15,
        color: Colors.PrimarytextColor,
        marginTop: 12,
        fontWeight: '600',
        includeFontPadding: false

    }

})