import React, { useContext } from "react";

import TransactionCard from "./TransactionCard";
import { TransactionsContext } from "../context/TransactionsContext";

const Transactions = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div className="transactions Transactions">
      <h1>Transactions</h1>
      <div className="transactions-container">
        {transactions.length !== 0 ? (
          <div className="single-transaction">
            {transactions.reverse().map((t, i) => (
              <TransactionCard key={i} {...t} />
            ))}
          </div>
        ) : (
          <h2>You have no transactions to display.</h2>
        )}
      </div>
    </div>
  );
};

export default Transactions;
