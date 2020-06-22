let formElement = document.querySelector(".js-form")
let amountToExchange = document.querySelector(".js-amountToExchange")
let currencyToExchange = document.querySelector(".js-currencyToExchange")
let exchangedCurrency = document.querySelector(".js-exchangedCurrency")
let formResult = document.querySelector(".js-result")

let plnValue;
let eurRate = 4.47;
let usdRate = 3.99;
let gbpRate = 4.96;
let chfRate = 4.19;

formElement.addEventListener("submit", (ev) => {
    ev.preventDefault();

    let amount = +amountToExchange.value;
    let whichCurrency = currencyToExchange.value;
    let forWhichCurrency = exchangedCurrency.value;
    let exchangeResult;

    console.log(amount, whichCurrency, forWhichCurrency)

    switch (whichCurrency) {
        case "PLN":
            plnValue = amount;
            break;
        case "EUR":
            plnValue = amount * eurRate;
            break;
        case "USD":
            plnValue = amount * usdRate;
            break;
        case "GBP":
            plnValue = amount * gbpRate;
            break;
        case "CHF":
            plnValue = amount * chfRate;
            break;
    }

    switch (forWhichCurrency) {
        case "PLN":
            exchangeResult = plnValue;
            break;
        case "EUR":
            exchangeResult = plnValue / eurRate;
            break;
        case "USD":
            exchangeResult = plnValue / usdRate;
            break;
        case "GBP":
            exchangeResult = plnValue / gbpRate;
            break;
        case "CHF":
            exchangeResult = plnValue / chfRate;
            break;
    }

    formResult.innerHTML = `<strong>${amount.toFixed(2)} ${whichCurrency} to ${exchangeResult.toFixed(2)} ${forWhichCurrency}</strong>`
});
