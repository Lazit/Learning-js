const age = prompt("How old are you?")
console.log(age)
//this will stop js til get some value.
//and whatever the value is, that value is string.
//to check the type of value, we do like this
console.log(typeof age);
//this gives us string.

//then how we cac change string into number
//answer is

parseInt(age)

//데이터를 문자에서 숫자로 변경하는것은, 값이 특정한 수 보다 큰지 작은지 구별할 수 있는 장점을 가지고
//나아가서 숫자인지 아닌지 판별하는데에도 도움을 준다.
//문자라면 NaN을 반환.

const age = parseInt(prompt("how old are you?"));
//로 작성 가능. 함수는 내부에서부터 외부로 작동한다.

console.log(age)