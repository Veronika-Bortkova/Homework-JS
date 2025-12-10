// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400


let arr = [{currency:"USD",value:25},{currency:"EUR",value:42}];

function exchange (summaUAH, currencyValues, exchangeCurrency){
    let convertSum;
    for (const currencyValueselment of currencyValues) {
        if (exchangeCurrency===currencyValueselment["currency"]){
            convertSum = summaUAH/currencyValueselment["value"];
        }
    }
    return convertSum;
}

console.log(exchange(10000, arr,"EUR"));