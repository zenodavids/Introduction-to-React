import React from 'react'
import ReactDOM from 'react-dom'
//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
const date = new Date().getFullYear()

//E.g.
//Created by Angela Yu.
//Copyright 2019.
ReactDOM.render(
  <div>
    <p>Created by Zeno</p>
    <p>Copyright {date}</p>
  </div>,
  document.getElementById('root')
)
