"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);  (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    
    // код для задачи №1 писать здесь
    //return x;
    пусть d = b * d - 4 * a * c;
    if (d > 0) {
        return [( - b + Math. sqrt (d)) / ( 2 * a ), ( - b - Math . sqrt (d)) / ( 2 * a)];
            } иначе если (d < 0 ){
                возврат [ ноль ];
            } else { // d = 0
            } return [ - b / ( 2 * a)];
};
console .log ( getResult (2 , -10 , 4)); // d>0
console .log ( getResult ( 1 , 1 , 1 )); // d<0
console .log ( getResult ( 2 , - 4 , 2)); // d=0 

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    //return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    //console.log(result)
    //return result;
}