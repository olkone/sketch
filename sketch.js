
const buttons = document.querySelectorAll('.color-buttons');
const active = document.querySelectorAll('.active');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttons.forEach((e) => {
            e.classList.remove('active')
        })
        button.classList.toggle('active');
    });
});


function toggleColor() {
    const activeButton = document.querySelector('.active');
    const newColor = activeButton.getAttribute('id');

    if (newColor === 'party') {
        return ('#' + ((1<<24)*Math.random() | 0).toString(16));
    } else {
        return newColor;
    }
    
}

function changeColor(e) {
    e.target.style.backgroundColor = toggleColor();
}

function makeGrid(number=16) {
    const grid = document.querySelector('#grid');

    for (let i = 0; i < (number**2); i++) {
        const square = document.createElement('div');
        grid.appendChild(square);
        square.classList.add('square');
    }

    const squares = document.querySelectorAll('.square');
    const gridWidth = grid.offsetWidth;

    squares.forEach((square) => {
        square.style.height = `${(gridWidth/number)}px`;
        square.style.width = `${(gridWidth/number)}px`;
        square.addEventListener('mouseover', changeColor);
    });
}

makeGrid();