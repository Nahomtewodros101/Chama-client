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
        <div className="container mx-auto p-4 md:p-8">
          <Header />
          <Balance />
          <IncomeExpenses />
          <TransactionsTabs />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    );
  };
  
  export default App;
  