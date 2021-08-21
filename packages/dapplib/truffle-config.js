require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remain smile hidden clinic blue survey'; 
let testAccounts = [
"0xcb957463cba0ce9810c017b452a700c3f50e862fe4495a50279d14420a1c05d5",
"0x5b11edd2ef07b674840fbdf52462c5c8a8a8d3e8b64640cdf8069f3f9556345f",
"0xf9ab900093abae2f6343fbc92357a4e62bd30e8203e144940ddbdf8535cdcc70",
"0xb6089122b8503b9b804c58a6719a1c17402d42232f844243acb1154b0bf63c9f",
"0x03f991feb06ab624f845a325d6e0894a615645fc4f4e8c7e39ab3aa7bd37538d",
"0x8660fc48d7bb979a1fd9cf0fff1a5a0bedde29d7839d03b39513b64eee129a62",
"0xd7b916a5c666c762cd3feb30bcfc966a9a453afa570bdf30ead6e926adfc95f5",
"0x9e14e892777f8204cbcfe8d09bf095084b4b8aa3597b5531724649e2e170ed75",
"0xe2f8815ad7bb992ed8c0564b809ec985bd6129fd58aa669ec2e9b7a1b6ca8b10",
"0x88d36ce5e623eb6e0b33408d7493fa33c42c76ef56a95873ce15833f04be64a0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


