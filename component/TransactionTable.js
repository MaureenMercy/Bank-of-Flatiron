import React from 'react';
import '../styles/TransactionTable.css'; // Ensure this path is correct

const TransactionTable = ({ transactions, onDeleteTransaction, onSortOptionChange }) => {
  return (
    <div className="transaction-table">
      <div className="sort-options">
        <label>Sort by:</label>
        <select onChange={(e) => onSortOptionChange(e.target.value)}>
          <option value="date">Date</option>
          <option value="description">Description</option>
          <option value="category">Category</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{parseFloat(transaction.amount).toFixed(2)}</td> {/* Ensure amount is a number */}
                <td>
                  <button onClick={() => onDeleteTransaction(transaction.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No transactions available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;