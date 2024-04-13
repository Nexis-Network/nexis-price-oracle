const PriceOracleAddress = require("./ignition/deployments/chain-2370/deployed_addresses.json");
const PriceOracleAbi = require("./ignition/deployments/chain-2370/artifacts/PriceOracleModule#PriceOracle.json");
const ethers = require('ethers');
const express = require('express');
const { interval } = require('rxjs');
const { map } = require('rxjs/operators');
require('dotenv').config({silent: true});

const app = express();

const privateKey = process.env.PRIVATE_KEY;
const provider = new ethers.providers.JsonRpcProvider('https://evm-testnet.nexis.network');

const signer = new ethers.Wallet(privateKey, provider);

const contract = new ethers.Contract(PriceOracleAddress["PriceOracleModule#PriceOracle"], PriceOracleAbi.abi, signer);

//todo replace with coingecko url
const updatePrice = async () => {
    try {     
        const x = await contract.setPrice(1111,{ gasPrice: ethers.utils.parseUnits("60", 'gwei')});
        console.log(x)
        console.log(`Price updated to: ${1111}`);
    } catch (error) {
        console.log(error);
    }
};

// replace with coingecko observer
updatePrice()

app.get("/", (req, res) => {
    res.send("Nexis Price Oracle Status: ✅ Connected");
});

app.get("/price", async(req, res) => {
    try {
        res.send((await contract.getPrice()).toString());
    } catch (error) {
        console.log(error);
        res.send({
            error:"failed to call contract"
        })
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
