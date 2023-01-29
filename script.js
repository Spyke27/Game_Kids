const levelOne = document.querySelector(".one")
const levelTwo = document.querySelector(".nvl.two")
const endGame = document.querySelector(".endGame")
let nvl = 0

// Event item
document.querySelectorAll(".item").forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
})

//Event area
document.querySelectorAll(".area").forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
})

//Functions item
function dragStart(e){
    e.currentTarget.classList.add("dragging");
}
function dragEnd(e){
    e.currentTarget.classList.remove("dragging");
}

//Functions area

function dragOver(e){
 e.preventDefault();
 e.currentTarget.classList.add("hover");
}

function dragLeave(e){
    e.currentTarget.classList.remove("hover");
}

function drop(e){
const box = e.currentTarget;
box.classList.remove("hover");

 const dragItem = document.querySelector(".item.dragging");
 const dragName = dragItem.getAttribute('data-name')
 const dropName = box.getAttribute('data-name')
 const itens = document.querySelectorAll(".area")
 let contMath = 0

if(dragName === dropName){
    box.innerHTML = "";
    box.appendChild(dragItem);
    box.classList.add("match");

    box.style.borderColor = "green";

     itens.forEach(item => {
        if(item.classList.contains("match")){
            contMath++;
        }
    }) 
}

switch (contMath){
    case 6:
        levelOne.style.display = "none";
        levelTwo.style.display = "flex";
    break;

    case 12:
        levelTwo.style.display = "none";
        endGame.style.display = "flex";
    break;
}}


function reset(){
    location.reload();
}