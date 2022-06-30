const editBtn = document.querySelector('#edit-button');
const clearBtn = document.querySelector('#clear-button');
const colorBtns = document.querySelectorAll('.color-buttons');
const slider = document.querySelector('#grid-slider');

function hoverEffect(e, color='black') {
    e.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = `${color}`;
    });
}

colorBtns.forEach(button => {
    button.addEventListener('click', () => {
        const squares = document.querySelectorAll('.square');
        const btnId = button.getAttribute('id');
        const random = "#" + ((1<<24)*Math.random() | 0).toString(16);

        switch(btnId) {
            default:
                choice = 'black';
                break;
                
            case 'black':
            case 'blue':
                choice = btnId;
                break;

            case 'random-color':
                choice = random;
                break;
            
            case 'eraser':
                choice = 'transparent';
                break;
        }
        squares.forEach(square => hoverEffect(square, choice));
    });
});

function addSqaures(number=16) {
    // Removes any pre-existing squares when editing the grid
    document.querySelectorAll('.square').forEach(square => square.remove());

    const grid = document.querySelector('#grid');

    for (let i = 0; i < (number ** 2); i++) {
        const square = document.createElement('div');
        grid.appendChild(square);
        square.classList.add('square');
    }

    let squares = document.querySelectorAll('.square');
    const gridWidth = document.querySelector('#grid').offsetWidth;

    squares.forEach((square) => {
        square.style.height = `${(gridWidth/number)}px`;
        square.style.width = `${(gridWidth/number)}px`;
    });

    squares.forEach(square => hoverEffect(square));
}

function editGrid() {
    editBtn.addEventListener('click', () => {
        // Validate user input
        let input;
        while (input < 1 || input > 100 || Number.isInteger(input) === false) {
            input = Number(prompt("Choose a number between 1 and 100"));
        }
        addSqaures(input);
    });
    // Re-apply hover effect to new grid
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => hoverEffect(square));
}

function sliderGrid() {
    const input = slider.value;
    addSqaures(input)

    let squares = document.querySelectorAll('.square');
    squares.forEach(square => hoverEffect(square));
}

function clearGrid() {
    document.querySelectorAll('.square').forEach((square) => {
        square.style.backgroundColor = 'transparent';}
    );
}

window.onload = addSqaures();

clearBtn.addEventListener('click', clearGrid);


slider.addEventListener('change', sliderGrid)