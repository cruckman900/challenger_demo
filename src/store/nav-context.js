import React, { useState, useEffect } from 'react';

const NavContext = React.createContext({
    channelLocation: {navType: null, navID: null, navTitle: null, navName: null, navIcon: null},
    onPart: () => {},
    onJoin: (navType, navID, navTitle, navName, navIcon) => {}
});

export const NavContextProvider = (props) => {
    const [channelLocation, setChannelLocation] = useState(null);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('channelLocation');

        if(storedUserLoggedInInformation !== null) {
            setChannelLocation({
                navType: storedUserLoggedInInformation.navType,
                navID: storedUserLoggedInInformation.navID,
                navTitle: storedUserLoggedInInformation.navTitle,
                navName: storedUserLoggedInInformation.navName,
                navIcon: storedUserLoggedInInformation.navIcon
            })
        }
    }, []);

    const exitHandler = () => {
        localStorage.removeItem('channelLocation');
        setChannelLocation(null);
    };

    const enterHandler = (navType, navID, navTitle, navName, navIcon) => {
        localStorage.setItem('channelLocation', {
            navType: navType, 
            navID: navID, 
            navTitle: navTitle, 
            navName: navName,
            navIcon: navIcon
        });
        setChannelLocation({
            navType: navType, 
            navID: navID, 
            navTitle: navTitle, 
            navName: navName,
            navIcon: navIcon
        });
    };

    return <NavContext.Provider
        value={{
            channelLocation: channelLocation,
            onPart: exitHandler,
            onJoin: enterHandler
        }}
    >
        {props.children}
    </NavContext.Provider>
}

export default NavContext;