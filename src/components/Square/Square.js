import React from "react";
import "./square.css";

export default function Square({ handleClick }) {
  return (
    <div className="square-div">
      <button onClick={handleClick}>O</button>
    </div>
  );
}
