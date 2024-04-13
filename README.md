# Nexis Token Price Oracle

This project demonstrates a basic Hardhat use case for the Nexis Token (NZT) price oracle. The project includes a sample contract, a test for that contract, and a Hardhat Ignition module that deploys the contract.


## What is an Oracle Price Feed?
An oracle price feed is a mechanism used in decentralized finance (DeFi) to provide external price information to smart contracts. It is essential for protocols that require accurate and up-to-date price data, such as decentralized exchanges (DEXs) and lending platforms.

In the context of the Nexis Token, the price oracle ensures that the token's price is accurately reflected in the ecosystem, enabling users to make informed decisions when trading or interacting with the token.

Feel free to modify and expand this README as needed for your project.


## Contract Overview

The PriceOracle contract provides a simple mechanism for setting and retrieving the price of the Nexis Token. It includes the following functions:

setPrice(uint256 price): Allows the owner of the contract to set the price of the Nexis Token.
getPrice(): Returns the current price of the Nexis Token.
The contract is designed to be used with the Nexis Oracle Middleware, which calls the setPrice method with the result returned from the oracle.

<img width="700" alt="Screenshot 2024-04-13 at 2 31 48 PM" src="https://github.com/0xdetonation/nexis-price-oracle/assets/166897641/76c7a912-d4da-42ae-aae6-2937722b2588">

## Running and Deployment

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/PriceOracle.ts
```
