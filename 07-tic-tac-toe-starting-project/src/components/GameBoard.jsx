import { useState } from "react";

const initialGameBoard =  [
    [ null, null, null ],
    [ null, null, null ],
    [ null, null, null ],
];

export default function GameBoard() {
    const [ gameBoard, setGameBoard] = useState(initialGameBoard)

    function handleSelect(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [ ...prevGameBoard.map(col => [...col])];   // shallow copy
            updatedBoard[rowIndex][colIndex] = 'X';
            return updatedBoard;
        });
    }
    
    return (
        <ol id="game-board">
            { gameBoard.map((row, rowIndex) => 
                <li key={rowIndex}>
                    <ol>
                        { row.map((playerSymbol, colIndex) => 
                            <li key={colIndex}> 
                                <button 
                                    onClick={() => handleSelect(rowIndex, colIndex)}>
                                    {playerSymbol}
                                </button>
                            </li>
                        )}
                    </ol>
                </li>
            )}
        </ol>
    );
}