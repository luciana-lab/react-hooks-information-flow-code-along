import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor); // initial value for color state
  const [childrenColor, setChildrenColor] = useState("#FFF") //  store the color of the Child in the state of the Parent component

  // To update state
  // sending data back to the parent, let's change our handleChangeColor to take in an argument of newChildColor
  function handleChangeColor(newChildColor) {
    const newRandomColor = getRandomColor()
    setColor(newRandomColor) // update color state to a new value
    setChildrenColor(newChildColor) // update the handleChangeColor() function to change the childrenColor
  }

  // Tto run this handleChangeColor() function when either Child component is clicked
  // So we are going to pass this state changing function as a prop to both Child components.
  // Parent component handle the passing of the color data to each of its children components
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleChangeColor} color={childrenColor} />
      <Child onChangeColor={handleChangeColor} color={childrenColor} />
    </div>
  );
}

export default Parent;
