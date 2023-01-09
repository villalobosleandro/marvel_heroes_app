import React from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'

export const ListEmpty = () => {
    return (
        <View style={styles.emptyList}>
            <Image
                style={styles.imageEmpty}
                source={Constant.images.empty}
            />
            <Text style={styles.textEmpty}>La lista esta vacia</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    emptyList: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textEmpty: {
       color: '$fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    imageEmpty: {
        height: 400,
        width: 300
   },
})