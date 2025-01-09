function Tictactoe(){

    const cells = document.querySelectorAll('.cell');
    const statusMessage = document.getElementById('status');
    const turnIndicator = document.getElementById('turn');
    const ResetButton = document.getElementById('reset-btn');

    let board = ['','','','','','','','',''];
    let currentPlayer = 'X';
    let gameOver = false;

    function HandleClick(event){
        const cellIndex = event.target.dataset.cell;

        if (board[cellIndex]!=='' || gameOver)
            return;

        board[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;

        if(Checkwinner()){
            statusMessage.textContent = `Player ${currentPlayer} wins!`;
            gameOver = true;
        }else if(board.every(cell => cell !== '')){
            statusMessage.textContent = `It's a draw!!!`;
            gameOver = true;
        }else{
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            turnIndicator.textContent = `player ${currentPlayer}'s turn`;
        }
    }

    function Checkwinner(){
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
            [0, 4, 8], [2, 4, 6]              //Diags
        ] 

        return winPatterns.some(pattern => {
        const[a,b,c] = pattern;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
    }

    function ResetGame(){
        board = ['', '', '', '', '', '', '', '', ''];
        gameOver = false;

        currentPlayer = 'X';
        turnIndicator.textContent = `Player 1 (X)'s turn`;
        statusMessage.textContent = '';
        cells.forEach(cell=>cell.textContent = '')
    }

    cells.forEach(cell =>cell.addEventListener('click', HandleClick));
    ResetButton.addEventListener('click',ResetGame);

}
export default Tictactoe;

