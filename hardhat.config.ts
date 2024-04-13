import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config({silent: true});

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  defaultNetwork:'nexis',
  networks:{
    nexis: {
      url: `https://evm-testnet.nexis.network`,
      chainId: 2370,
      accounts: [process.env.PRIVATE_KEY!],
    }
  }
};

export default config;
