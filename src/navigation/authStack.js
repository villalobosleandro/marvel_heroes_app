import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './../screens/login';
import { OnboardingScreen } from './../screens/onboarding'

const Stack = createNativeStackNavigator ();

const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName = 'Login';

    useEffect(() => {
        // AsyncStorage.getItem('alreadyLaunched').then((value) => {
        //     if (value == null) {
        //         AsyncStorage.setItem('alreadyLaunched', 'true');
        //         setIsFirstLaunch(true);
        //     } else {
        //         setIsFirstLaunch(false);
        //     }
        // });
    }, []);

    
    // if(isFirstLaunch == true) {
    //     routeName = 'Onboarding';
    // } else {
    //     routeName = 'Login';
    // }

    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{header: () => null}}
            />
            {/* <Stack.Screen
                name="Onboarding"
                component={OnboardingScreen}
                options={{header: () => null}}
            /> */}
        </Stack.Navigator>
    );
};

export default AuthStack;
