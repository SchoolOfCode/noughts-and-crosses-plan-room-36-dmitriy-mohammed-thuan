import Square from "../Square/Square";

const Board = ({ squares, onSelectSquare }) => (
  <div className="board">
    {squares.map((square, index) => (
      <Square
        key={index}
        value={square}
        onClick={() => onSelectSquare(index)}
      />
    ))}
  </div>
);

export default Board;
