// Importando as dependências necessárias
const bip32 = require('bip32');  // Biblioteca para criar e gerenciar carteiras HD (Hierarchical Deterministic)
const bip39 = require('bip39');  // Biblioteca para gerar mnemonics (frases mnemônicas) para seeds
const bitcoin = require('bitcoinjs-lib');  // Biblioteca principal para interagir com a rede Bitcoin

// Definindo a rede Bitcoin de teste (testnet)
const network = bitcoin.networks.testnet;

// Caminho de derivação para carteiras HD (conforme o padrão BIP49)
const path = `m/49'/1'/0'/0`;

// Gerando uma frase mnemônica (12 palavras) para a seed
let mnemonic = bip39.generateMnemonic();

// Convertendo a frase mnemônica para uma seed
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Criando a raiz da carteira HD a partir da seed
let root = bip32.fromSeed(seed, network);

// Derivando um caminho específico na carteira HD para criar uma conta
let account = root.derivePath(path);

// Derivando a primeira conta (conta 0) e a primeira chave dessa conta
let node = account.derive(0).derive(0);

// Criando um endereço de Bitcoin a partir da chave pública da conta derivada
let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address;

// Exibindo informações sobre a carteira gerada
console.log("Carteira gerada");
console.log("Endereço: ", btcAddress);  // Endereço Bitcoin gerado
console.log("Chave privada: ", node.toWIF());  // Chave privada da conta em formato WIF (Wallet Import Format)
console.log("Seed: ", mnemonic);  // Frase mnemônica usada para gerar a seed
