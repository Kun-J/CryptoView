const NFTMetadata = require('../models/nftModel');
const { web3, NFT_ABI } = require('../lib/web3');
const axios = require('axios');

exports.getNFTMetadata = async (req, res) => {
  try {
    const { contractAddress, tokenId } = req.params;

    let metadata = await NFTMetadata.findOne({ 
      contractAddress: contractAddress.toLowerCase(), 
      tokenId 
    });

    if (metadata && (Date.now() - metadata.retrievedAt < 3600000)) {
      return res.json({
        status: 'success',
        data: metadata,
        source: 'cache'
      });
    }

    
    const contract = new web3.eth.Contract(NFT_ABI, contractAddress);
    const tokenUri = await contract.methods.tokenURI(tokenId).call();
    const formattedUri = tokenUri.replace('ipfs://', 'https://ipfs.io/ipfs/');
    const response = await axios.get(formattedUri);
    const nftData = response.data;

    metadata = await NFTMetadata.findOneAndUpdate(
      { 
        contractAddress: contractAddress.toLowerCase(), 
        tokenId 
      },
      {
        name: nftData.name,
        description: nftData.description,
        imageUrl: nftData.image || nftData.image_url,
        retrievedAt: Date.now()
      },
      { 
        upsert: true, 
        new: true,
        runValidators: true
      }
    );

    res.json({
      status: 'success',
      data: metadata,
      source: 'blockchain'
    });

  } catch (error) {
    console.error('NFT Metadata Error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to retrieve NFT metadata',
      error: error.message
    });
  }
};