function sayHello(nameOfPerson, age) {
    console.log("hello! " + nameOfPerson + " you are " + age + " years old");
}

sayHello("HM",28);
sayHello("MR", 39);


function plus(a, b) {
    //console.log(a,b) 를 하게 되면 undefined 가 뜨게 됌. 인자에 데이터가 입력되지 않음.
    //console.log(a + b) 를 하게 되면 NaN Not a Number 가 뜨게 됌.
    console.log(a+b)
}
//function plus 는 a,b 의 argument 를 가지며 외부에서 a,b에 해당하는 값을 가져와 작동한다.

plus(8,60)
//함수 실행

function divide(firstNumber, secondNumber) {
    console.log(firstNumber / secondNumber)
}

divide(60, 8);