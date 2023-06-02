const gameBoard = (() => {
    let grid = ['', '', '', '', '', '', '', '', ''];

    const renderGrid = () => {
        const gridData = grid;
        const boardContainer = document.getElementById('board-container');
        boardContainer.innerHTML = '';
        for (let i = 0; i < gridData.length; i++) {
            const square = document.createElement('button');
            square.textContent = gridData[i];
            square.addEventListener('click', () => {
                game.handleButtonClick(i);
                renderGrid();

            });
            boardContainer.appendChild(square);
        }
    };

    renderGrid();

    return {
        grid
    };
})();

function playerFactory(playerName, marker) {
    return { playerName, marker };
}

const game = (() => {
    const playerOne = playerFactory('Bob', 'X');
    const playerTwo = playerFactory('Frank', 'O');
    let currentPlayer = playerOne;
    let squaresPlayed = 9;

    const changeTurn = () => {
        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
    };

    const handleButtonClick = (index) => {
        if (gameBoard.grid[index] === '') {
            gameBoard.grid[index] = currentPlayer.marker;
            squaresPlayed--;

            changeTurn();
            checkTie(squaresPlayed);
            checkWinner();
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
            // function allEqual(arr) {
            //     const result = arr.every(winValue => {
            //         if (winValue === arr[0]) {
            //             return true
            //         }
            //     })
            //     return result
            // }
            // console.log(allEqual(checkArr))
            console.log(winValue)
            const allEqual = arr => arr.every(element => element === winValue)

            console.log(allEqual(checkArr))
        })


    };


    const checkTie = (number) => {
        if (!number) {
            console.log('tie game');
        }
    };

    return {
        handleButtonClick
    };
})();
