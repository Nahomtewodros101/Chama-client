import React, { useContext, useState } from "react";
import { GlobalContext} from '../context/GlobalState';
import Transaction from "./Transaction";

const TransactionsTabs = () => {
  const { transactions } = useContext(GlobalContext);
  const [activeTab, setActiveTab] = useState('income');

  const incomeTransactions = transactions.filter((transaction) => transaction.amount > 0);
  const expenseTransactions = transactions.filter((transaction) => transaction.amount < 0);

  return (
    <div className="mb-4">
      <div className="flex justify-center mb-4">
        <button
          className={`tab mx-2 ${activeTab === 'income' ? 'active' : ''} px-4 py-2 border rounded`}
          onClick={() => setActiveTab('income')}
        >
          Income
        </button>
        <button
          className={`tab mx-2 ${activeTab === 'expense' ? 'active' : ''} px-4 py-2 border rounded`}
          onClick={() => setActiveTab('expense')}
        >
          Expense
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'income' && (
          <ul>
            {incomeTransactions.map((transaction) => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))}
          </ul>
        )}
        {activeTab === 'expense' && (
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
