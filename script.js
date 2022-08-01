const size =16;
let arrayOfRows=[];
const gridDiv=document.querySelector(".grid-box");


for (let y = 0; y<size;y++){
    
//create div element for the row
    const rowDiv = document.createElement('div');//`id="row${y}"`,'class="row"');
    rowDiv.classList.add('row');
    rowDiv.id=`row${y}`;
    //store in arrayOfRows
    
    //add to DOM
    gridDiv.appendChild(rowDiv);

    for (let x = 0; x<size;x++){
        const rowItem = document.createElement('div');//,`id="${x},${y}"`,'class="row-item"')
        rowItem.classList.add('row-item');
        rowItem.id=`${x}, ${y}`;
       rowItem.addEventListener('mouseleave',mark);
       //rowItem.textContent=   x + ", " + y; 

        //create div element for row item
             //store in in arrayOfRows
                //add to DOM
        rowDiv.appendChild(rowItem);

    }


}

function mark(e){
    e.target.style.background = "gray";
    console.log(this.id);

}