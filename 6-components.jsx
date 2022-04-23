import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
)

/*
components makes it easy for us to be able to split the react web page into bits.

-- create a folder called 'components' and in this new folder, you will create the components files that would make up the react app

-- in each of these component files;
- import the react module at the top
import React from "react";
- if you are going to use a component in a component, import it too;
import Component-Name from "./Component-name";
- create an arrow function with the file name and input all the details of that conponent in the code block of the arrow function
const component-Name = () => {
  return (

  )
}
- export the component once you are done
export default component-Name.
*/

//-- we export all the components into a js(or jsx) file thats in the same components folder with them and export that file to the index.js

////////// using the above examples ////////////////////

// in the Header component file;

import React from "react";

const Header = () => {
  return <h1>My Favourite Foods</h1>;
};

export default Header;


//################## in the List component file;

import React from "react";

const List = () => {
  return (
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  );
};

export default List;

//################## in the App component file;
import React from "react";
import Header from "./Header";
import List from "./List";

const App = () => {
  return (
    <div>
      <Header />
      <List />
    </div>
  );
};
export default App;

//################## in the index.js file;

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);

