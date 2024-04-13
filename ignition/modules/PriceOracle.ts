import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PriceOracleModule = buildModule("PriceOracleModule", (m) => {
  const priceOracle = m.contract("PriceOracle");

  return { priceOracle };
});

export default PriceOracleModule;
