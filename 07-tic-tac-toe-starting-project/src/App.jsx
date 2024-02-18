import { useState } from "react";
import Log from "./components/Log";
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard =  [
  [ null, null, null ],
  [ null, null, null ],
  [ null, null, null ],
];

function App() {
  const [ gameTurns, setGameTurns ] = useState([]);

  // derive from current game state rather than storring it in another state
  function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
      currentPlayer = '0';
    }
    return currentPlayer;
  }

  const activePlayer = deriveActivePlayer(gameTurns); 

  // update the game board based on the turns data
  // in react you should try to manage less state as possible
  // rather, you should derive data from that state
  let gameBoard = initialGameBoard;
  for (const turn of gameTurns) {
      // destructure object values
      const { square, player } = turn;
      const { row, col } = square;
      // update gameboard
      gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = 
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = 
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = 
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol 
      && firstSquareSymbol === secondSquareSymbol 
      && firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  const handleSelect = (rowIndex, colIndex) => {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      // the latest turn is stored in index 0, 
      const updatedTurns = [
          { 
            square : { 
              row: rowIndex, 
              col: colIndex
            }, 
            player: currentPlayer 
          }, 
          ...prevTurns 
      ];

      return updatedTurns;
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player 
            initialName="Player 1" 
            symbol="X" 
            isActive={activePlayer === 'X'} 
          />
          <Player 
            initialName="Player 2" 
            symbol="O" 
            isActive={activePlayer === 'O'} 
          />
        </ol>
        {winner && <p>You won, {winner}!</p>}
        <GameBoard 
          onSelectSquare={handleSelect} 
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App