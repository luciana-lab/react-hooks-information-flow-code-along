import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

// Child will have a prop called onChangeColor that is a function
// Specifically, it is the same function object as our Parent's 'handleChangeColor function
function Child({ onChangeColor, color }) {
  // console.log(onChangeColor)

  // update the onClick of Child to be a function that invokes this.props.handleColorChange and passes in a random color as the argument
  function handleClick() {
    const newChildColor = getRandomColor()
    onChangeColor(newChildColor)
  }

  // use this onChangeColor prop as an event handler
  return <div onClick={handleClick} className="child" style={{ backgroundColor: color }} />;
}

export default Child;
