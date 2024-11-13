const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"];
const btn = document.getElementById("button");
const color = document.querySelector(".color");

function randomColor() {
    return Math.floor(Math.random() * hex.length);
}

btn.addEventListener("click", function () {
    let hexCode = "#";

    
    for (let i = 0; i < 6; i++) {
        hexCode += hex[randomColor()]; 
    }

    document.body.style.backgroundColor = hexCode; 
    color.textContent = hexCode;
});
