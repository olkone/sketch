window.onload = makeButtons(), makeGrid();

const buttons = document.querySelectorAll('.color-buttons');
const active = document.querySelectorAll('.active');
const slider = document.querySelector('#grid-slider');

function makeButtons() {
    // Create color buttons from array items
    const colors = ['black', 'gray', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];

    // Set html attributes
    for (let i = 0; i < colors.length; i++) {
        const newButton = document.createElement('button');
        const buttonContainer = document.querySelector('#colors');
        buttonContainer.appendChild(newButton);
        newButton.classList.add('color-buttons');
        newButton.id = colors[i];
        newButton.style.backgroundColor = colors[i];
    }

    // Activate black on page load
    document.querySelector('#black').classList.add('active');
}

function clearGrid() {
    document.querySelectorAll('.square').forEach((square) => {
        square.style.backgroundColor = 'transparent';
    });
}

function buttonToggle(button) {
    // The 'clear grid' button was given the 'color-buttons' class to avoid writing an additional listener event and subsequent functions
    button.addEventListener('click', () => {
        if (button.id === 'clear-button') {
            clearGrid();
        } else {
            buttons.forEach((e) => {
                e.classList.remove('active');
            });
            button.classList.toggle('active');
        }
    });
}

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
    const gridWidth = grid.offsetWidth;

    // Removes any pre-existing squares when editing the grid
    document.querySelectorAll('.square').forEach(square => square.remove());

    for (let i = 0; i < (number**2); i++) {
        const square = document.createElement('div');
        grid.appendChild(square);
        square.classList.add('square');
    }

    const squares = document.querySelectorAll('.square');
    
    // Keeps grid size the same regardless of granularity
    squares.forEach((square) => {
        square.style.height = `${(gridWidth/number)}px`;
        square.style.width = `${(gridWidth/number)}px`;
        square.addEventListener('mouseover', changeColor);
    });
}

function editGrid() {
    const input = slider.value;
    makeGrid(input);
}

function displaySliderValue() {
    const p = document.querySelector('.slide-container p');
    p.innerText = slider.value;
}

// Listener events
slider.addEventListener('change', () => {
    editGrid();
    displaySliderValue();
});

buttons.forEach((button) => {buttonToggle(button);});