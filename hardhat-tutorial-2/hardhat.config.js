/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-waffle');

const INFURA_URL = 'https://ropsten.infura.io/v3/3bcf3dc6d78a49a1a69e16f0dc4d8c5d';
const PRIVATE_KEY = '45553064b1ce64a8d1ec0bbbc94a32e0ca25b1d8e3c3af1d01c5980d377f9f00';
module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: `${INFURA_URL}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};