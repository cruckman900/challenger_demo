/* eslint-disable react/prop-types */
/* eslint-disable object-shorthand */
import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    isAdmin: false,
    userID: null,
    user: {},
    onLogout: () => {},
    onLogin: () => {}
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [userID, setUserID] = useState(null)
    const [user, setUser] = useState({})

    useEffect(() => {
        // retrieve info from cache and set state variables

        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn')
        if (storedUserLoggedInInformation === '1') setIsLoggedIn(true)

        const storedUserIsAdmin = localStorage.getItem('isAdmin')
        if (storedUserIsAdmin !== null) setUserID(storedUserIsAdmin)

        const storedUserID = localStorage.getItem('userID')
        if (storedUserID !== null) setUserID(storedUserID)

        const storedUser = localStorage.getItem('storedUser')
        if (storedUserLoggedInInformation !== null) setUser(storedUser)
    }, [])

    const logoutHandler = () => {
        // set state and cache variables

        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)

        localStorage.removeItem('isAdmin')
        setIsAdmin(false)

        localStorage.removeItem('userID')
        setUserID(null)

        localStorage.removeItem('storedUser')
        setUser({})
    }

    const loginHandler = (userID, user, isAdmin) => {
        // set state and cache variables

        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true)

        localStorage.setItem('isAdmin', isAdmin)
        setIsAdmin(isAdmin)

        localStorage.setItem('userID', userID)
        setUserID(userID)

        localStorage.setItem('storedUser', user)
        setUser(user)
    }

    return <AuthContext.Provider
        value={{
            isLoggedIn: isLoggedIn,
            isAdmin: isAdmin,
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
