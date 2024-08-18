import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';
// Remove the incorrect Credentials import
// import Credentials from './components/Credentials'; 

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('date'); // Default sorting by date

  useEffect(() => {
    // Fetch transactions from the local JSON server
    fetch('http://localhost:8001/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTransactions = filteredTransactions.sort((a, b) => {
    if (sortOption === 'description') {
      return a.description.localeCompare(b.description);
    } else if (sortOption === 'category') {
      return a.category.localeCompare(b.category);
    }
    return new Date(a.date) - new Date(b.date);
  });

  return (
    <div className="App">
      <SearchBar value={searchTerm} onChange={handleSearchChange} />
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionTable
        transactions={sortedTransactions}
        onDeleteTransaction={deleteTransaction}
        onSortOptionChange={setSortOption}
      />
    </div>
  );
}

export default App;

function App() {
    // ... existing state and functions
  
    const deleteTransaction = (id) => {
      setTransactions(transactions.filter(transaction => transaction.id !== id));
    };
  
    return (
      <div className="App">
        {/* ... other components */}
        <TransactionTable 
          transactions={sortedTransactions} 
          sortTransactions={sortTransactions}
          sortConfig={sortConfig}
          deleteTransaction={deleteTransaction}
        />
      </div>
    );
  }