import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  let totalIncome = 0,
    totalExpense = 0;
  {
    transactions.map((transaction) => {
      transaction.amount < 0
        ? (totalExpense += parseInt(transaction.amount))
        : (totalIncome += parseInt(transaction.amount));
    });
  }

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${totalIncome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(totalExpense)}</p>
      </div>
    </div>
  );
};
