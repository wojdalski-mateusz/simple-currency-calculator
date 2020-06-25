{
    const calculateResult = (amount, whichCurrency, forWhichCurrency) => {

        let plnValue;
        const eurRate = 4.47;
        const usdRate = 3.99;
        const gbpRate = 4.96;
        const chfRate = 4.19;

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
                return plnValue;

            case "EUR":
                return plnValue / eurRate;

            case "USD":
                return plnValue / usdRate;

            case "GBP":
                return plnValue / gbpRate;

            case "CHF":
                return plnValue / chfRate;
        }
    };

    const updateResultText = (amount, whichCurrency, exchangeResult, forWhichCurrency) => {
        const formResult = document.querySelector(".js-result")
        formResult.innerHTML = `<strong>${amount.toFixed(2)} ${whichCurrency} to ${exchangeResult.toFixed(2)} ${forWhichCurrency}</strong>`
    }

    const onFormSubmit = (ev) => {
        ev.preventDefault();

        const amountToExchange = document.querySelector(".js-amountToExchange")
        const currencyToExchange = document.querySelector(".js-currencyToExchange")
        const exchangedCurrency = document.querySelector(".js-exchangedCurrency")
        const amount = +amountToExchange.value;
        const whichCurrency = currencyToExchange.value;
        const forWhichCurrency = exchangedCurrency.value;
        let exchangeResult = calculateResult(amount, whichCurrency, forWhichCurrency);

        updateResultText(amount, whichCurrency, exchangeResult, forWhichCurrency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}
