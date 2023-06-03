import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    user: {},
    onLogout: () => {},
    onLogin: () => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
        const storedUser = localStorage.getItem('storedUser');

        if(storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }

        setUser(storedUser);
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        localStorage.removeItem('storedUser');
        setUser(0);
    };

    const loginHandler = (userID) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
        localStorage.setItem('storedUser', user);
        setUser(user);
    };

    return <AuthContext.Provider
        value={{
            isLoggedIn: isLoggedIn,
            user: user,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }}
    >
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;