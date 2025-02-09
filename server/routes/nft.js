const express = require('express');
const { param } = require('express-validator');
const validateRequest = require('../middleware/validator');
const nftController = require('../controllers/nftController');

const router = express.Router();

router.get('/:contractAddress/:tokenId',
  [
    param('contractAddress')
      .isEthereumAddress()
      .withMessage('Invalid Ethereum contract address'),
    param('tokenId')
      .isInt({ min: 0 })
      .withMessage('Token ID must be a positive integer'),
  ],
  validateRequest,
  nftController.getNFTMetadata
);

module.exports = router;