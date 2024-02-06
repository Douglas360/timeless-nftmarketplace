const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  // Configure networks (Localhost, Rinkeby, etc.)
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    goerli: {
      provider: function () {
        return new HDWalletProvider({
          mnemonic: {
            phrase:
              "ugly swift salute dismiss fix crop moral shrug bench hat misery grunt",
          },
          providerOrUrl: `https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
        });
      },
      network_id: "5", // Goerli's network id
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
