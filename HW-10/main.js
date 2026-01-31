
//--------------------------2---------------------------------------
//– створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
//
let divWrapper1 = document.getElementById("wrapper1");
let f1 = document.getElementById("f1");
f1.onsubmit = function (ev) {
    ev.preventDefault();
}
f1.addEventListener("submit", function (){
    let age = +document.getElementById("ageUser").value;
    let p = document.createElement("p");
    p.id = "pAge";
    let oldP = document.getElementById("pAge");
    if (oldP) oldP.remove();
    divWrapper1.append(p);
    if (age>=18){
        p.innerText = "Вам більше 18-ти";
    }
    else if (0<age && age<18){
        p.innerText = "Вам менше 18-ти";
    }
    else if (age<=0){
        p.innerText = "Введіть коректне значення";
    }
})


//--------------------9----------------------------
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”

//при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.

//При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається


let time = new Date();
let oldTime = +localStorage.getItem("time") ||0;
let divPrice = document.getElementById("price");
let savePrise = +localStorage.getItem("price") || parseInt(divPrice.textContent);
if (!oldTime){
localStorage.setItem("price", savePrise);
localStorage.setItem("time",time.getTime());
}
else if (time.getTime() > +oldTime + 10000) {
         savePrise = savePrise + 10;
         localStorage.setItem("price", savePrise);
         divPrice.innerText = `${localStorage.getItem("price")}   грн`;
         localStorage.setItem("time", time.getTime());
     }

     divPrice.textContent = savePrise + " грн";


//-----------------------------------10-------------------------

//зробити масив на 100 об’єктів та дві кнопки prev next
//
// при завантаженні сторінки з’являються перші 10 об’єктів.
//
// При натисканні next виводяться наступні 10 об’єктів
//
// При натисканні prev виводяться попередні 10 об’єктів
function creating_10_blocks() {
    for (let i = lastIndexBlock; i < lastIndexBlock + 10; i++) {
    let divItem = document.createElement("div");
    divItem.innerText = `id - ${arr[i].id}  name - ${arr[i].name}`;
    divArr10.append(divItem);
    }
};

let arr = [];
for (let i = 1; i < 101; i++) {
    let obj = {};
    obj.id = i;
    obj.name = "Lorem";
    arr.push(obj);
};
console.log(arr);

let divArr10 = document.createElement("div");
document.body.append(divArr10);
divArr10.className = "wrapper";
for (let i = 0; i < 10; i++) {
        let divItem = document.createElement("div");
        divItem.innerText = `id - ${arr[i].id}  name - ${arr[i].name}`;
        divArr10.append(divItem);
}
localStorage.setItem("numberKey", 0);
let lastIndexBlock = +localStorage.getItem("numberKey");
let buttonNext = document.getElementById("next");
buttonNext.addEventListener("click", function (){
    if (divArr10) divArr10.innerHTML = "";
    if (90>lastIndexBlock) {
        lastIndexBlock = lastIndexBlock+10;
        localStorage.setItem("numberKey", lastIndexBlock);
        creating_10_blocks();
    }
    else {
        lastIndexBlock = 90;//роблю для того, щоб при клике на кнопку некст, коли массив закінчиться на екрані залишався останній блок
        creating_10_blocks();
    }
});

let buttonPrev = document.getElementById("prev");
buttonPrev.addEventListener("click", function (){
    if (divArr10) divArr10.innerHTML = "";
    if (lastIndexBlock>9) {
        lastIndexBlock = lastIndexBlock-10;
        localStorage.setItem("numberKey", lastIndexBlock);
        creating_10_blocks();
    } else {
        lastIndexBlock = 9;//роблю для того, щоб при клике на кнопку prev, коли массив дойде до початку на екрані залишався перший блок
        for (let i = 0; i < 10; i++) {
            let divItem = document.createElement("div");
            divItem.innerText = `id - ${arr[i].id}  name - ${arr[i].name}`;
            divArr10.append(divItem);
        }
        lastIndexBlock = 0;
        localStorage.setItem("numberKey", lastIndexBlock);
    }
});

let divTask3 = document.getElementById("wrapper3");
divTask3.append(divArr10);

