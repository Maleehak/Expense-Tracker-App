import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Balance = () => {
    const {transections}=useContext(GlobalContext);
    const amounts = transections.map(transection => transection.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div>
            <h3>Your Balance</h3>
            <h1>${total}</h1>
        </div>
    )
}
