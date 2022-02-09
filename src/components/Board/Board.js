import React from "react";
import "./board.css";
import Square from "../Square/Square";

export default function Board() {
  return (
    <div className="board-div">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}
