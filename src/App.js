import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionsTabs from './components/TransactionTabs';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransactions';

const App = () => {
  return (
    <GlobalProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient-bg">
        <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
          <Header />
          <Balance />
          <IncomeExpenses />
          <TransactionsTabs />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;
