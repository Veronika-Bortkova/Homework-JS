//     описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// Після опису, використовуючи функції масивів:
//
//     – знайти піковий туз
//
//  – всі шістки
//
//  – всі червоні карти
//
//  – всі буби
//
//  – всі трефи від 9 та більше
//
//
//
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }
//
//
//
//
//
//
//
// #EP5I1UUzAX
//
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
//
// Приклад моделі кінцевого об’єкту
//
// {
//
//     spades:[],
//
//         diamonds:[],
//
//     hearts:[],
//
//     clubs:[]
//
// }
//

// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }

const  arrSuits = ["spade", "diamond", "heart", "clubs"];
const arrValue = ["6","7","8","9","10","ace","jack","queen","king"];

let arrCards = [];
for (const arrValueElement of arrValue) {
    for (const arrSuitElement of arrSuits) {
        let card = {
            cardSuit: arrSuitElement,
            value: arrValueElement,
        };
        arrCards.push(card);
    }
}

for (const arrCard of arrCards) {
    if (arrCard.cardSuit === "diamond" || arrCard.cardSuit === "heart"){
        arrCard.color = "red";
    } else {
        arrCard.color = "black";
    }
}

console.log(arrCards);

// – знайти піковий туз

let spadAce = arrCards.find(value => (value.cardSuit === "spade" && value.value === "ace"));
console.log(spadAce);

// – знайти всі шістки

let sixes = arrCards.filter(value => (value.value === "6"));
console.log(sixes);

// знайти – всі червоні карти

let redCards = arrCards.filter(value => (value.color === "red"));
console.log(redCards);

// знайти– всі буби

let diamondCards = arrCards.filter(value => (value.cardSuit === "diamond"));
console.log(diamondCards);

//знайти – всі трефи від 9 та більше

let clubsCardsTop9 = arrCards.filter(value => (value.cardSuit === "clubs" && (value.value ==="9" || value.value ==="10" || value.value === "ace" || value.value === "ace" || value.value === "jack" || value.value === "queen" || value.value === "king")));
console.log(clubsCardsTop9); // вариант 1

let topValue = ["9","10","ace","jack","queen","king"];
let clubsCardsTop9_1 = arrCards.filter(value => (value.cardSuit === "clubs" && topValue.includes(value.value)));
console.log(clubsCardsTop9_1);// вариант 2

// /Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// //
// // Приклад моделі кінцевого об’єкту
// //
// // {
// //
// //     spades:[],
// //
// //         diamonds:[],
// //
// //     hearts:[],
// //
// //     clubs:[]
// //
// // }

let deckCardSuit = arrCards.reduce((acc, card) => {
    if (card.cardSuit === "spade"){
        acc.spades.push(card);
    } else if (card.cardSuit === "diamond"){
        acc.diamonds.push(card);
    } else if (card.cardSuit === "heart"){
        acc.hearts.push(card);
    } else{
        acc.clubs.push(card);
    }
    return acc;

}, {spades:[],diamonds:[],hearts:[],clubs:[]})

console.log(deckCardSuit);
