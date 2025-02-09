const { web3, ERC20_ABI } = require('../lib/web3');

exports.getTokenBalance = async (req, res) => {
  try {
    const { contractAddress, walletAddress } = req.params;
    // Initialize contract
    const contract = new web3.eth.Contract(ERC20_ABI, contractAddress);

    const [decimal, symbol] = await Promise.all([
      contract.methods.decimals().call(),
      contract.methods.symbol().call(),
    ]);

    const rawBalance = await contract.methods.balanceOf(walletAddress).call()
    const decimals = web3.utils.toNumber(decimal);

    const formattedBalance = (Number(rawBalance) / Math.pow(10, decimals));

    res.json({
      status: 'success',
      data: {
        contractAddress: contractAddress,
        symbol,
        walletAddress: walletAddress,
        balance: formattedBalance,
        decimal: decimals,
      },
    });

  } catch (error) {
    console.error('Token Balance Error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to retrieve token balance',
      error: error.message
    });
  }
};