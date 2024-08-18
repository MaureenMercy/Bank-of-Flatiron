import React, { useState } from 'react';
import '../styles/TransactionForm.css'; // Ensure this path is correct

const TransactionForm = ({ onAddTransaction }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!date || !description || !category || !amount) return; // Validate input

    const newTransaction = {
      id: Date.now(), // Simple id generation
      date,
      description,
      category,
      amount: parseFloat(amount) // Ensure amount is a number
    };

    onAddTransaction(newTransaction); // Pass data to parent

    // Reset the form
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label>Description</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label>Category</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Fashion">Fashion</option>
        <option value="Income">Income</option>
        <option value="Gift">Gift</option>
        <option value="Housing">Housing</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      <label>Amount</label>
      <input
        type="number"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;