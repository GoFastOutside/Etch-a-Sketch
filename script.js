const gridDiv=document.querySelector(".grid-box");
drawGrid(16);


const resizeButton = document.querySelector('#size');
resizeButton.addEventListener('click',function(){
    let size= +prompt("enter grid size");
    if (!Number.isInteger(size) && (size>100 || size<1) ){
        alert("invalid input");
        return;
    }
    drawGrid(size);
    
});


function drawGrid(size){
    gridDiv.innerHTML="";
    for (let y = 0; y<size;y++){
        
    //create div element for the row
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        rowDiv.id=`row${y}`;
        gridDiv.appendChild(rowDiv);

        for (let x = 0; x<size;x++){
            const rowItem = document.createElement('div');
            rowItem.classList.add('row-item');
            rowItem.id=`${x}, ${y}`;
            rowItem.addEventListener('mouseleave',mark);
            rowDiv.appendChild(rowItem);
        }
    }
}

function mark(e){
    e.target.style.background = "gray";
    console.log(this.id);

}