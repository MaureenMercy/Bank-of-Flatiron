Flatiron Bank
Flatiron Bank is a React application for managing transactions. It allows users to add, view, and delete transactions. The application also supports filtering and sorting transactions based on different criteria.

Table of Contents
Project Overview
Features
Technology Stack
Getting Started
Prerequisites
Installation
Running the Application
API Configuration
Usage
Adding Transactions
Viewing Transactions
Deleting Transactions
Filtering and Sorting
Troubleshooting
Contributing
License
Project Overview
Flatiron Bank is a simple yet effective tool for managing financial transactions. Built with React, it provides a user-friendly interface to manage transactions, with features such as search, filtering, and sorting. The application uses a local JSON server to handle transaction data.

Features
Add Transactions: Users can add new transactions with details such as description, amount, and category.
View Transactions: Display a list of all transactions with details such as date, description, amount, and category.
Delete Transactions: Remove transactions from the list.
Filter Transactions: Search transactions based on their description.
Sort Transactions: Sort transactions by date, description, or category.
Technology Stack
React: JavaScript library for building user interfaces.
JSON Server: For mocking a REST API with a local JSON file.
CSS: For styling the application.
Getting Started
Prerequisites
Before running the application, ensure you have the following installed:

Node.js (v14 or later)
npm (v6 or later)
Installation
Clone the Repository:

bash
Copy code
git clone git@github.com:MaureenMercy/Bank-of-Flatiron.git
Navigate to the Project Directory:

bash
Copy code
cd flatironbank
Install Dependencies:

bash
Copy code
npm install
Running the Application
Start the JSON Server:

Ensure you have json-server installed globally. If not, install it with:

bash
Copy code
npm install -g json-server
Start the JSON server:

bash
Copy code
json-server --watch db.json --port 8001
This command assumes you have a db.json file in the root directory of your project. If you don't, create one or adjust the command to point to your existing JSON file.

Start the React Application:

bash
Copy code
npm start
This will open the application in your default web browser at http://localhost:3000.

API Configuration
The application fetches transaction data from a JSON server running on http://localhost:8001. Make sure to start the JSON server before running the React application.

Usage
Adding Transactions
Fill out the form in the TransactionForm component with the transaction details.
Click the "Add Transaction" button to add the transaction to the list.
Viewing Transactions
All transactions will be displayed in the TransactionTable component. The table shows details such as date, description, amount, and category.

Deleting Transactions
Click the "Delete" button next to a transaction in the table to remove it from the list.

Filtering and Sorting
Filter: Use the search bar to filter transactions by their description.
Sort: Select a sorting option (date, description, or category) to reorder the transactions accordingly.
Troubleshooting
Common Issues
No Transactions Displayed

Ensure that the JSON server is running on http://localhost:8001 and that it contains valid transaction data. Check the console for any errors and ensure your React application is correctly fetching data from the server.

Transactions Not Added

Verify that the transaction form is correctly submitting data and that the JSON server is updating the data. Check the network tab in your browser’s developer tools to see if the request to add a transaction is being made.

Errors on Page Load

If you encounter errors related to imports or module resolution, ensure that all dependencies are correctly installed and that file paths are accurate.

Contributing
Contributions are welcome! To contribute to this project:

Fork the repository.
Create a new branch for your changes.
Make your changes and test them.
Submit a pull request with a description of your changes.
License
This project is licensed under the MIT License. See the LICENSE file for details.