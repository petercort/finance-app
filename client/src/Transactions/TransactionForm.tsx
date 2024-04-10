import React, { useState } from 'react';

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

const TransactionForm: React.FC = () => {
  const [vendor, setVendor] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [transactionType, setTransactionType] = useState('withdrawal');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (vendor.trim() === '') {
      alert('Vendor is required');
      return;
    }

    if (category.trim() === '') {
      alert('Category is required');
      return;
    }

    if (isNaN(Number(price)) || Number(price) <= 0) {
      alert('Price must be a positive number');
      return;
    }
    if (transactionType.trim() === '') {
      alert('Transaction type is required');
      return;
    }
  

    console.log(`Vendor: ${vendor}, Price: ${price}, Category: ${category}`);
    // Here you can handle the form submission, e.g., send the data to an API or update your state
  };

    const formStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column' as FlexDirection | undefined,
      maxWidth: '300px',
      margin: '0 auto',
    };

    const inputStyle = {
      margin: '10px 0',
    };

  return (

    <form onSubmit={handleSubmit} style={formStyle}>
      <label style={inputStyle}>
        Vendor:
        <input type="text" value={vendor} onChange={e => setVendor(e.target.value)} />
      </label>
      <label style={inputStyle}>
        Price:
        <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
      </label>
      <label style={inputStyle}>
        Category:
        <input type="text" value={category} onChange={e => setCategory(e.target.value)} />
      </label>
      <label style={inputStyle}>
        Transaction Type:
        <select value={transactionType} onChange={e => setTransactionType(e.target.value)}>
          <option value="withdrawal">Withdrawal</option>
          <option value="deposit">Deposit</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default TransactionForm;