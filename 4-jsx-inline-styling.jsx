import React from 'react'
import ReactDOM from 'react-dom'

const customStyles = {
  color: 'red',
  fontSize: '20px',
  border: '1px green dotted',
}

ReactDOM.render(
  <h1 style={customStyles}>Hello World!</h1>,
  document.getElementById('root')
)
/*

* unlike html, react can only access inline css styles if it is in js object format. ie;
to change the above html to red color,
- we create a javascript object;
{color: 'red'}
- then we input it in the h1 style attribute inside a set of curly braces, making it two sets of curly braces;
<h1 style={{color: 'red'}}>Hello World!</h1>

* if it has more than one style, we give the object a variable name with mulitple styles and they will be seperated by comas;
- the style values will also be in carmel cases;
const customStyles = {
  color: 'red',
  fontSize: '20px',
  border: '1px green dotted'
}
- in the h1 style attribute, we use a single pair of curly braces;
<h1 style={customStyles}>Hello World!</h1>

 - to use only the color in customStyles, we use {customStyles.color}

* */
