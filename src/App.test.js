import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

// Mock the fetch function
beforeEach(() => {
  fetch.resetMocks();
});

test('should add a new transaction and display it', async () => {
  // Mock the fetch responses
  fetch.mockResponseOnce(JSON.stringify({ id: 1, date: '2024-08-12', description: 'Test Transaction', category: 'Food', amount: 100 }));

  // Render the App component
  render(<App />);

  // Find the form inputs and submit button
  const dateInput = screen.getByLabelText(/Date/i);
  const descriptionInput = screen.getByLabelText(/Description/i);
  const categoryInput = screen.getByLabelText(/Category/i);
  const amountInput = screen.getByLabelText(/Amount/i);
  const submitButton = screen.getByText(/Add Transaction/i);

  // Fill out the form
  fireEvent.change(dateInput, { target: { value: '2024-08-12' } });
  fireEvent.change(descriptionInput, { target: { value: 'Test Transaction' } });
  fireEvent.change(categoryInput, { target: { value: 'Food' } });
  fireEvent.change(amountInput, { target: { value: '100' } });

  // Submit the form
  fireEvent.click(submitButton);

  // Wait for the transaction to appear in the table
  await waitFor(() => {
    expect(screen.getByText(/Test Transaction/i)).toBeInTheDocument();
    expect(screen.getByText(/Food/i)).toBeInTheDocument();
    expect(screen.getByText(/100/i)).toBeInTheDocument();
  });
});
