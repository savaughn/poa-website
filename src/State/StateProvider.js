import React, {useContext, useState, useEffect} from 'react';

const AppContext = React.createContext('joe');

export const AppContextProvider = ({children}) => {
    const [userName, setUserName] = useState('frank');

    useEffect(() => {
        (async () => {

        })();
    }, []);

    return (
        <AppContext.Provider value={{userName, setUserName}}>
            { children }
        </AppContext.Provider>
    );
};
