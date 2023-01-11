var container = document.getElementById('container');

container.style.backgroundColor = 'red';
container.style.padding = '10px';

function createGrid(numPerSide) {
    let squares = numPerSide * numPerSide;
    for (let i = 1; i <= squares; i++) {
        var div = document.createElement('div');
        div.style.backgroundColor = 'white';
        div.style.border = '0.5px solid black';
        div.style.textAlign = 'center';
    
        container.appendChild(div)
    } 

    var px = 1200 / numPerSide;
    container.style.setProperty('grid-template-columns', `repeat(${numPerSide}, ${px}px)`);
    container.style.setProperty('grid-template-rows', `repeat(${numPerSide}, ${px}px)`);

}

createGrid(16);

console.log(container);