/// in the calculator.js
const add = (n1, n2) => {
  return n1 + n2
}

const multiply = (n1, n2) => {
  return n1 * n2
}

const subtract = (n1, n2) => {
  return n1 - n2
}

const divide = (n1, n2) => {
  return n1 / n2
}

// in the index.js;
import React from 'react'
import ReactDOM from 'react-dom'

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById('root')
)

//##########################################

/***
 **** solution A
 * in the calculator.js;
 export { add, multiply, subtract, divide }

 * in the index.js;
 import { add, multiply, subtract, divide } from "./calculator";

   <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,



 **** solution B (using the wildcard(*))
 * in the calculator.js;
 export { add, multiply, subtract, divide }

  * in the index.js;
 import * as Calculator from "./calculator";

   <ul>
    <li>{Calcutor.add(1, 2)}</li>
    <li>{Calcutor.multiply(2, 3)}</li>
    <li>{Calcutor.subtract(7, 2)}</li>
    <li>{Calcutor.divide(5, 2)}</li>
  </ul>,

 ***/
