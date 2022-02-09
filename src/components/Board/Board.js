import React from "react";
import "./board.css";
import Square from "../Square/Square";

export default function Board({ boardPositions }) {
  function handleClick(boardPositions) {
    console.log("button clicked");
    boardPositions[0] = "X";
  }
  return (
    <div className="board-div">
      <div className="cell">
        <Square
          handleClick={() => {
            handleClick();
          }}
        />
      </div>
      <div className="cell">
        <Square
          handleClick={() => {
            handleClick();
          }}
        />
      </div>
      <div className="cell">
        <Square
          handleClick={() => {
            handleClick();
          }}
        />
      </div>
      <div className="cell">
        <Square
          handleClick={() => {
            handleClick();
          }}
        />
      </div>
      <div className="cell">
        <Square
          handleClick={() => {
            handleClick();
          }}
        />
      </div>
      <div className="cell">
        <Square
          handleClick={() => {
            handleClick();
          }}
        />
      </div>
      <div className="cell">
        <Square
          handleClick={() => {
            handleClick();
          }}
        />
      </div>
      <div className="cell">
        <Square
          handleClick={() => {
            handleClick();
          }}
        />
      </div>
      <div className="cell">
        <Square
          handleClick={() => {
            handleClick();
          }}
        />
      </div>
    </div>
  );
}
