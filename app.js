const gameBoard = (() => {
    const initialGrid = ['', '', '', '', '', '', '', '', '']
    let grid = initialGrid;

    const renderGrid = () => {
        let gridData = grid;
        const boardContainer = document.getElementById('board-container');
        boardContainer.innerHTML = '';
        for (let i = 0; i < gridData.length; i++) {
            const square = document.createElement('button');
            square.textContent = gridData[i];
            square.setAttribute('class', 'square')
            square.addEventListener('click', () => {
                game.handleButtonClick(i);
                renderGrid();


            });
            console.log('hi')
            boardContainer.appendChild(square);
        }


        // let turnDiv = document.createElement('div')
        // turnDiv.innerText = `${game.currentPlayer.playerName}`
        // document.appendChild(turnDiv)

    }
    const setGrid = (newGrid) => {
        grid = newGrid
        console.log(grid)
        renderGrid()

    }


    renderGrid();

    return {
        grid, setGrid, renderGrid
    };
})();

function playerFactory(playerName, marker) {

    return { playerName, marker };
}

const game = (() => {

    const playerOne = playerFactory('bob', 'X')
    const playerTwo = playerFactory('frank', 'O')
    let currentPlayer = playerOne;
    let squaresPlayed = 9;

    const changeTurn = () => {
        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;

    };


    const handleButtonClick = (index) => {
        if (gameBoard.grid[index] === '') {
            gameBoard.grid[index] = currentPlayer.marker;
            squaresPlayed--;
            checkTie(squaresPlayed);
            checkWinner();
            changeTurn();
        }
    };

    const checkWinner = () => {
        const grid = gameBoard.grid
        console.log(grid)
        const winningArray = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        winningArray.forEach(arr => {
            let a = grid[arr[0]]
            let b = grid[arr[1]]
            let c = grid[arr[2]]
            const checkArr = [a, b, c]

            const winValue = currentPlayer.marker
            const allEqual = arr => arr.every(element => element === winValue)
            const result = allEqual(checkArr)
            if (result) {

                gameOver(currentPlayer)
            }
        })



    };
    const checkTie = (number) => {
        if (!number) {
            gameOver('Tie Game')
        }
    };
    const gameOver = (currentPlayer) => {
        console.log(`game over ${currentPlayer.playerName} has won the game`)
        resetGame()

    }
    const resetGame = () => {
        currentPlayer = playerOne
        squaresPlayed = 9
        gameBoard.setGrid(['', '', '', '', '', '', '', '', ''])
        console.log(currentPlayer, squaresPlayed, gameBoard.grid)
    }




    return {
        handleButtonClick,
        gameOver,
        resetGame,
        currentPlayer
    };
})();
