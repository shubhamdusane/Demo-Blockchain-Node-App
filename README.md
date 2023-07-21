# Sample Demo Blockchain Node App

This is a sample Node.js application that demonstrates the usage of APIs for document upload and payment transactions in a blockchain network.

## Cloning the App

To clone the application, use the following command:

git clone https://github.com/shubhamdusane/Demo-Blockchain-Node-App/

## Installing Dependencies

Before running the application, make sure you have Node.js and npm installed on your system. Then, navigate to the project directory and install the required dependencies using:

npm install

## Running the Application

To start the application, run the following command:

node app.js


The server will start running on http://localhost:3000 (you can change the port number in the `app.js` file).

## Code Explanation

The application uses Express.js as the framework for handling API requests. The blockchain and IPFS are simulated using arrays to store the data. The main components of the application are:

1. `app.js`: This is the main entry point of the application that sets up the Express server and defines the API endpoints.

2. `blockchain`: This array simulates the storage of blockchain transactions.

3. `ipfs`: This array simulates the storage of documents uploaded to IPFS.

4. API Endpoints: The application defines the following API endpoints:

   - `POST /api/upload`: API to upload a document to the network.
   - `POST /api/payment`: API to make a payment transaction in the network.
   - `GET /api/transactions`: API to retrieve all transactions for a document upload against a specific Document ID and Contributor ID.
   - `GET /api/payments`: API to retrieve all payment information from the blockchain network against a specific Document ID.
   - `GET /api/date-range`: API to retrieve all document uploads and payments within a specified date range for a specific Contributor ID.

## APIs Detailed Definition Information

- **API 1: Push Document Upload into Network**
  - **Endpoint:** `/api/upload`
  - **Method:** POST
  - **Description:** This API allows contributors to upload documents into the network.
  - **Input Parameters:**
    - `documentId`: The unique identifier for the document.
    - `contributorKey`: The key of the contributor uploading the document.
  - **Procedure:**
    - Receive the Document ID and Contributor Key from the request.
    - Simulate storing the transaction in the blockchain.
    - Simulate uploading the document to IPFS.
    - Return the Transaction Hash Key.
  - **Example Request:**
    ```json
    POST /api/upload
    Content-Type: application/json

    {
      "documentId": "12345",
      "contributorKey": "abcd1234"
    }
    ```
  - **Example Response:**
    ```json
    HTTP/1.1 200 OK
    Content-Type: application/json

    {
      "transactionHashKey": "0xabc123def456"
    }
    ```

- **API 2: Push Payment Transaction into Network**
  - **Endpoint:** `/api/payment`
  - **Method:** POST
  - **Description:** This API allows requesters to make payment transactions in the network.
  - **Input Parameters:**
    - `documentId`: The unique identifier for the document.
    - `paymentData`: The payment information including amount and date timestamp.
  - **Procedure:**
    - Receive the Document ID and Payment Data from the request.
    - Simulate storing the payment transaction in the blockchain.
    - Return the Transaction Hash Key.
  - **Example Request:**
    ```json
    POST /api/payment
    Content-Type: application/json

    {
      "documentId": "12345",
      "paymentData": {
        "amount": 100.00,
        "dateTime": "2023-07-10T09:00:00Z"
      }
    }
    ```
  - **Example Response:**
    ```json
    HTTP/1.1 200 OK
    Content-Type: application/json

    {
      "transactionHashKey": "0xdef789ghi012"
    }
    ```

- **API 3: Pull Transactions Information from Blockchain Network**
  - **Endpoint:** `/api/transactions`
  - **Method:** GET
  - **Description:** This API allows retrieval of all transaction information for document uploads against a specific Document ID and Contributor ID.
  - **Input Parameters:**
    - `documentId`: The unique identifier for the document.
    - `contributorId`: The ID of the contributor.
  - **Procedure:**
    - Receive the Document ID and Contributor ID from the request.
    - Simulate querying the blockchain to collect the list of transactions for document uploads.
    - Return the list of transactions.
  - **Example Request:**
    ```
    GET /api/transactions?documentId=12345&contributorId=abc123
    ```
  - **Example Response:**
    ```json
    HTTP/1.1 200 OK
    Content-Type: application/json

    {
      "transactions": [
        {
          "transactionId": "tx123",
          "documentId": "12345",
          "contributorId": "abc123",
          "transactionType": "upload",
          "timestamp": "2023-07-10T09:30:00Z"
        },
        {
          "transactionId": "tx456",
          "documentId": "12345",
          "contributorId": "abc123",
          "transactionType": "upload",
          "timestamp": "2023-07-11T14:00:00Z"
        }
      ]
    }
    ```

...

4. **API 4: Pull Payment Information from Blockchain Network**
   - Method: GET
   - Endpoint: `http://localhost:3000/api/payments?documentId=12345`
   - Expected Response:
     ```json
     HTTP/1.1 200 OK
     Content-Type: application/json

     {
       "payments": [
         {
           "paymentId": "pmt123",
           "documentId": "12345",
           "amount": 100.00,
           "timestamp": "2023-07-10T10:00:00Z"
         },
         {
           "paymentId": "pmt456",
           "documentId": "12345",
           "amount": 50.00,
           "timestamp": "2023-07-11T16:30:00Z"
         }
       ]
     }
     ```

