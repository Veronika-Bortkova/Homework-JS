// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б

let sum = (a,b) => a*b;
console.log(sum(10, 20));

//---------------------------------------------------------------------------------------

// – створити функцію, яка обчислює та повертає площу кола з радіусом r

// let squareСircle = (r) => Math.PI*r*r;
// console.log(squareСircle(10));

//----------------------------------------------------------------------------------------

// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

//
// let squareСylinder = (r,h) => 2*Math.PI*r*r + 2*Math.PI*r*h;
// console.log(squareСylinder(10, 20));

//----------------------------------------------------------------------------------------

// – створити функцію, яка приймає масив та виводить кожен його елемент

// let arrNumbers =  [1,2,3,4,5];
// let number = (arr) => {
//     for (itemNumber of arr){
//         console.log(itemNumber)
//         }
//     };
// number(arrNumbers);


// ----------------------------------------------------------------------------------------

// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент

// let paragraf = (text) => document.write(`<p> ${text} </p>`);
// paragraf("Hello");
// paragraf("Good");


// -----------------------------------------------------------------------------------------

// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let textList = (text)=> document.write(`
//                     <ul>
//                         <li>${text}</li>
//                         <li>${text}</li>
//                         <li>${text}</li>
//                     </ul>
//
// `);
// textList("Book");
// textList("Green");


// -------------------------------------------------------------------------------------------

// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let textListNumber = (numberLi,text) => {
//     document.write(`<ul>`);
//
//     for (let number = 0; number < numberLi; number++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// textListNumber(3,"cuff");

// --------------------------------------------------------------------------------------------

// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// let arr = [1,2,"Mars", true];
// let listArr = (arrList) =>{
//     document.write(`<ul>`);
//     for (const listArrElement of arrList) {
//         document.write(`
//         <li>${listArrElement}</li>
//         `);
//     }
//     document.write(`</ul>`);
// }
//
// listArr(arr);

// ------------------------------------------------------------------------------------------------

// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

// let arrUsers = [{id:1, name:"Nica", age:27},{id:2, name:"Vica", age:47}, {id:3, name:"Lica", age:35}];
//
// let objectBlok = (arr) => {
//     for (const arrElement of arr) {
//         document.write(`<div>`);
//         for (const arrElementKey in arrElement) {
//             document.write(`${arrElementKey} - ${arrElement[arrElementKey]}, `);
//         }
//         document.write(`</div>`);
//     }
// }
//
// objectBlok(arrUsers);

//---------------------------------------------------------------------------------------------------

// – створити функцію, яка повертає найменше число з масиву

// let arr1 = [-100,5,7,20,-20];
// let minNumber = (arr)=>{
//     let min = arr[0];
//     for (let i = 1; i<arr.length; i++) {
//         if (min>arr[i]){
//             min = arr[i];
//         }
//     }
//     console.log(min)
// }
//
// minNumber([200,1,2,3,10,20,0]);
// minNumber(arr1);

// ---------------------------------------------------------------------------------------------------

// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


// let arrNumbers = [10,20,40,30];
// let sum = (arr) =>{
//     let sumNumber = 0;
//     for (const arrElement of arr) {
//         sumNumber = sumNumber+arrElement;
//     }
//     console.log(sumNumber);
// }
//
// sum(arrNumbers);
// sum([5,10,5,20]);

// -----------------------------------------------------------------------------------------------------

// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах


// let arrNumbers = [1,2,3,4,5];
// let swap = (arr,index1,index2) =>{
//     let tempIndex = arr[index2];
//     arr[index2] = arr[index1];
//     arr[index1] = tempIndex;
//     console.log(arr);
// }
//
// swap(arrNumbers,2,4);
// swap([10,20,30,40,50],0,1);

//--------------------------------------------------------------------------------------------------------
//
// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250

// let arrСurrencies= [{currency:"USD",value:40},{currency:"EUR",value:42}];
// let exchangeСurrency = (sum, arrСurrency, typeCurrency) =>{
//     for (const arrСurrencyElement of arrСurrency) {
//         if (arrСurrencyElement["currency"]===typeCurrency){
//             exchangeSum = sum/arrСurrencyElement["value"];
//         }
//     }
//     console.log(exchangeSum)
// }
//
// exchangeСurrency(10000, arrСurrencies,"USD");
// exchangeСurrency(10000, arrСurrencies, "EUR");

// -----------------------------------------------------------------------------------------------------------------
