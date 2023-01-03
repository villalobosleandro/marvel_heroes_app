import React, { useContext } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput ,
    Button
} from 'react-native'
import { AuthContext } from './../../context/authProvider';
import { AverngersIcon } from './../../components/Icons'

export const LoginScreen = ({navigation}) => {
    const [text, onChangeText] = React.useState("mail@mail.com");
    const [pass, onChangePass] = React.useState("asd123");
    const { login } = useContext(AuthContext);

    const onSubmit = async () => {
        const response = await login(text, pass);
        console.log('response => ', response);
        try {
            navigation.navigate('HomeScreen')
        } catch (e) {

        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <AverngersIcon
                    size={120}
                />
                <Text>Marvel Program</Text>
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
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#2A2E43'
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
        color: '#fff'
      },
})