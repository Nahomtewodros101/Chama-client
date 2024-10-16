import React from 'react';
import { GlobalProvider } from './Context/GlobalState';
import Header from './Components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import TransactionsTabs from './Components/TransactionsTabs';

const App = () => {
  return (
    <GlobalProvider>
      <div className="container">
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
