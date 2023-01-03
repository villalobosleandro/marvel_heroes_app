import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try {
            // await auth().signInWithEmailAndPassword(email.toLowerCase(), password);
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
