import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={`flex justify-between items-center p-2 mb-2 rounded-lg shadow-md ${transaction.amount < 0 ? 'bg-red-200' : 'bg-green-200'}`}>
      <span className="text-gray-800">{transaction.text} <span className="font-semibold">{sign}${Math.abs(transaction.amount)}</span></span>
      <button 
        onClick={() => deleteTransaction(transaction.id)} 
        className="bg-red-500 text-white rounded-md px-2 py-1 transition hover:bg-red-700">
        x
      </button>
    </li>
  );
};

export default Transaction;
