import React from "react";
import "./board.css";
import Square from "../Square/Square";

export default function Board() {
  //   function handleClick() {
  //     console.log("button clicked");
  //   }
  return (
    <div className="board-div">
<<<<<<< HEAD
      <div className="cell">
        <Square />
      </div>
      <div className="cell">
        <Square />
      </div>
      <div className="cell">
        <Square />
      </div>
      <div className="cell">
        <Square />
      </div>
      <div className="cell">
        <Square />
      </div>
      <div className="cell">
        <Square />
      </div>
      <div className="cell">
        <Square />
      </div>
      <div className="cell">
        <Square />
      </div>
      <div className="cell">
        <Square />
      </div>
=======
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>

      <Square handleClick={() => {handleClick()}}/>
>>>>>>> e81ac7c91d568d904fd7066a47f8b35a8980be2e
    </div>
  );
}
