const mongoose = require('mongoose');
const { Schema } = mongoose;

const nftMetadataSchema = new Schema({
  contractAddress: {
    type: String,
    required: true,
    lowercase: true
  },
  tokenId: {
    type: String,
    required: true
  },
  name: String,
  description: String,
  imageUrl: String,
  retrievedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

nftMetadataSchema.index({ contractAddress: 1, tokenId: 1 }, { unique: true });

module.exports = mongoose.model('NFTMetadata', nftMetadataSchema);