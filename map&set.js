"use strict";

const shop = {
    jacket: 500,
    pants: 1000,
    shoes: 700
};

const cash = [300, 1200, 3000];

const newMap = new Map();

/* shop.forEach((element, i) => {
    newMap.set(element, cash[i]);
});
 */

let i = 0;
const array = [];
for(let sub in shop){
    newMap.set(sub, cash[i]);
    i++;
    array.push(sub);
}

console.log(newMap);
console.log(newMap.get(array[1]));
console.log(newMap.has(array[0]));
console.log(newMap.size);
newMap.clear();
console.log(newMap);



