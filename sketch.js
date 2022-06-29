function addSqaures(number) {

    const grid = document.querySelector('#grid');
    

    for (let i = 0; i < (number * number); i++) {
        const square = document.createElement('div');
        grid.appendChild(square);
        square.classList.add("square");
    }
}

addSqaures(16);