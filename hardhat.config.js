require("@nomicfoundation/hardhat-toolbox");
//require("@nomicfoundation/hardhat-ethers");
require('dotenv').config();

const { API_URL_KEY, PRIVATE_KEY } = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL_KEY,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
};
