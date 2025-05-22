function getCardFlag(cardNumber) {
    const sanitized = cardNumber.replace(/\D/g, '');

    const patterns = [
        { flag: 'MasterCard', regex: /^(5[1-5][0-9]{14}|2(2[2-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[01][0-9]{13}|720[0-9]{12}))$/ },
        { flag: 'Visa', regex: /^4[0-9]{12}(?:[0-9]{3})?$/ },
        { flag: 'American Express', regex: /^3[47][0-9]{13}$/ },
        { flag: 'Diners Club', regex: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ },
        { flag: 'Discover', regex: /^6(?:011|5[0-9]{2})[0-9]{12}$/ },
        { flag: 'EnRoute', regex: /^(2014|2149)[0-9]{11}$/ },
        { flag: 'JCB', regex: /^(?:2131|1800|35\d{3})\d{11}$/ },
        { flag: 'Voyager', regex: /^8699[0-9]{11}$/ },
        { flag: 'HiperCard', regex: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/ },
        { flag: 'Aura', regex: /^50[0-9]{14,17}$/ }
    ];

    for (const { flag, regex } of patterns) {
        if (regex.test(sanitized)) {
            return flag;
        }
    }
    return 'Bandeira não identificada';
}

// Exemplo de uso:
console.log(getCardFlag('30218878322082')); // Visa
console.log(getCardFlag('5555555555554444')); // MasterCard
console.log(getCardFlag('378282246310005'));  // American Express

module.exports = { getCardFlag };