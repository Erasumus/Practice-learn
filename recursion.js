"use strict";

const studentDB = {
  JS: {
    base: [
      {
        name: "alex",
        total: 70,
      },
      {
        name: "danya",
        total: 70,
      },
    ],

    pro: [
      {
        name: "dima",
        total: null ?? 100,
      },
    ],
  },

  HTML: [
    {
      name: "John",
      total: 14,
    },
    {
      name: "Peter",
      total: 70,
    },
  ],
};

function showByRecustion(data, text){
    function ShowConsoleLog(){
        console.log(text);
    }

    if(text!=null){
        ShowConsoleLog();
    }

    if(Array.isArray(data)){
        let progress = 0;
        for(let i = 0;i<data.length;i++){
            progress += data[i].total;
        }
        return [progress, data.length];
    } else{
        let progress = [0,0];
        for(let subData of Object.values(data)){
            let subDataArr = showByRecustion(subData);
            progress[0] += subDataArr[0];
            progress[1] += subDataArr[1];
        }
        return progress;
    }   
}

const result = showByRecustion(studentDB, "hello") ?? 0;
console.log(result);

///////////////////////////////////////////////////////////////////////

const box = document.getElementsByClassName(".box"); //Живой 
const box2 = document.querySelectorAll(".box"); //Не динамически проверяет наличие, т.е. не смотрит на случаит append/remove, чаще используют
//Но! Помогает делегерирование foreach от верхнего

//Matches("btn") (поиск класса)
//Closest("wrapper") (взглянуть wrapper, верхний класс)
//Array.from(data) делает массив относительно Data

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

