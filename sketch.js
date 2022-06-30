function addSqaures(number) {

    const grid = document.querySelector('#grid');
    
    // number arguement represents the length of one side, therefore is squared
    for (let i = 0; i < (number ** 2); i++) {
        const square = document.createElement('div');
        grid.appendChild(square);
        square.classList.add('square');
    }

    const squares = document.querySelectorAll('.square');
    const gridWidth = document.getElementById('grid').offsetWidth;

    squares.forEach((square) => {
        square.style.height = `${(gridWidth/number)}px`;
        square.style.width = `${(gridWidth/number)}px`;
    });
}

addSqaures(16);

function hoverEffect(e) {
    e.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'green';
        setTimeout( () => {
            e.target.style.backgroundColor = "";
        }, 500);
    }, false);
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => hoverEffect(square));