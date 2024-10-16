import React, { useContext, useState } from "react";
import { GlobalContext} from '../context/GlobalState';
import Transaction from "./Transaction";

const TransactionsTabs = () => {
  const { transactions } = useContext(GlobalContext);
  const [activeTab, setActiveTab] = useState("income");

  const incomeTransactions = transactions.filter(
    (transaction) => transaction.amount > 0
  );
  const expenseTransactions = transactions.filter(
    (transaction) => transaction.amount < 0
  );

  return (
    <div className="bg-gradient-to-r from-blue-400 to-teal-500 p-6 rounded-lg shadow-md mb-4">
      <div className="tabs flex justify-between mb-4">
        <button
          className={`tab ${
            activeTab === "income" ? "bg-white text-blue-500" : "text-white"
          } p-2 rounded-md`}
          onClick={() => setActiveTab("income")}
        >
          Income
        </button>
        <button
          className={`tab ${
            activeTab === "expense" ? "bg-white text-blue-500" : "text-white"
          } p-2 rounded-md`}
          onClick={() => setActiveTab("expense")}
        >
          Expense
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "income" && (
          <ul>
            {incomeTransactions.map((transaction) => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))}
          </ul>
        )}
        {activeTab === "expense" && (
          <ul>
            {expenseTransactions.map((transaction) => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TransactionsTabs;
