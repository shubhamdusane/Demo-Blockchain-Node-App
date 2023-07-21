const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000; // You can use any port number you prefer

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Sample data to simulate blockchain and IPFS
let blockchain = [];
let ipfs = [];

// Function to generate random transaction hash key
function generateTransactionHash() {
  const hash = Math.random().toString(16).substr(2, 16);
  return `0x${hash}`;
}

// API 1: Push Document Upload into Network
app.post('/api/upload', (req, res) => {
  const { documentId, contributorKey } = req.body;

  // Simulate storing the transaction in the blockchain
  const transaction = {
    transactionId: `tx${blockchain.length + 1}`,
    documentId,
    contributorId: contributorKey,
    transactionType: 'upload',
    timestamp: new Date().toISOString(),
  };
  blockchain.push(transaction);

  // Simulate uploading the document to IPFS
  const transactionHashKey = generateTransactionHash();
  ipfs.push({
    documentId,
    transactionHashKey,
  });

  res.status(200).json({ transactionHashKey });
});

// API 2: Push Payment Transaction into Network
app.post('/api/payment', (req, res) => {
  const { documentId, paymentData } = req.body;

  // Simulate storing the payment transaction in the blockchain
  const transaction = {
    transactionId: `tx${blockchain.length + 1}`,
    documentId,
    contributorId: paymentData.contributorId,
    transactionType: 'payment',
    timestamp: new Date().toISOString(),
  };
  blockchain.push(transaction);

  res.status(200).json({ transactionHashKey: transaction.transactionId });
});

// API 3: Pull Transactions Information from Blockchain Network
app.get('/api/transactions', (req, res) => {
  const { documentId, contributorId } = req.query;

  // Simulate querying the blockchain for transactions
  const transactions = blockchain.filter(
    (tx) => tx.documentId === documentId && tx.contributorId === contributorId
  );

  res.status(200).json({ transactions });
});

// API 4: Pull Payment Information from Blockchain Network
app.get('/api/payments', (req, res) => {
  const { documentId } = req.query;

  // Simulate querying the blockchain for payments
  const payments = blockchain.filter(
    (tx) => tx.documentId === documentId && tx.transactionType === 'payment'
  );

  res.status(200).json({ payments });
});

// API 5: Date Range Query for Document Uploads and Payments
app.get('/api/date-range', (req, res) => {
  const { startDate, endDate, contributorId } = req.query;

  // Simulate querying the blockchain for transactions and payments within the date range
  const transactions = blockchain.filter(
    (tx) =>
      tx.contributorId === contributorId &&
      tx.timestamp >= startDate &&
      tx.timestamp <= endDate
  );

  const payments = blockchain.filter(
    (tx) =>
      tx.documentId === contributorId &&
      tx.transactionType === 'payment' &&
      tx.timestamp >= startDate &&
      tx.timestamp <= endDate
  );

  res.status(200).json({ transactions, payments });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
