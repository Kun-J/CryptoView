const { Web3 } = require('web3');
const web3 = new Web3(process.env.INFURA_URL);

// Task 1
const NFT_ABI = [
  {
    "inputs": [{"name": "tokenId","type": "uint256"}],
    "name": "tokenURI",
    "outputs": [{"name": "","type": "string"}],
    "stateMutability": "view",
    "type": "function"
  }
];

//Task 4
const ERC20_ABI = [
  {
    "inputs": [{"name": "account","type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "","type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [{"name": "","type": "uint8"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [{"name": "","type": "string"}],
    "stateMutability": "view",
    "type": "function"
  }
];

module.exports = {
  web3,
  NFT_ABI,
  ERC20_ABI
};