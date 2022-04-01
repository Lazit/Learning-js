const calculator = {
    add: function(a, b){
        console.log(a + b);
    },
    minus: function(a, b) {
        console.log(a - b);
    },
    divide: function(a, b) {
        console.log(a / b);
    },
    multi: function(a, b) {
        console.log(a * b);
    },
    power: function(a, b) {
        console.log(a ** b);
    },
};

calculator.add(10,2)
calculator.minus(10,2)
calculator.divide(10,2)
calculator.multi(10,2)
calculator.power(10, 2)

// 수정 후

const calculator = {
    add: function(a, b){
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    divide: function(a, b) {
        return a / b;
    },
    multi: function(a, b) {
        return a * b;
    },
    power: function(a, b) {
        return a ** b;
    },
};

const plusResult = calculator.add(2,3)
const minusResult = calculator.minus(plusResult,3)
const divideResult = calculator.divide(2, minusResult)
const multiResult = calculator.multi(minusResult, plusResult)
const powerResult = calculator.power(divideResult, minusResult)

console.log(plusResult);
console.log(minusResult);
console.log(divideResult);
console.log(multiResult);
console.log(powerResult);


//return 하면 함수기능 종료. 이후의 코드는 실행되지 않음.