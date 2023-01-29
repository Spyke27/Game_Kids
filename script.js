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
 e.currentTarget.classList.remove("hover");

 const dragItem = document.querySelector(".item.dragging");
 const dragName = dragItem.getAttribute('data-name')
 const dropName = e.currentTarget.getAttribute('data-name')

if(dragName === dropName){

    

    e.currentTarget.innerHTML = "";
}

}