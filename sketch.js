function addSqaures(number) {

    const grid = document.querySelector('#grid');
    
    // number arguement represents the length of one side, therefore is squared
    for (let i = 0; i < (number ** 2); i++) {
        const square = document.createElement('div');
        grid.appendChild(square);
        square.classList.add('square');
    }
}

addSqaures(16);

function hoverEffect(e) {
    e.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'green'
    })
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => hoverEffect(square));