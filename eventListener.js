const title = document.querySelector(".yeah")

function handleTitleClick() {
    console.log("title was clicked!");
    title.style.color = "blue";
}
//개발자가 직접 ()로 함수 실행하지 않고 이벤트에 넘겨주어 이벤트가 실행되면 함수 실행되도록 함.

function hnadleMouseEnter() {
    title.innerText = "Mouse is here!"
}


function handleMouseLeave() {
    title.innerText = "Mouse is gone!"
}

title.addEventListener("mouseenter", hnadleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
title.addEventListener("click", handleTitleClick);