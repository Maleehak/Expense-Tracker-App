import React from 'react';
import './App.css';
import {Header} from './components/Header'
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransectionList } from './components/TransectionList';
import { AddTransection } from './components/AddTransection';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpense/>
        <TransectionList/>
        <AddTransection/>
      </div>
      
    </div>
  );
}

export default App;
