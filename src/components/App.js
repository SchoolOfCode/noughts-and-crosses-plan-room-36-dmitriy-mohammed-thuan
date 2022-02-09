import { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board/Board";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  // [null, null, null, null, null, null, null, null, null]
  const [isXTurn, setIsXTurn] = useState(true);
  const winner = calculateWinner(board);
  const currentPlayer = isXTurn ? "X" : "O";

  const handleSquareClick = (index) => {
    if (winner || board[index]) {
      return;
    }

    setBoard([
      ...board.slice(0, index),
      currentPlayer,
      ...board.slice(index + 1),
    ]);
    setIsXTurn(!isXTurn);
  };

  return (
    <>
      <h1>React Tic Tac Toe - With Hooks</h1>
      <Board squares={board} onSelectSquare={handleSquareClick} />
      <div className="info-wrapper">
        <h3>
          {winner ? "Winner: " + winner : "Next Player: " + currentPlayer}
        </h3>
      </div>
    </>
  );
};

export default App;
