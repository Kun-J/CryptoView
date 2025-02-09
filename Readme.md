# CryptoView
**Getting Started:**

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Kun-J/CryptoView.git
   ```

2. **Install Dependencies:**

   ```bash
   cd CryptoView
   npm install
   ```

3. **Set up Environment Variables:**

   - Create a `.env` file at the root of the project.
   - Add the following environment variables:
     ```
     SECRET=cryptoviewsecret
     MONG_URI=your_key
     PORT=5000
     VITE_X_CG_DEMO_API_KEY=CG-1t8kdBZJMA1YUmpjF5nypF6R
     INFURA_URL=your_api_key
     ```

4. **Start the Server:**

   ```bash
   npm start
   ```

5. **Access the Application:**
   Open your browser and navigate to `http://localhost:5173`.


6. **Testing Guide for API on Postman**<br />

*Task 1*  : NFT Metadata Retrieval API <br />
Retrieves metadata for a specific NFT by contract address and token ID. Includes caching mechanism to improve performance.

**API Format**
```
GET http://localhost:5000/api/nft/{contractAddress}/{tokenId}
```
**Example**
```
GET http://localhost:5000/api/nft/0xbAbaFdd8045740449a42B788a26E9b3A32F88aC1/1
```
**Response Format**
```
{
  status: "success" | "error",
  data?: {
    contractAddress: string,
    tokenId: string,
    name: string,
    description: string,
    imageUrl: string,
    retrievedAt: Date,
    createdAt: Date,
    updatedAt: Date
  },
  source?: "cache" | "blockchain",
  error?: string,
  message?: string
}
```
**Notes**
- Supports IPFS URLs automatically
- Returns source of data (cache/blockchain)

*Task 4* : Token Balance Lookup API <br />
Retrieves the balance of a specific ERC20 token for a given wallet address.

**API Format**
```
GET http://localhost:5000/token/{contractAddress}/balance/{walletAddress}
```
**Example**
```
GET http://localhost:5000/api/token/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/balance/0x742d35Cc6634C0532925a3b844Bc454e4438f44e
```
**Response Format**
```
{
  status: "success" | "error",
  data?: {
    contractAddress: string,
    symbol: string,
    walletAddress: string,
    balance: number,
    decimals: number
  },
  error?: string,
  message?: string
}
```
**Notes**
Automatically handles token decimals
Supports any ERC20 token

**Project Structure:**

```
crypto-trading-platform/
├── src/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── App.js
│   └── index.js
├── public/
└── server/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    └── server.js
```

**Technologies Used:**

- **Frontend:** React, Redux, Axios, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB, JWT
- **API:** [Cryptocurrency API](https://example.com/api)
**Contributing:**

Contributions are welcome! Please create a pull request with your changes.

**License:**

This project is licensed under the MIT License.
