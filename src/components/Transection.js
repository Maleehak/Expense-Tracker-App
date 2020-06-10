import React from 'react'

export const Transection = ({transection}) => {
    return (
             <li className="minus">
                    {transection.text} <span>-$400</span>
                    <button className="delete-btn">x</button>
            </li> 
    )
}
