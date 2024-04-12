const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  // Configure networks (Localhost, Rinkeby, etc.)
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    sepolia: {
      provider: function () {
        return new HDWalletProvider({
          mnemonic: {
            phrase:
              "ugly swift salute dismiss fix crop moral shrug bench hat misery grunt",
          },
          providerOrUrl: `https://eth-sepolia.g.alchemy.com/v2/eW-tnP4AAByG93fex0dqqcE2i2u008GP`,
        });
      },
      network_id: 11155111,
      gas: 5500000,
      gasPrice: 10000000000, // 10 Gwei
    },
  },

  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.11",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
