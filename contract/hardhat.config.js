// https://eth-goerli.alchemyapi.io/v2/xmuIn6-KZlSQMo0BvGitvyCegc5-gOjh

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/xmuIn6-KZlSQMo0BvGitvyCegc5-gOjh",
      accounts: [
        "5240512e661c34bc77d6a65a8b20aba7ec17b29f491f4c975499980e4f79cd06",
      ],
    },
  },
};
