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
    const [state,dispatch] = useReducer(AppReducer, initialState);//[reducer,state]

    //Actions to update global values
    function deleteTransections(id){
        dispatch({
            type:'DELETE_TRANSECTION',
            payload:id
        });
    }
    function addTransections(transection){
        dispatch({
            type:'ADD_TRANSECTION',
            payload:transection
        });
    }

    return (
    <GlobalContext.Provider value={{
        transections:state.transections,
        deleteTransections,
        addTransections
    }}>
        {children}
    </GlobalContext.Provider>)
}