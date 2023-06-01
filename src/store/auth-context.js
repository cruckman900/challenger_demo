import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    user: {},
    onLogout: () => {},
    onLogin: (username, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if(storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }

        const storedUserInformation = localStorage.getItem('userInfo');

        if(storedUserInformation !== null) {
            setUser(storedUserInformation);
        }
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userInfo');
        setIsLoggedIn(false);
        setUser({});
    };

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        localStorage.setItem('userInfo', user);
        setIsLoggedIn(true);
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