require("babel-register")({
    ignore: /node_modules\/(?!zeppelin-solidity)/
});

require("babel-polyfill");

const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "twelve words you can find in metamask/settings/reveal seed words blabla";
const INFURA_API_KEY = 'NMK0JZRAz8HUe7tRcwvo';

module.exports = {
    // See <https://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*" // Match any network id
        },
        ropsten: {
            provider: () => {
                return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + INFURA_API_KEY)
            },
            network_id: 3
        }
    }
};