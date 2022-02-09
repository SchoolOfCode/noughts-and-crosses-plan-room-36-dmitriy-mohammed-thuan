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
        <Square handleClick={handleClick}/>
      </div>
      <div className="cell">
        <Square handleClick={handleClick}/>
      </div>
      <div className="cell">
        <Square handleClick={handleClick}/>
      </div>
      <div className="cell">
        <Square handleClick={handleClick}/>
      </div>
      <div className="cell">
        <Square handleClick={handleClick}/>
      </div>
      <div className="cell">
        <Square handleClick={handleClick}/>
      </div>
      <div className="cell">
        <Square handleClick={handleClick}/>
      </div>
      <div className="cell">
        <Square handleClick={handleClick}/>
      </div>
      <div className="cell">
        <Square handleClick={handleClick}/>
      </div>
    </div>
  );
}
