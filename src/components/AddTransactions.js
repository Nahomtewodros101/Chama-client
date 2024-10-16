import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('income');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: type === 'expense' ? -amount : +amount,
    };

    if (text && !isNaN(amount)) {
      addTransaction(newTransaction);
      setText('');
      setAmount(0);
    } else {
      alert('Please enter valid text and amount');
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 to-blue-500 p-6 rounded-lg shadow-md">
      <h3 className="text-white text-lg font-semibold mb-4">Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label htmlFor="text" className="text-white">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            className="mt-1 p-2 w-full rounded-md border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="text-white">Amount <br />(negative - expense, positive - income)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            className="mt-1 p-2 w-full rounded-md border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="text-white">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mt-1 p-2 w-full rounded-md border border-gray-300"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <button className="bg-white text-blue-500 font-semibold p-2 rounded-md transition hover:bg-blue-200">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
