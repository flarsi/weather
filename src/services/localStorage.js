import React, { createContext, useContext } from 'react';

const LocalStorageContext = createContext(null);

export const LocalStorageProvider = ({children}) => {
    const value = {
        setItem,
        getItem,
    };

    return (
        <LocalStorageContext.Provider value={value}>
            {children}
        </LocalStorageContext.Provider>
    );
};

export const useLocalStorage = () => {
    return useContext(LocalStorageContext);
};

const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key))
};