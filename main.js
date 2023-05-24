const board = document.querySelector('#gameBoard');

const info = document.querySelector('#info');

const startCells = [
    "", "", "", "", "", "", "", "", ""
]

const addGo = e =>{
    const goDisplay = document.createElement('div');
    goDisplay.classList.add('circle');
    e.target.append(goDisplay);
}

const setupBoard = () =>{
    startCells.forEach((cell, idx) => {
       const cellEle = document.createElement('div');
       cellEle.classList.add('square');
       cellEle.id = idx;
       cellEle.addEventListener('click', addGo)
       board.append(cellEle);
    })
}

setupBoard();







