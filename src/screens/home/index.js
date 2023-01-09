import React, { useState, useEffect } from 'react'
import { 
    View, 
    Text,
    FlatList,
    StyleSheet,
    ActivityIndicator,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'

import { CardCharacter } from './../../components/CardCharacter'
import { ListEmpty } from './../../components/ListEmpty'

export const HomeScreen = props => {
    const { navigation } = props
    const [heroes, setHeroes] = useState([])
    const [loading, setLoading] = useState(true)
    const [heroesCount, setHeroesCount] = useState('')

    useEffect(() => {
        getHeroes()
    }, [])

    const getHeroes = async () => {
        fetch(`${Constant.baseUrl}${Constant.listHeroes}${Constant.apiKey}`)
            .then(res => res.json())
            .then((data) => {
                setHeroes(data.data.results)
                setHeroesCount(data.data.total)
                setLoading(false)
            })
            .catch((error) => {
                setLoading(false)
                ToastAndroid.show("Ocurrió un error, intente mas tarde!", ToastAndroid.LONG);
              });
    }

    const renderSeparator = () => (
        <View style={styles.separator10}/>
    );

    const _loadMoreData = async () => {
        const newUrl = `${Constant.baseUrl}${Constant.listHeroes}${Constant.apiKey}&limit=${heroes.length + 20}`
        fetch(newUrl)
            .then(response => response.json())
            .then(data => {
                setHeroes(data.data.results);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const loadMoreDataComponent = () => {
        return (
            <TouchableOpacity
                onPress={() => _loadMoreData()}
                style={styles.buttonLoadMore}
            >
                <Text style={styles.textLoadMore}>Load More...</Text>
            </TouchableOpacity>
        );
    }

    if(loading) {
        return(
            <View style={styles.activityStyles}>
                <ActivityIndicator size="large" color={Constant.colors.whiteColor}/>
            </View>
        );
    }


    return (
        <SafeAreaView
            style={styles.container}
        >
            <FlatList
                data={heroes}
                keyExtractor={item => item.id}
                renderItem={({item}) =>
                    <CardCharacter
                        item={item}
                        navigation={navigation}
                    />
                }
                ListEmptyComponent={ListEmpty}
                ItemSeparatorComponent={renderSeparator}
                contentContainerStyle={{paddingVertical: 16}}
                ListFooterComponentStyle={{
                    flex: 1,
                    alignItems: 'center',
                    padding: 10
                }}
                ListFooterComponent={heroesCount > heroes.length
                    ? loadMoreDataComponent
                    : null
                }
                refreshing
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    separator10: {
        height: 10
    },
    emptyList: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textEmpty: {
        color: Constant.colors.whiteColor,
        fontSize: 30,
        fontWeight: 'bold'
    },
    activityStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Constant.colors.backgroundColorPrimary
    },
    container: {
        backgroundColor: Constant.colors.backgroundColorPrimary,
        flex: 1
    },
    imageEmpty: {
        height: 400,
        width: 300
   },
    textLoadMore: {
        color: Constant.colors.whiteColor,
        fontWeight: 'bold'
    },
    buttonLoadMore: {
        width: 100,
        height: 60,
        backgroundColor: "rgba(115,115,115,0.55)",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
   }
})