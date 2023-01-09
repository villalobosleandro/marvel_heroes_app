import React from 'react';
import {
    Dimensions, 
    Image, 
    Text, 
    TouchableOpacity, 
    View, 
    StyleSheet
} from "react-native";

const windowWidth = Dimensions.get('window').width;

export const CardCharacter = props => {
    const { item, navigation } = props;

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('HeroeDetail', {id: item.id})}
            style={styles.cardContainer}
        >
            <View style={styles.containerLeft}>
                <Image
                    style={styles.imageStyles}
                    source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}}
                    resizeMode={"stretch"}
                />
            </View>

            <View
                style={styles.containerRight}
            >
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.subtitle}>Numero de apariciones:</Text>
                <Text style={{color: Constant.colors.whiteColor}}>{item.comics.available}</Text>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 15,
        borderRadius: 15,
        height: 140,
        width: windowWidth - 30,
        flexDirection: 'row'
    },
    containerLeft: {
        flex: 1,
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
        alignItems: 'center'
    },
    imageStyles: {
        height: 140,
        width: '100%',
        overflow: "hidden",
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    containerRight: {
        flex: 2,
        borderTopEndRadius: 15,
        borderBottomEndRadius: 15,
        backgroundColor: "rgba(115,115,115,0.55)",
        paddingVertical: 5,
        paddingHorizontal: 8
    },
    name: {
        color: Constant.colors.whiteColor,
        fontSize: 18,
        fontWeight: 'bold'
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    circle: {
        height: 10,
        width: 10,
        borderRadius: 20
    },
    subtitle: {
        color: Constant.colors.whiteColor,
        paddingTop: 10
    }
});
