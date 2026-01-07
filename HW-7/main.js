// // Через Array.prototype. створити власний foreach, filter


// foreach
Array.prototype.myForeach = function (cb){
    for (let i = 0; i<this.length; i++){
        cb(this[i],i, this);
    }
}

let arr = new Array(10,20,30);
arr.myForeach((value, index, array) => console.log(value, index, array));


//filter
Array.prototype.myFilter = function (cb){
    let arrF = [];
    for (let i = 0; i<this.length; i++){
        if (cb(this[i],i, this)){
            arrF.push(this[i]);
        }
    }
    return arrF;
};

let arr_2 = arr.myFilter(value => value>10);
console.log(arr_2);

let arr_3 = arr.myFilter(((value, index) => value>10&&index>1));
console.log(arr_3);

