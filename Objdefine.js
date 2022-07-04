const obj = {
    name: null ?? 'three',
    test: 'one',
    [Symbol('id')]: 100,
    [Symbol('id')]: 200,
};

console.log(obj?.name);
console.log(obj);
//Object.defineProperty(obj, 'birthday', {value: 100, writable:false});
//Object.defineProperty(obj, 'test', {enumerable: false});
Object.defineProperties(obj, {
    'birthday': {value: 100, writable:false},
    'test': {enumerable: false}
});
obj.birthday = 110;
console.log(obj.birthday);
console.log("for-in obj:");
for(let sub in obj) console.log(sub); //defineproperty Enumerable true
//console.log("for-of obj:")
//for(let sub of obj) console.log(sub); //не интерируемый obj по умолчанию 
console.log("getOwnPropertyNames: "); console.log(Object.getOwnPropertyNames(obj));
console.log("getOwnPropertySymbol forAndIf: ");
for(let i = 0; i < Object.getOwnPropertySymbols(obj).length; i++){
    if(obj[Object.getOwnPropertySymbols(obj)[i]] == 200){
        console.log(obj[Object.getOwnPropertySymbols(obj)[i]]);
    }
}
console.log("getOwnPropertyDescription:"); console.log(Object.getOwnPropertyDescriptors(obj)); // Дает данные о доступе Writable/Enumerable/Configurable

