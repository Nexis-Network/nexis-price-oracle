// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract PriceOracle {
    uint256 private _price;
    address private _owner;

    constructor() {
        _owner = msg.sender;
    }

    /**
    * This method will be called by the Nexis Oracle Middleware
    * with the result returned from your oracle
    */
    function setPrice(uint256 price) external {
        require(msg.sender == _owner, "Only ower can call this");
        _price = price;
    }

    /**
    * This function simply returns the price set by the oracle
    */
    function getPrice() external view returns (uint256) {
        return _price;
    }
}