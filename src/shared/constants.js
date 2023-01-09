//public key
//1c12e55cbca49768e103211839c6b21e

//private key
//c673ee4c61ef294f2480e8b9de51db252330e473

//ts = 1c673ee4c61ef294f2480e8b9de51db252330e4731c12e55cbca49768e103211839c6b21e

module.exports = {
    titleApp: 'Marvel App',
    baseUrl: 'https://gateway.marvel.com:443/v1/public/',
    apiKey: '?ts=1&apikey=1c12e55cbca49768e103211839c6b21e&hash=3a28f0c2d272db304c756d67b8f9bdf8',
    listHeroes: `characters`,
    getHeroeDetail: 'characters/',


    colors: {
        whiteColor: '#ffffff',
        redDangerColor: '#cd1119',
        yellowWarningColor: '#d69b22',
        greenSuccessColor: '#28a745',
        backgroundColorPrimary: '#2A2E43',
        grayColor: '#abb2bf',
        yellowColor: '#ffff00'
    },

    images: {
        empty: require('./../assets/images/empty.png'),
    }


};
