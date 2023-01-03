import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import { AuthContext } from './../context/authProvider';
import AuthStack from './authStack';
import AppStack from './appStack';

export const Routes = () => {
    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(false);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing)
            setInitializing(false);
    };

    useEffect(() => {
       
    }, []);

    if (initializing)
        return null;

    return (
        <NavigationContainer>
            {
                user
                    ? <AppStack />
                    : <AuthStack />
            }
        </NavigationContainer>
    );
};


