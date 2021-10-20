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
    let board = ['x', 'o','','x','','','o','',''];

    let currentMarksTurn = 'x';
    let player1Mark = '';
    let player2Mark = '';

    const startGame = (player1, player2) => {
        console.log(player1)
        player1Mark = player1.getMark();
        player2Mark = player2.getMark();

        console.log(`GameStarted between ${player1.getMark()} and ${player2.getMark()}`)
    }

    const getBoard = () => board;

    const updateBoard = (cell) => {
        //Make sure cell is empty first
        if (document.querySelector(`#${ cell }`).textContent === "") {
            
            board[parseInt(cell.substr(2,1)) - 1] = currentMarksTurn;
            //console.log(board);
            //updateBoard(board);
            displayController.displayBoard(board);

            //Check for a winner
            console.log(`Winner is:${checkForWinner()}`)

            if (checkForWinner()) {
                //End the game
                clearBoard();
                displayController.displayBoard(board);
                displayController.displayGameOver(currentMarksTurn)
            }

            advanceMark();
        }      
    };

    const checkForWinner = () => {
        //Winning Patterns
        if (board[0] === board[1] && board[1] === board[2] 
            || board[3] === board[4] && board[4] === board[5]
            || board[6] === board[7] && board[7] === board[8]
            || board[0] === board[3] && board[3] === board[6]
            || board[1] === board[4] && board[4] === board[7]
            || board[2] === board[5] && board[5] === board[8]
            || board[0] === board[4] && board[4] === board[8]
            || board[2] === board[4] && board[4] === board[6]) {
                return true;
            }
            
        return false;
    }

    const advanceMark = () => {
        currentMarksTurn === 'x' ? currentMarksTurn = 'o' : currentMarksTurn = 'x';
    };

    const clearBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    }

    
    return {
        getBoard,
        updateBoard,
        startGame
    };
})();

const displayController = (() => {
    //Assign click handler to each cell
    const boardCells = document.querySelectorAll('.boardCell');

    boardCells.forEach((cell) => cell.addEventListener('click', (e) => {
        gameBoard.updateBoard(e.target.id);
    }));
    
    const displayBoard = (board) => {
        let i = 0;

        boardCells.forEach((cell) => {
            cell.textContent = board[i]
            i++
        })
    };

    const displayGameOver = (winner) => {
        console.log(`${ winner } is the winner`)
    }




    return {
        displayBoard,
        displayGameOver
    };

})();

/*Factories*/
const PlayerFactory = (mark) => {
    const getMark = () => mark;
    //const activePlayer = () => false;

    return {getMark};
}

//Main
const human = PlayerFactory('x');
const computer = PlayerFactory('o');

console.log(human.getMark())

//Draw the board
//Start the game
gameBoard.startGame(human, computer);

displayController.displayBoard(gameBoard.getBoard());

