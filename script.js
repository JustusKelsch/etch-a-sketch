var container = document.getElementById('container');

container.style.backgroundColor = 'red';
container.style.padding = '10px';

function createGrid(numPerSide) {
    let squares = 0;
    if (numPerSide <= 100 && numPerSide > 0) {
        squares = numPerSide ** 2;
    }
    else {
        numPerSide = 16;
        squares = 256;
    }

    // Creates a enough squares to create a grid based on the 
    // squares per row the user entered.
    for (let i = 1; i <= squares; i++) {
        var div = document.createElement('div');
        div.classList.add('square');
        div.style.backgroundColor = 'white';
        div.style.border = '0.5px solid black';
        div.style.textAlign = 'center';
    
        container.appendChild(div)
    } 

    // Sets a random color for each square when moused over.
    // The color slowly darkens until it is completely black.
    document.querySelectorAll('.square').forEach(div => {
        let counter = 0;
        let x = getRandNum();
        let y = getRandNum();
        let z = getRandNum();
        div.addEventListener('mouseover', e => {

            // Less code length but takes much longer for squares to turn black
            // div.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
            // x = x - (x * .1);
            // y = y - (y * .1);
            // z = z - (z * .1);

            // Slightly more code but squares turn black after 15 passes.
            if (counter < 14) {
                div.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
                x = x - (x * .1);
                y = y - (y * .1);
                z = z - (z * .1);
            }
            else {
                div.style.backgroundColor = 'black';
            }

            counter++;
        });
    });

    // Sets the total size of the grid to fill the space of the container div.
    // Equally sizes each square div to fit inside the grid.
    var px = 1000 / numPerSide;
    container.style.setProperty('grid-template-columns', `repeat(${numPerSide}, ${px}px)`);
    container.style.setProperty('grid-template-rows', `repeat(${numPerSide}, ${px}px)`);

}

function getRandNum() {
    // Generates a random number between 0 and 255
    return Math.floor(Math.random() * 255);
}

// Clears the existing grid and creates a new grid to the number of squares
// per row specified by the user.
document.querySelector('button').addEventListener('click', e => {
    let input = prompt('Please list the amount of squares you would like per row: ');
    document.querySelectorAll('.square').forEach(div => {
        div.remove();
    });
    createGrid(input);
});

// Sets the default grid to 16 x 16 squares.
createGrid(16);
