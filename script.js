
const container = document.querySelector("#container");

const buttonDiv = document.querySelector("#buttonDiv")
const button = document.createElement("button");
button.textContent = "Click Me";
buttonDiv.appendChild(button);


//starter grid
let width = container.offsetWidth;
let temp;
for (let i = 0; i < 256; i++){
    temp = document.createElement("div");
    temp.classList.add("grid");
    temp.style.width = width/16 + "px";
    temp.style.height = width/16 + "px";
    container.appendChild(temp);

    temp = document.querySelectorAll(".grid");

    temp.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "black";
        });
    });
}







buttonDiv.addEventListener("click", createGrid);


function createGrid (){
    let num = prompt("Enter the size of your grid");
    temp = document.querySelectorAll(".grid");
    temp.forEach(e => e.remove());

    for (let i = 0; i < num*num; i++){
        temp = document.createElement("div");
        temp.classList.add("grid");
        temp.style.width = width/num + "px";
        temp.style.height = width/num + "px";
        container.appendChild(temp);
    
        temp = document.querySelectorAll(".grid");
    
        temp.forEach((box) => {
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = "black";
            });
        });
    }
}











