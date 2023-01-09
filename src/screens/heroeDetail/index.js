import React, { useState, useEffect } from 'react'
import { 
    View, 
    Text,
    ActivityIndicator,
    StyleSheet,
    ToastAndroid,
    SafeAreaView,
    ImageBackground,
    FlatList
} from 'react-native'
import { ComicComponent } from './../../components/ComicComponent'
import { ListEmpty } from './../../components/ListEmpty'

export const HeroeDetail = ({ route }) => {
    const { id } = route.params;
    const [loading, setLoading] = useState(true)
    const [heroeData, setHeroeData] = useState([])
    const [loadingDetail, setLoadingDetail] = useState(true)
    const [comics, setComics] = useState([])
    const url = `${Constant.baseUrl}${Constant.listHeroes}/${id}${Constant.apiKey}`
    const urlDetailComics = `${Constant.baseUrl}${Constant.listHeroes}/${id}/comics${Constant.apiKey}`

    useEffect(() => {
        getHeroeDetail()
        getDetailOfComics()
    }, [])

    const getHeroeDetail = () => {
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            setHeroeData(data.data.results[0])
            setLoading(false)
        })
        .catch((error) => {
            setLoading(false)
            ToastAndroid.show("Ocurrió un error, intente mas tarde!", ToastAndroid.LONG);
          });
    }

    const getDetailOfComics = () => {
        fetch(urlDetailComics)
        .then(res => res.json())
        .then((data) => {
            setComics(data.data.results)
            setLoadingDetail(false)
        })
        .catch((error) => {
            console.log(error)
            setLoadingDetail(false)
            ToastAndroid.show("Ocurrió un error, intente mas tarde!", ToastAndroid.LONG);
          });
    }

    const renderSeparator = () => (
        <View style={styles.separator10}/>
    );

    if(loading || loadingDetail) {
        return(
            <View style={styles.activityStyles}>
                <ActivityIndicator size="large" color={Constant.colors.whiteColor}/>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageBackground 
                    source={{uri: `${heroeData.thumbnail.path}.${heroeData.thumbnail.extension}`}} 
                    resizeMode="cover" 
                    style={styles.imageContainer}
                />
            </View>

            <View style={styles.containerInfo}>
                <Text style={styles.titleHeroe}>{heroeData.name}</Text>
                <Text style={styles.descriptionHeroe}>{heroeData.description === '' ? 'No hay descripcion' : heroeData.description}</Text>
            </View>

            <View>
            <FlatList
                data={comics}
                keyExtractor={item => item.id}
                renderItem={({item}) =>
                    <ComicComponent
                        item={item}
                    />
                }
                ListEmptyComponent={ListEmpty}
                ItemSeparatorComponent={renderSeparator}
                contentContainerStyle={{padding: 10}}
                refreshing
                horizontal
            />
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    activityStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Constant.colors.backgroundColorPrimary,
    },
    container: {
        backgroundColor: Constant.colors.backgroundColorPrimary,
        flex: 1
    },
    imageContainer: {
        height: 200,
        width: '100%',
    },
    imageStyles: {
        height: 200,
        width: '100%',
    },
    containerInfo: {
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        height: 200,
        padding: 10,
        marginTop: 5
    },
    titleHeroe: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Constant.colors.whiteColor,
    },
    descriptionHeroe: {
        textAlign: 'justify',
        color: Constant.colors.whiteColor,
    },
    separator10: {
        margin: 10
    },
})