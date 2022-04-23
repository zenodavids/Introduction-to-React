//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from 'react'
import ReactDOM from 'react-dom'

// we get the date
const date = new Date()
console.log(date)
// we get the hours
const currentTime = date.getHours()
console.log(currentTime)

let greeting
const customStyle = {
  color: '',
}
// if the current time is between 0.00 (midnight) and 12 noon
if (currentTime < 12) {
  greeting = 'Good Morning'
  customStyle.color = 'red'
}
// if the current time is between 12 noon and 18.00 (24hr timing and 6pm in 12hr)
else if (currentTime < 18) {
  greeting = 'Good Afternoon'
  customStyle.color = 'green'
}
// else if the current time is between 18.00 and 12 midnight
else {
  greeting = 'Good Night'
  customStyle.color = 'blue'
}

console.log(greeting``)

ReactDOM.render(
  <h1 className='heading' style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById('root')
)
