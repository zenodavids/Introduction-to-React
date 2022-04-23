/** props are short for PROPERTIES and they act the same way as html attributes in their html tags
 *
 * things to note when using props ;
 * in the function's parameter where we want to execute the props, we must pass in the word 'props'
 * we imagine props as an object and whatever we are adding in the property must have'prop.' in the front
 */

// in the header.jsx

import React from "react";

const Header = () => {
  return (
    <div>
      <h1>My Contacts</h1>
    </div>
  );
};

export default Header;


// in the card.jsx

import React from 'react'

const Card = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.src} alt='avatar_img' />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  )
}

export default Card


// in the App.jsx
import React from "react";
import Card from "./Card";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Card
          name="Beyonce"
          src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
          tel="+123 456 789"
          email="b@beyonce.com"
        />
        <Card
          name="Jack Bauer"
          src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
          tel="+987 654 321"
          email="jack@nowhere.com"
        />
        <Card
          name="Chuck Norris"
          src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
          tel="+918 372 574"
          email="hucknorris@gmail.com"
        />
      </div>
    </div>
  );
};

export default App;

// in the index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);



