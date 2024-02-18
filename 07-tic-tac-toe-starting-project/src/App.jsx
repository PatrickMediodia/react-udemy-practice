import { useState } from "react";
import Log from "./components/Log";
import Player from "./components/Player"
import GameOver from "./components/GameOver";
import GameBoard from "./components/GameBoard"
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard =  [
  [ null, null, null ],
  [ null, null, null ],
  [ null, null, null ],
];

function App() {
  // single source of truth, and all the other logic is derived from this state
  // therefore to restart the game, we just have to reset the gameTurns state
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

  // make a deep copy because arrays are referenced
  // if not, initial game board will be overwrritten
  let gameBoard = [...initialGameBoard.map(array => [...array])];

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

  const hasDraw = gameTurns.length === 9 && !winner;

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

  function handleRestart() {
    setGameTurns([]);
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
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
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