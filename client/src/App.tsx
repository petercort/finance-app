import React, { useState } from 'react';
import logo from './logo.svg';
import TransactionForm from './Transactions/TransactionForm';
import './App.css';

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <button onClick={() => setShowForm(true)}>New Purchase</button>
      {showForm && <TransactionForm />}
    </div>
  );
}
export default App;