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
//public key
//1c12e55cbca49768e103211839c6b21e

//private key
//c673ee4c61ef294f2480e8b9de51db252330e473

//ts = 1c673ee4c61ef294f2480e8b9de51db252330e4731c12e55cbca49768e103211839c6b21e

//all = 

export const HomeScreen = props => {
    const { navigation } = props
    const [heroes, setHeroes] = useState([])
    const [loading, setLoading] = useState(true)
    const [heroesCount, setHeroesCount] = useState('')
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=1c12e55cbca49768e103211839c6b21e&hash=3a28f0c2d272db304c756d67b8f9bdf8`

    useEffect(() => {
        getHeroes()
    }, [])

    const getHeroes = async () => {
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setHeroes(data.data.results)
                setHeroesCount(data.data.total)
                setLoading(false)
            })
    }

    const renderSeparator = () => (
        <View style={styles.separator10}/>
    );

    const ListEmpty = () => (
        <View style={styles.emptyList}>
            <Image
                style={styles.imageEmpty}
                // source={Constant.images.empty}
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsI1LNctDqWA1iEu24tUcfbiWZKqabrF7moQ&usqp=CAU'}}
            />
            <Text style={styles.textEmpty}>The list is empty</Text>
        </View>
    );

    const _loadMoreData = async () => {
        
        const newUrl = `${url}&limit=${heroes.length + 20}`
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
                <ActivityIndicator size="large" color={'#fff'}/>
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
                // onEndReached={loadMoreData}
                // onEndReachedThreshold={0.5}
                // onScrollBeginDrag={() => {
                //     stopFetchMore = false;
                // }}
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
       color: '$fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    activityStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#2A2E43'
    },
    container: {
        backgroundColor: '#2A2E43',
        flex: 1
    },
    imageEmpty: {
        height: 400,
        width: 300
   },
    textLoadMore: {
        color: '#fff',
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