5. **API 5: Date Range Query for Document Uploads and Payments**
   - Method: GET
   - Endpoint: `http://localhost:3000/api/date-range?startDate=2023-07-01&endDate=2023-07-10&contributorId=abc123`
   - Expected Response:
     ```json
     HTTP/1.1 200 OK
     Content-Type: application/json

     {
       "transactions": [
         {
           "transactionId": "tx123",
           "documentId": "12345",
           "contributorId": "abc123",
           "transactionType": "upload",
           "timestamp": "2023-07-01T09:30:00Z"
         },
         {
           "transactionId": "tx789",
           "documentId": "67890",
           "contributorId": "abc123",
           "transactionType": "upload",
           "timestamp": "2023-07-05T14:00:00Z"
         }
       ],
       "payments": [
         {
           "paymentId": "pmt123",
           "documentId": "12345",
           "amount": 100.00,
           "timestamp": "2023-07-02T10:00:00Z"
         },
         {
           "paymentId": "pmt456",
           "documentId": "12345",
           "amount": 50.00,
           "timestamp": "2023-07-07T16:30:00Z"
         }
       ]
     }
     ```

## Testing the APIs

You can test the APIs using a tool like Postman. Here are the steps to test each API:

1. **API 1: Push Document Upload into Network**
   - Method: POST
   - Endpoint: `http://localhost:3000/api/upload`
   - Body (raw JSON):
     ```json
     {
       "documentId": "12345",
       "contributorKey": "abcd1234"
     }
     ```
   - Expected Response:
     ```json
     HTTP/1.1 200 OK
     Content-Type: application/json

     {
       "transactionHashKey": "0xabc123def456"
     }
     ```

2. **API 2: Push Payment Transaction into Network**
   - Method: POST
   - Endpoint: `http://localhost:3000/api/payment`
   - Body (raw JSON):
     ```json
     {
       "documentId": "12345",
       "paymentData": {
         "amount": 100.00,
         "dateTime": "2023-07-10T09:00:00Z"
       }
     }
     ```
   - Expected Response:
     ```json
     HTTP/1.1 200 OK
     Content-Type: application/json

     {
       "transactionHashKey": "0xdef789ghi012"
     }
     ```

3. **API 3: Pull Transactions Information from Blockchain Network**
   - Method: GET
   - Endpoint: `http://localhost:3000/api/transactions?documentId=12345&contributorId=abc123`
   - Expected Response:
     ```json
     HTTP/1.1 200 OK
     Content-Type: application/json

     {
       "transactions": [
         {
           "transactionId": "tx123",
           "documentId": "12345",
           "contributorId": "abc123",
           "transactionType": "upload",
           "timestamp": "2023-07-10T09:30:00Z"
         },
         {
           "transactionId": "tx456",
           "documentId": "12345",
           "contributorId": "abc123",
           "transactionType": "upload",
           "timestamp": "2023-07-11T14:00:00Z"
         }
       ]
     }
     ```

4. **API 4: Pull Payment Information from Blockchain Network**
   - Method: GET
   - Endpoint: `http://localhost:3000/api/payments?documentId=12345`
   - Expected Response:
     ```json
     HTTP/1.1 200 OK
     Content-Type: application/json

     {
       "payments": [
         {
           "paymentId": "pmt123",
           "documentId": "12345",
           "amount": 100.00,
           "timestamp": "2023-07-10T10:00:00Z"
         },
         {
           "paymentId": "pmt456",
           "documentId": "12345",
           "amount": 50.00,
           "timestamp": "2023-07-11T16:30:00Z"
         }
       ]
     }
     ```

5. **API 5: Date Range Query for Document Uploads and Payments**
   - Method: GET
   - Endpoint: `http://localhost:3000/api/date-range?startDate=2023-07-01&endDate=2023-07-10&contributorId=abc123`
   - Expected Response:
     ```json
     HTTP/1.1 200 OK
     Content-Type: application/json

     {
       "transactions": [
         {
           "transactionId": "tx123",
           "documentId": "12345",
           "contributorId": "abc123",
           "transactionType": "upload",
           "timestamp": "2023-07-01T09:30:00Z"
         },
         {
           "transactionId": "tx789",
           "documentId": "67890",
           "contributorId": "abc123",
           "transactionType": "upload",
           "timestamp": "2023-07-05T14:00:00Z"
         }
       ],
       "payments": [
         {
           "paymentId": "pmt123",
           "documentId": "12345",
           "amount": 100.00,
           "timestamp": "2023-07-02T10:00:00Z"
         },
         {
           "paymentId": "pmt456",
           "documentId": "12345",
           "amount": 50.00,
           "timestamp": "2023-07-07T16:30:00Z"
         }
       ]
     }
     ```

## Important Note

This sample application is intended for demonstration purposes only and does not implement a fully functional blockchain or IPFS system. It is designed to showcase the concept of using APIs for document upload and payment transactions within a blockchain network.
