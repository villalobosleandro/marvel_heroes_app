import React, {createContext, useState} from 'react';
import { ToastAndroid } from 'react-native'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = async (email, pass) => {
        try {
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
            return e;
        }
    };

    const logout = async () => {
        
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
