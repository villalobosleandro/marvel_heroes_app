import React from 'react';

import { AuthProvider } from './../context/authProvider';
import { Routes } from './routes';

const Providers = () => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}

export default Providers;

