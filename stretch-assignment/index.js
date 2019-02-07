let blocks = document.querySelector('.blocks').children;
let blocksClass = document.querySelector('.blocks');

let blockArray = Array.from(blocks);
let text = "<span class='text'>Traveler</span>";

//Set block order
// function setBlockOrder(){
//     for(let i = 0; i < blockArray.length; i++){
//         blockArray[i].style.order = `"${i}"`;
//     }
//     return; 
// }

//Block Styling
blockArray.forEach(function(block){
    block.innerHTML = text;  
    let innerText = block.querySelector('.text');
    innerText.style.border = '1px solid white';  
    innerText.style.backgroundColor = 'white';
    let blockColor = window.getComputedStyle(block).getPropertyValue('background-color');
    innerText.style.color = blockColor;
    innerText.style.borderRadius = " 90px 90px 90px 90px";
    innerText.style.padding = "5%";
    innerText.style.textDecoration = "underline";
    block.style.backgroundColor;
    block.style.display = 'flex';
    block.style.justifyContent = 'center';
    block.style.alignItems = 'center';
    block.addEventListener('mousedown', (event) => {
        innerText.style.animationName = "move";
        innerText.style.animationDuration = "5s";
        innerText.style.animationIterationCount = "infinite";
        innerText.style.animationTimingFunction = "steps(10, innerText)";
        event.stopPropagation();

    });   
    block.addEventListener('mouseup', (event) => {
        innerText.style.animationName = "none";
        event.stopPropagation();

    });  
    block.addEventListener('click', (event) => {
        blocksClass.insertBefore(block, blocksClass.firstElementChild);
    }); 
})
