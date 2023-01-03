import React, {createContext, useState} from 'react';
import { ToastAndroid } from 'react-native'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = async (email, pass) => {
        try {
            // await auth().signInWithEmailAndPassword(email.toLowerCase(), password);
            if(email === 'mail@mail.com' && pass === 'asd123') {
                setUser({
                    email,
                    pass
                })
                return true
            } else {
            
                ToastAndroid.show("Usuario o contraseña incorrecta!", ToastAndroid.LONG);
                return false
            }
        } catch (e) {
            console.log('Errorrrrrrrrrr => ', e);
            return e;
        }
    };

    const logout = async () => {
        try {
            await auth().signOut();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login,
                logout
            }}>
            {children}
        </AuthContext.Provider>
    );
};
