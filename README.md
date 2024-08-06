# Gerador de Carteiras de Bitcoin

## Introdução

Neste desafio de projeto, vamos:
- Construir o nosso gerador de carteiras de bitcoin;
- Importar para um software gerenciador de carteiras;
- Realizar transações de envio e recebimento de bitcoin.

## Etapas do Desafio

1. Desenvolver o gerador de carteiras;
2. Importar uma carteira gerada no Electrum;
3. Receber e enviar transações.

## Estrutura do Desafio

Utilizaremos Node.js para criar o gerador de carteiras e importaremos para o Electrum para gerenciar as transações.

![Estrutura do Desafio](./path_to_your_image.png)

## Pré-requisitos

- Node.js
- Electrum

## Instalação

Clone este repositório e instale as dependências necessárias:

`#npm install bip39 bip32@0.2.0.6 bitcoinjs-lib --save`


### Gerando uma Carteira

Para gerar uma nova carteira, execute o arquivo `gerarCarteira.js`.

### Importando para o Electrum

1. Abra o Electrum.
2. Vá em `File` > `New/Restore`.
3. Siga as instruções para importar a carteira usando as informações geradas.

### Realizando Transações

Depois de importar sua carteira para o Electrum, você pode começar a enviar e receber transações de bitcoin.

## Contribuição

1. Fork este repositório.
2. Crie uma branch com a sua feature: `git checkout -b minha-feature`
3. Commit suas mudanças: `git commit -m 'Minha nova feature'`
4. Push para a branch: `git push origin minha-feature`
5. Envie um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
