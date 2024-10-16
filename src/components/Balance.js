import React, { useContext } from 'react';
import { GlobalContext} from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const balance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-md mb-4">
      <h4 className="text-white text-lg font-semibold">Your Balance</h4>
      <h1 className="text-white text-2xl font-bold">${balance}</h1>
    </div>
  );
};

export default Balance;
