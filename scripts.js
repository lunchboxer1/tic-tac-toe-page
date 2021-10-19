console.log("Hello World!")


/*ScratchPad */

/*
const boardCells = document.querySelectorAll('.boardCell');
//console.log(boardCells)

//Example of how to get and set all the clickers
boardCells.forEach((cell) => cell.addEventListener('click', (e) => {
    //console.log(e.target.id)
    const cell = document.querySelector(`#${ e.target.id }`);
    cell.backgroundColor = '#ee3f28'
    cell.textContent = 'Dilfdo'
}))*/


/*Modules */
const gameBoard = (() => {
    //const board = [];

    //temporary for testing
    const board = ['x', 'o','','x','','','o','',''];

    const getBoard = () => board;
    const updateBoard = () => {

    };
    const updateCell = () => {
    
    };
    
    return {
        getBoard,
        updateBoard,
        updateCell
    };
})();

const displayController = (() => {
    

    //Assign click handler to each cell
    const boardCells = document.querySelectorAll('.boardCell');

    boardCells.forEach((cell) => cell.addEventListener('click', (e) => {
        //console.log(e.target.id)
        const cell = document.querySelector(`#${ e.target.id }`);
        cell.backgroundColor = '#ee3f28'
        cell.textContent = 'Dilfdo'
    }))

    //Display the board
    
    const displayBoard = (board) => {
        let i = 0;

        boardCells.forEach((cell) => {
            cell.textContent = board[i]
            i++
        })
    };




    return {
        displayBoard
    };

})();

/*Factories*/
const playerFactory = (mark) => {
    const getMark = () => mark;
}

//Main
displayController.displayBoard(gameBoard.getBoard());