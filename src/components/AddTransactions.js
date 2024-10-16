import React, { useState, useContext } from 'react';
import { GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: +amount,
    };
    addTransaction(transaction);
    setText('');
    setAmount(0);
  };

  return (
    <div className="mb-4">
      <h3 className="text-lg">Add new transaction</h3>
      <form onSubmit={onSubmit} className="flex flex-col md:flex-row justify-between">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter transaction..."
          className="border rounded p-2 mb-2 md:mb-0 md:mr-2 flex-1"
          required
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..."
          className="border rounded p-2 mb-2 md:mb-0 flex-1"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2"
        >
          Add transaction
        </button>
      </form>
    </div>
  );
};


export default AddTransaction;
