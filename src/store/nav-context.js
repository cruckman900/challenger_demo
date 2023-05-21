import React, { useState, useEffect } from 'react';

const NavContext = React.createContext({
    channelLocation: {navType: null, navID: null, navTitle: null, navName: null},
    onPart: () => {},
    onJoin: (navType, navID, navTitle, navName) => {}
});

export const NavContextProvider = (props) => {
    const [channelLocation, setChannelLocation] = useState(null);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('channelLocation');

        if(storedUserLoggedInInformation) {
            setChannelLocation(storedUserLoggedInInformation.navType, storedUserLoggedInInformation.navID);
        }
    }, []);

    const exitHandler = () => {
        localStorage.removeItem('channelLocation');
        setChannelLocation(null);
    };

    const enterHandler = (navType, navID, navTitle, navName) => {
        localStorage.setItem('channelLocation', navID);
        setChannelLocation({navType, navID, navTitle, navName});
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