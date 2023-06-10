/* eslint-disable react/prop-types */
/* eslint-disable object-shorthand */
import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    userID: null,
    user: {},
    onLogout: () => {},
    onLogin: () => {}
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userID, setUserID] = useState(null)
    const [user, setUser] = useState({})

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn')
        const storedUserID = localStorage.getItem('userID')
        const storedUser = localStorage.getItem('storedUser')

        if (storedUserLoggedInInformation === '1') setIsLoggedIn(true)
        if (storedUserID !== null) setUserID(storedUserID)
        if (storedUserLoggedInInformation !== null) setUser(storedUser)
    }, [])

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
        localStorage.removeItem('userID')
        setUserID(null)
        localStorage.removeItem('storedUser')
        setUser({})
    }

    const loginHandler = (userID, user) => {
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true)
        localStorage.setItem('userID', userID)
        setUserID(userID)
        localStorage.setItem('storedUser', user)
        setUser(user)
    }

    return <AuthContext.Provider
        value={{
            isLoggedIn: isLoggedIn,
            userID: userID,
            user: user,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }}
    >
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext
