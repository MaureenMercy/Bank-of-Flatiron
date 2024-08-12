import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortBy, setSortBy] = useState('description');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching transactions:', error));
  }, []);

  const addTransaction = (newTransaction) => {
    fetch('http://localhost:3000/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
      .then((response) => response.json())
      .then((data) => setTransactions([...transactions, data]))
      .catch((error) => console.error('Error adding transaction:', error));
  };

  const deleteTransaction = (id) => {
    fetch(`http://localhost:3000/transactions/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setTransactions(transactions.filter((transaction) => transaction.id !== id));
        } else {
          console.error('Error deleting transaction:', response.statusText);
        }
      })
      .catch((error) => console.error('Error deleting transaction:', error));
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="container">
      <Header />
      <SearchBar setSearchTerm={setSearchTerm} />
      <TransactionForm addTransaction={addTransaction} />
      <div className="category-filter"> 
        <p id='sort'>Sort By :</p>
        <select id='category' value={selectedCategory} onChange={handleCategoryChange}>
          <option value="" disabled>Select category</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Fashion">Fashion</option>
          <option value="Food">Food</option>
          <option value="Gift">Gift</option>
          <option value="Groceries">Groceries</option>
          <option value="Housing">Housing</option>
          <option value="Income">Income</option>
          <option value="Transportation">Transportation</option>
        </select>
      </div>
      <div className='transaction-table'>
      <TransactionTable
        transactions={transactions}
        searchTerm={searchTerm}
        sortOrder={sortOrder}
        sortBy={sortBy}
        setSortOrder={setSortOrder}
        setSortBy={setSortBy}
        deleteTransaction={deleteTransaction}
        selectedCategory={selectedCategory}
      />
      </div>
    </div>
  );
}

export default App;