const age = 28

function calculateKrAge(ageOfForeigner) {
   return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge)

//밑에서부터 해석. krAge를 콘솔로 받아오게 되면 calculateKrAge 가 실행이 되고,
//age 값인 28을 ageOfForeigner에 대입해서 +2가 함수로서 실행.
//결과값이 return  되고 return 된 값이 KrAge에 저장됌
//따라서 출력은 30이 된다.

//그런데 만약

const age = 28

function calculateKrAge(ageOfForeigner) {
    ageOfForeigner + 2;
    return "hello!"
}

const krAge = calculateKrAge(age);

console.log(krAge)

//로 return값이 정해져 있다면
//계산된 값이 얼마냐에 상관없이 return값이 출력됌.