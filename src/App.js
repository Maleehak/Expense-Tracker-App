import React from 'react';
import './App.css';
import {Header} from './components/Header'
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransectionList } from './components/TransectionList';
import { AddTransection } from './components/AddTransection';
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpense/>
        <TransectionList/>
        <AddTransection/>
      </div>
    </GlobalProvider>
  );
}

export default App;
