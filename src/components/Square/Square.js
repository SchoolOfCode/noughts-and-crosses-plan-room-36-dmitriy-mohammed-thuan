import React from "react";
import "./square.css";

export default function Square() {
  function handleClick() {
    console.log("button clicked");
  }
  return (
    <div className="square-div">
      <button onClick={handleClick}>P</button>
    </div>
  );
}
