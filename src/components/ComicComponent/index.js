import React from 'react'
import {
    Text,
    ImageBackground,
    StyleSheet
} from 'react-native'

export const ComicComponent = ({item}) => {
    return(
        <ImageBackground
            source={{uri: item.images.length > 0 ? 
                `${item.images[0].path}.${item.images[0].extension}`
                : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHEhANDQ8QDg8QEA0OEA0NEBsPEBAPFREYFhQRFRMYHSggGBolGxMTITEhJSkrLi4uFx8zODMsNygtLjABCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMIBAwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAABAMCAQf/xAAuEAEAAQEGBQQBBAMBAAAAAAAAAQIDERITMVEEIXGRoRRBgfBhInKxwUKC0TL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwt65omLpBuI86rfwZ1W/gFgjzqt/BnVb+AWCPOq38GdVv4BYI86rfwZ1W/gFgjzqt/BnVb+AWCPOq38GdVv4BYJItqt/CsAAAAAAAAAAAAAAAAAABNxWsdFKbitY6A4sbPM1bemjeXHC6z0Ugx9NG8npo3lsxrt4p5RzA9NG8npo3l1Z2sV/iWgMfTRvJ6aN5bAMfTRvJ6aN5bAMfTRvLmuwimJm+eUKHNrpPSQRQvQQvAAAAAAAAAAAAAAAAAAATcVrHRSm4rWOgHC6z0UpuF1nopBzXpPSUS9jXw9+k3Aws9Y6wtZ2dlFHPWWgBE3p7e19o+Zc2Npg5Tp/AKh5e9Ac2uk9JdObXSekgihegheAAAAAAAAAAAAAAAAAAAm4rWOilNxWsdAOF1nopTcLrPRSADCriLp5RfAN2Fva3co+ZeWlvy/Tr/DAAAHt6uzrxxf3Ru7KvBP49wWObXSekuo5ubXSekgihegheAAAAAAAAAAAAAAAAAAAm4rWOilNxWsdAOF1nopTcLrPRpbTM8qYn8yDO3tb+UfMsXWVO0mVO0g5HWVO0mVO0g5HWVO0mVO0g5HWVO0mVO0g24e0/xn4a2mk9JSxZ1R7Soqm+mb4u5TyBJC9BC8AAAAAAAAAAAAAAAAAABNxWsdFKfiKZmYui/kDiwriiebfPp+wmwTtPYwTtPYFOfT9gz6fsJsE7T2ME7T2BTn0/YM+n7CbBO09jBO09gU59P2DPp+wmwTtPYwTtPYFOfT9gz6fsJsE7T2ME7T2BTn0/Yc120TEx+J9mGCdp7GCdp7A5heiiidp7LQAAAAAAAAAAAAAAAAAAAcWtWGLwdjiiJ3v+HGOcN/vfd5BsMptL6ZmNY/lqAMcc4b/e+7y6iv8ATf8AbwaDOxqmqOet8w8ptL5/E3xHwDUcV1TfhjXW+faCmJjWb/i4HYyi+qZ53XTdoWlc0Xe+t4NRxVVzpu0n/jsAAAAAAAAAAAAAAAAAABzXMRro6AY0XX/p0u57Of8AH/b+1ADC3jDfMaTynru3AE8f+Y/d/b2Y54faZxffluAxirBFX7peVUTREc9Od1zcBlM4Zxe0xd0eYomqLpv1vbAJ4w31Yt5dzzmm7S6WoDC7BVEe18zHbRuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//Z'
            }} 
            resizeMode="cover" 
            style={styles.imageStyles}
            imageStyle= {{opacity:0.3}}
        >
            <Text style={styles.titleComic}>{item.title}</Text>   
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageStyles: {
        height: 200,
        width: 140,
        padding: 5
    },
    titleComic: {
        fontSize: 18,
        color: Constant.colors.yellowColor
    }
})