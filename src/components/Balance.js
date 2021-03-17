import React, { useContext }  from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const {transactions } = useContext(GlobalContext);
    let balance = 0;
    {transactions.map(transaction => balance+=parseInt(transaction.amount))}

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${ balance.toFixed(2) }</h1>
        </>
    )
}
