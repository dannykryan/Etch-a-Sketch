let color = "black";
let click = true;

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function fillBoard(size) {
    let container = document.querySelector('.container');
    let squares = container.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;

    for(let i = 0; i<amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = '#d1d1d1';
        square.style.border = '1px solid #adadad';
        container.insertAdjacentElement('beforeend', square);
    }
}

fillBoard(16);

function changeSize(input) {
    fillBoard(input);
}

function colorSquare() {
    if(color === 'random' && mouseDown == true) {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if(mouseDown == true) {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let container = document.querySelector('.container');
    let squares = container.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor='#d1d1d1');
}
