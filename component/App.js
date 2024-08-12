import React, { useState, useEffect } from 'react';
// ... other imports

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // ... existing useEffect and fetchTransactions function

  const sortTransactions = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortedTransactions = (transactionsToSort) => {
    if (!sortConfig.key) return transactionsToSort;

    return [...transactionsToSort].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTransactions = getSortedTransactions(filteredTransactions);

  return (
    <div className="App">
      {/* ... other components */}
      <TransactionTable 
        transactions={sortedTransactions} 
        sortTransactions={sortTransactions}
        sortConfig={sortConfig}
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