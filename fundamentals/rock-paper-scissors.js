/*
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const rps = (player1, player2) => {
    let result = (player1 === 'scissors' && player2 === 'paper') ? 'Player 1 won' :
    (player1 === 'paper' && player2 === 'rock') ? 'player 1 won' :
    (player1 === 'rock' && player2 === 'scissors') ? 'Player 1 won' :
    (player1 === player2) ? 'Draw' :
    'Player 2 won'

    return result;

}

console.log(rps('scissors', 'paper'))