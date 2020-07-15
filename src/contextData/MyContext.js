import React, { createContext } from 'react';

import UseReducer from '../Reducer/UseReducer';

export const MyContext = createContext();
export const MyProvider = props => {
    return (
        <MyContext.Provider value={{ ...UseReducer() }}>
            {props.children}
        </MyContext.Provider>
    )
}