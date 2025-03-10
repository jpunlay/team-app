import React, {createContext, useState, useMemo} from 'react';
import {router} from "expo-router";

const AuthContext = createContext({
    user: null,
    login: () => {
    },
    logout: () => {
    },
    isLoggedIn: false,
});

export const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (userData: any) => {
        setUser(userData);
        setIsLoggedIn(true);
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        router.push({
            pathname: "/"
        });
    };

    const value: any = useMemo(
        () => ({
            user,
            login,
            logout,
            isLoggedIn,
        }),
        [user, isLoggedIn]
    );

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;