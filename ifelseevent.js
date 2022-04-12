const h2 = document.querySelector(".yeahyeah")

function handleh2Click() {
    const currentColor = h2.style.color;
    let newColor;
    if(currentColor === "red") {
      newColor = "blue"  
    } else {
        newColor = "red";
    }
    h2.style.color = newColor;
}

h2.addEventListener("click", handleh2Click) 

