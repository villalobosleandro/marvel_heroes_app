import React, { useContext } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput ,
    Button,
    ToastAndroid
} from 'react-native'
import { AuthContext } from './../../context/authProvider';
import { AverngersIcon } from './../../components/Icons'

export const LoginScreen = ({navigation}) => {
    const [text, onChangeText] = React.useState("mail@mail.com");
    const [pass, onChangePass] = React.useState("asd123");
    const { login } = useContext(AuthContext);

    const onSubmit = async () => {
        const response = await login(text, pass);
        try {
            navigation.navigate('HomeScreen')
        } catch (e) {
            ToastAndroid.show("Ocurrió un error, intente mas tarde!", ToastAndroid.LONG);
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <AverngersIcon
                    size={120}
                />
                <Text style={styles.textTitle}>{Constant.titleApp}</Text>
            </View>

            <View style={styles.inputsContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder={'Email or username'}
                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangePass}
                    value={pass}
                    placeholder={'Password'}
                    secureTextEntry={true}
                />
            </View>

            <View>
                <Button
                    onPress={() => onSubmit()}
                    title="Login"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Constant.colors.backgroundColorPrimary
    },
    logo: {
        paddingVertical: 30, 
        justifyContent: 'space-between',
        flex: 1
    },
    inputsContainer: {
        flex: 2
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: Constant.colors.whiteColor,
      },
      textTitle: {
        color: Constant.colors.whiteColor,
        fontSize: 24
      }
})