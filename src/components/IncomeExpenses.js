import React, { useContext } from 'react';
import { GlobalContext} from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="bg-gradient-to-r from-yellow-400 to-red-500 p-6 rounded-lg shadow-md mb-4">
      <div className="flex justify-between">
        <div>
          <h4 className="text-white">Income</h4>
          <p className="text-white font-bold text-lg">${income}</p>
        </div>
        <div>
          <h4 className="text-white">Expense</h4>
          <p className="text-white font-bold text-lg">-${expense}</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
