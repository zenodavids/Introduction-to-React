
/**
 // working with chapter 11 in this folder, say we wanted to create the image to tag as a seperate props to be reused later in the webapp
 * -- we create a seperate component for the image and name it Avatar.jsx

 */

 //in the Avatar.jsx ;

 import React from 'react'

 function Avatar(props) {
   return <img className='circle-img' src={props.img} alt='avatar_img' />
 }

 export default Avatar


 // in the card.jsx

 import React from "react";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>

        {/* this is where we call the avatar component afte importing it above */}
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;

//#####################################################################333

//class work 2 - extract the phone number and email from the card component and create a new component called 'detail' and upload it card in the card component .


//in the Detail.jsx ;

import React from "react";

function Detail(props) {
  return (
    <div>
      <p className="info">{props.tel}</p>
      <p className="info">{props.email}</p>
    </div>
  );
}

export default Detail;

 // in the card component

 import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail tel={props.tel} />
        <Detail email={props.email} />
      </div>
    </div>
  );
}

export default Card;
