const hellos = document.getElementsByClassName("hello");

console.log(hellos);

//같은 클래스 명을 가진 개체가 여러개인 조건에서 클래스를 가져오면 전부 array로 잡힘
//hellos. 으로 아무것도 가져올 수 없음.

const title = document.querySelector(".hello h1");

console.log(title);

//css처럼 쓸 수 있음.
//querySelector 를 사용하게 되면 hello 클래스를 가진 객채가 여러가지라도 가장 첫번째 요소만 호출됌.
//array 형식으로 다 가져오고 싶으면 querySelectorAll를 사용.
//querySelector에선 찾는 대상을 표시해줘야 함. class 는 . id는 #


const title = document.querySelector(".hello h1:first-child");

console.log(title);
log test