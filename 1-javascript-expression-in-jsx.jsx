import React from 'react'
import ReactDOM from 'react-dom'

const name = 'Zeno'
const luckyNumber = 4

ReactDOM.render(
  <div>
    <h1>My name is {name}</h1>
    <p>my lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById('root')
)
/*
* what happens here is we passed a constant (name and luckynumber)
then infused them into our ReactDOM.render via a set of curly braces.

* we can also pass in javascript expressions inside the curly braces ie
- we can pass in a math function. ie instead of passing in '4',
we can pas in '2+2'.
- a random number can also be passed in too. ie;
'Math.floor(Math.random() * 10) numbers between 0 and 9'
* we can even insert more than two js variable in a single html tag

* we cant write javascript statement ie
- if and else statements

* difference btw javascript expressions and statements is
- an expresion is eqauls to a value
- a statement evaluates an expression and tells the computer to do some work.
 */
