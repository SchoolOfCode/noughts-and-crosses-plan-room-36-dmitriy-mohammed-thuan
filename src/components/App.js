import "./App.css";

import Board from "./Board/Board";

function App() {
  let boardPositions = [null, null, null, null, null, null, null, null, null];

  return (
    <div className="App">
      <h1>Noughts & Crosses</h1>
      <Board boardPositions={boardPositions} />
    </div>
  );
}

export default App;
