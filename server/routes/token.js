const express = require('express');
const { param } = require('express-validator');
const validateRequest = require('../middleware/validator');
const tokenController = require('../controllers/tokenBalController');

const router = express.Router();

router.get('/:contractAddress/balance/:walletAddress',
  [
    param('contractAddress')
      .isEthereumAddress()
      .withMessage('Invalid token contract address'),
    param('walletAddress')
      .isEthereumAddress()
      .withMessage('Invalid wallet address'),
  ],
  validateRequest,
  tokenController.getTokenBalance
);

module.exports = router;