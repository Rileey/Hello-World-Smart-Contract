/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config({path:__dirname+'/.env'})
//loads dotenv information
require('@nomiclabs/hardhat-ethers')
// helps with deploy script

const { API_URL, PRIVATE_KEY } = process.env

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    rinkeby: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
  }

};
