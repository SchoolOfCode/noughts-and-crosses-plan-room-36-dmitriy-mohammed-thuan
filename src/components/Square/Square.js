import React from "react";
import "./square.css";

export default function Square({handleClick}) {
  // function handleClick() {
  //   console.log('Pressed button!');
  // }
  return (
    <div className="square-div">
      <button onClick={handleClick}>P</button>
    </div>
  );
}
