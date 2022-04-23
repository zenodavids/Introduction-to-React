// using the examples in chapter 5 , recreate thechapter 5 into components

//in the Header.jsx
import React from 'react'

const Heading = () => {
  const date = new Date()
  const currentTime = date.getHours()

  let greeting

  const customStyle = {
    color: '',
  }

  if (currentTime < 12) {
    greeting = 'Good Morning'
    customStyle.color = 'red'
  } else if (currentTime < 18) {
    greeting = 'Good Afternoon'
    customStyle.color = 'green'
  } else {
    greeting = 'Good Night'
    customStyle.color = 'blue'
  }

  return (
    <h1 className='heading' style={customStyle}>
      {greeting}
    </h1>
  )
}

export default Heading


// in the App.jsx;
import React from "react";
import Heading from "./Heading";

const App = () => {
  return <Heading />;
};

export default App;


// in the index.js;
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
