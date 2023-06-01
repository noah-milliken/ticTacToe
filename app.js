


const gameBoard = (() => {
    let grid = [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ]

    const renderGrid = () => {
        const gridData = grid;
        const boardContainer = document.getElementById('board-container')
        for (let i = 0; i < gridData.length; i++) {
            const row = document.createElement('div')
            for (let j = 0; j < grid[i].length; j++) {
                const square = document.createElement('button')
                square.textContent = grid[i][j]
                row.appendChild(square)
            }
            boardContainer.appendChild(row)
        }
        return boardContainer

    }
    renderGrid()

})()

function playerFactory(playerName, marker) {
    return { playerName, marker }
}


const game = (() => {
    const playerOne = playerFactory('Bob', 'X')
    const playerTwo = playerFactory('Frank', 'O')


})()
