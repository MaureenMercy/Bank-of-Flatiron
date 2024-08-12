import React from 'react';

function TransactionTable({ transactions, sortTransactions, sortConfig, deleteTransaction }) {
  // ... existing getClassNamesFor function

  return (
    <table>
      <thead>
        {/* ... existing header row */}
        <th>Actions</th>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>${transaction.amount}</td>
            <td>
              <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;