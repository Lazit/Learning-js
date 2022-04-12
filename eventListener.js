const h1 = document.querySelector(".yeah")

function handleh1Click() {
    const clickedClass = "active";
    /*if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }*/
    h1.classList.toggle(clickedClass) //위 주석처리 코드를 단 한줄로 구현 가능. toggle
}
//개발자가 직접 ()로 함수 실행하지 않고 이벤트에 넘겨주어 이벤트가 실행되면 함수 실행되도록 함.

function hnadleMouseEnter() {
    h1.innerText = "Mouse is here!"
}


function handleMouseLeave() {
    h1.innerText = "Mouse is gone!"
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}
function handleWindowOffline() {
    alert("SOS no Wifi");
}

function handleWindowOnline() {
    alert("ALL GOOOOD")
}

h1.addEventListener("mouseenter", hnadleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
h1.addEventListener("click", handleh1Click);
// =-> title.onclick = handleTitleClick;


//addeventlistener 는 길긴하지만, 나중에 removeeventlestener 로 제어가능.

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("offline", handleWindowOnline);