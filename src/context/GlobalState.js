import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';
const initialState={
    transections:[
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}
//create globall context
export const GlobalContext=createContext(initialState);

//provider
export const GlobalProvider=({children})=>{
    const [state] = useReducer(AppReducer, initialState);//[reducer,state]
    return (
    <GlobalContext.Provider value={{
        transections:state.transections
    }}>
        {children}
    </GlobalContext.Provider>)
}