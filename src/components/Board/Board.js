import React from "react";
import "./board.css";
import Square from "../Square/Square";

export default function Board() {
  function handleClick() {
    console.log("button clicked");
  }
  return (
    <div className="board-div">
      <div className="cell">
        <Square handleClick={handleClick} />
      </div>
      <div className="cell">
        <Square handleClick={handleClick} />
      </div>
      <div className="cell">
        <Square handleClick={handleClick} />
      </div>
      <div className="cell">
        <Square handleClick={handleClick} />
      </div>
      <div className="cell">
        <Square handleClick={handleClick} />
      </div>
      <div className="cell">
        <Square handleClick={handleClick} />
      </div>
      <div className="cell">
        <Square handleClick={handleClick} />
      </div>
      <div className="cell">
        <Square handleClick={handleClick} />
      </div>
      <div className="cell">
        <Square handleClick={handleClick} />
        >>>>>>> 599f6334070af6737e38ca882a07b5aa41e48bae
      </div>
    </div>
  );
}
