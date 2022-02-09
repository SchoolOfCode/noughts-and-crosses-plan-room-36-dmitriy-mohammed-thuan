import React from "react";
import "./square.css";

<<<<<<< HEAD
export default function Square() {
  function handleClick() {
    console.log("button clicked");
  }
=======
export default function Square({handleClick}) {
  // function handleClick() {
  //   console.log('Pressed button!');
  // }
>>>>>>> e81ac7c91d568d904fd7066a47f8b35a8980be2e
  return (
    <div className="square-div">
      <button onClick={handleClick}>P</button>
    </div>
  );
}
