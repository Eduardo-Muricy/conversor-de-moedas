const convertButton = document.querySelector('.convertButton')
const currencySelect = document.querySelector('.currency-select')
const currencySelectFirst = document.querySelector('.currency-select-first')


async function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueConverted = document.querySelector('.currency-value')


    const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high





    if (currencySelectFirst.value === "dolar") {

        if (currencySelect.value === "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * dolarToday / euroToday)

        }
        if (currencySelect.value === "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)
        }

            if (currencySelect.value === "real") {
                currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format(inputCurrencyValue * dolarToday)
            }


            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)

        
    }













    if (currencySelectFirst.value === "real") {

        if (currencySelect.value === "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolarToday)
        }

        if (currencySelect.value === "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euroToday)
        }
        
        if(currencySelect.value==="real"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue )
        }
        

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    }





    if(currencySelectFirst.value==="euro"){

        if (currencySelect.value === "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * euroToday/dolarToday)
        }

        if(currencySelect.value==="real"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * euroToday)
        }

        if(currencySelect.value==="euro"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)
        }
            
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)


    }











}



function changeCurrency() {
    const currencyName = document.querySelector('.currency-name')
    const flag = document.querySelector('.flag')
    const currencyNameFirst = document.querySelector('.current-name')
    const flagFirst = document.querySelector('.flag-first')

    if (currencySelectFirst.value === "dolar") {
        flagFirst.src = "img/estados-unidos (1) 1.png"
        currencyNameFirst.innerHTML = "Dólar"
    }

    if (currencySelectFirst.value === "real") {
        flagFirst.src = "img/brasil 2.png"
        currencyNameFirst.innerHTML = "Real"
    }

    if (currencySelectFirst.value === "euro") {
        flagFirst.src = "img/euro.png"
        currencyNameFirst.innerHTML = "Euro"
    }







    if (currencySelect.value === "real") {
        flag.src = "img/brasil 2.png"
        currencyName.innerHTML = "Real"
    }


    if (currencySelect.value === "dolar") {
        flag.src = "img/estados-unidos (1) 1.png"
        currencyName.innerHTML = "Dólar"
    }

    if (currencySelect.value === "euro") {
        flag.src = "img/euro.png"
        currencyName.innerHTML = "Euro"
    }

    convertValues()

}



currencySelectFirst.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)