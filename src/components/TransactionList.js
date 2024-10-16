import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="bg-gradient-to-r from-gray-300 to-gray-200 p-6 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-semibold">History</h3>
      <ul>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
