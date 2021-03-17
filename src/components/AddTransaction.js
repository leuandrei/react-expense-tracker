import React, { useContext } from 'react'
import { useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    return (
        <>
          <h3>Add new transaction</h3>  
          <form>
              <div className="form-control">
                  <label htmlFor="text">Text</label>
                  <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."></input>
              </div>
              <div className="form-control">
                  <label htmlFor="amount">Amount <br></br>(negative - expense, positive - income)</label>
                  <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..."></input>
              </div>
              <button className="btn" onClick={(e) => {
                  e.preventDefault();
                  let newTransaction = {
                    id: Math.random()%1000+5,
                    text,
                    amount
                  }
                  addTransaction(newTransaction)
                }
            }>Add Transaction</button>
          </form>
        </>
    )
}
