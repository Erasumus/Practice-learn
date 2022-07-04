"use strict";

const question = new Map([

]);

const setQuestion = [...new Set(question.entries())];
question.forEach((element, index) => {
    if(index == 3){
        element.delete(index);
    }
});
console.log(question);
/* console.log(question);
console.log(setQuestion);


console.log(question);

 */
/* const Answer = Number(prompt('select')); */
const Answer = 5;
console.log(question.get(question.get('Correct') === Answer));


console.log([...question.keys()]);
console.log([...question.values()]);
console.log([...question]);
console.log(setQuestion);

