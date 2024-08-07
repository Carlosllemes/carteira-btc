const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

// Definindo a rede Bitcoin de teste (testnet)
const network = bitcoin.networks.testnet;

// Caminho de derivação para carteiras HD SegWit nativo (BIP84) para poder usar o faucet https://bitcoinfaucet.uo1.net/send.php
const path = `m/84'/1'/0'/0`;

// Gerando uma frase mnemônica (12 palavras) para a seed
let mnemonic = bip39.generateMnemonic();

// Convertendo a frase mnemônica para uma seed
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Criando a raiz da carteira HD a partir da seed
let root = bip32.fromSeed(seed, network);

// Derivando um caminho específico na carteira HD para criar uma conta
let account = root.derivePath(path);

// Derivando a primeira chave pública dessa conta
let node = account.derive(0).derive(0);

// Criando um endereço de Bitcoin SegWit nativo a partir da chave pública
let btcAddress = bitcoin.payments.p2wpkh({
    pubkey: node.publicKey,
    network: network,
}).address;

// Exibindo informações sobre a carteira gerada
console.log("Carteira gerada");
console.log("Endereço: ", btcAddress);
console.log("Chave privada: ", node.toWIF());
console.log("Seed: ", mnemonic);
