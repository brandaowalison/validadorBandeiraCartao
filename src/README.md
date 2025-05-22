# Validador de Bandeiras de Cartão de Crédito

## Desafio Bootcamp Microsoft 50 anos - GitHub Copilot

Este projeto foi desenvolvido como parte do desafio proposto no bootcamp de 50 anos da Microsoft - GitHub Copilot, no módulo "Criando um Validador de Bandeiras de Cartão de Crédito com o GitHub Copilot". O objetivo é criar, em JavaScript, uma função capaz de identificar a bandeira de um cartão de crédito a partir do seu número, utilizando os padrões conhecidos de cada bandeira.

## Como funciona

O validador utiliza expressões regulares para identificar as seguintes bandeiras:
- MasterCard
- Visa
- American Express
- Diners Club
- Discover
- EnRoute
- JCB
- Voyager
- HiperCard
- Aura

Basta informar o número do cartão (com ou sem espaços) e a função retorna a bandeira correspondente ou "Bandeira não identificada".

## Exemplo de uso

```javascript
const { getCardFlag } = require('./src/index');

console.log(getCardFlag('4111111111111111')); // Visa
console.log(getCardFlag('5555555555554444')); // MasterCard
console.log(getCardFlag('378282246310005'));  // American Express
```

