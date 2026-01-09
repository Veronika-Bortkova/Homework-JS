// Створити функцію, яка робить глибоку копію об’єкта.
//
// Додати перевірки на undefined, null, NaN.
//
// Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.

function deepCopy1 (obj){
    if (obj) {
        let copyObject = JSON.parse(JSON.stringify(obj));
        for (const key in obj) {
            if (typeof obj[key] === "function") {
                copyObject[key] = obj[key].bind(copyObject);
            }
        }

        return copyObject;
    }
}

let example1 = {
    name: "Nica",
    age: 46,
    greeting (){
        console.log(`Hi ${this.name}`);
    },
    foo (){
        console.log("JJJJJ");
    }
};
let copy1 = deepCopy1(example1);
console.log(copy1);
console.log(copy1 === example1);//=> false перевіряю що це дійсно не одне посиляння на об'єкт
copy1.greeting();
console.log(copy1.greeting === example1.greeting);//=> false перевіряю що це дійсно не одне посиляння на об'єкт
copy1.foo();

//В відео по цьому ДЗ дане інше рішення цього завдання. Скажіть, будь ласка, так як зробила я - так гірше? Як що да, то поясніть чому, будь ласка.

// в відео таке розв'язання:

// function cloner(obj) {
//     if (obj) {
//         let functions = [];
//         for (const key in obj) {
//             if (typeof obj[key] === 'function') {
//                 const functionClone = obj[key].bind({});
//                 functions.push({functionClone, key});
//             }
//         }
//         const cloneObj = JSON.parse(JSON.stringify(obj));
//         for (const func of functions) {
//             cloneObj[func.key] = func.functionClone;
//         }
//
//         console.log(cloneObj);
//         return cloneObj
//
//     }
//
//     throw new Error('!!!!!');
//
// }