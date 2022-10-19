let board = document.querySelector('.board')
board.getElementsByClassName.gridtemplatecolumns = 'repeat(16 , 1fr)'
board.getElementsByClassName.gridtemplaterows = 'repeat(16 , 1fr)'

for(let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "blue";
    board.insertAdjacentElement("beforeEnd", square)
}