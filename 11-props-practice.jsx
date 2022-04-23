//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.

// in the app.jsx

import React from "react";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2>Beyonce</h2>
          <img
            src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p>+123 456 789</p>
          <p>b@beyonce.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;


// in the contact.js ;
const contacts = [
  {
    name: "Beyonce",
    imgURL:
      "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
    phone: "+123 456 789",
    email: "b@beyonce.com"
  },
  {
    name: "Jack Bauer",
    imgURL:
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    phone: "+987 654 321",
    email: "jack@nowhere.com"
  },
  {
    name: "Chuck Norris",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com"
  }
];



//####################################################################3

//SOLUTION


// in the contact.js ;

//working with an array of contacts;
const contacts = [
  {
    name: "Beyonce",
    imgURL:
      "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
    phone: "+123 456 789",
    email: "b@beyonce.com"
  },
  {
    name: "Jack Bauer",
    imgURL:
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    phone: "+987 654 321",
    email: "jack@nowhere.com"
  },
  {
    name: "Chuck Norris",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com"
  }
];

export default contacts

// in the Card.jsx ;

import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.src} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
};

export default Card;


//in the Header.jsx ;

import React from "react";

const Header = () => {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
    </div>
  );
};

export default Header;



// in the App.jsx;

import React from "react";
import Card from "./Card";
import Header from "./Header";
import contacts from "../contacts";

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Card
          name={contacts[0].name}
          src={contacts[0].imgURL}
          tel={contacts[0].phone}
          email={contacts[0].email}
        />
        <Card
          name={contacts[1].name}
          src={contacts[1].imgURL}
          tel={contacts[1].phone}
          email={contacts[1].email}
        />
        <Card
          name={contacts[2].name}
          src={contacts[2].imgURL}
          tel={contacts[2].phone}
          email={contacts[2].email}
        />
      </div>
    </div>
  );
};

export default App;





//in the index.js ;

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));



// in the styles.css
body {
  font-family: sans-serif;
  margin: 0 auto;
  padding: 25px;
  max-width: 400px;
  min-width: 400px;
  background-color: #dfe6e9;
  text-align: center;
}

.heading {
  text-align: center;
  font-size: 2em;
  color: #2d3436;
  margin: 20px 0 30px;
}

.card {
  border-radius: 25px;
  position: relative;
  padding: 25px 15px;
  background-color: #81ecec;
  margin: 50px 0;
  height: 200px;
  box-shadow: 0 2px 5px #ccc;
  text-align: left;
}

.top {
  border-radius: 25px 25px 0 0;
  height: 100px;
  width: 100%;
  background-color: #00cec9;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
}

.name {
  font-size: 2em;
  color: #2d3436;
  display: flex;
  flex: 1;
  margin: 10% 20px 0;
}

.card img {
  margin: 30px 20px 0 0;
}

.circle-img {
  border-radius: 50%;
  border: 7px solid #fff;
  width: 120px;
  height: 120px;
}

.bottom {
  margin-top: 120px;
}

.info {
  margin: 20px 0;
  color: #1a7e76;
}

