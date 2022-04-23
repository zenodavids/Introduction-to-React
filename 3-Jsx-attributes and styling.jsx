import React from 'react'
import ReactDOM from 'react-dom'

const img = 'https://picsum.photos/200'

ReactDOM.render(
  <div>
    <h1>My Favourite Foods</h1>
    <div>
      <img alt='' src={`${img}?grayscale`} />
    </div>
  </div>,
  document.getElementById('root')
)
/*

we can also use javascript as the value for on image src attribute;
using the url 'picsum.photos',

* we create a constant and give it a variable of the url we got from the webapp;
const img = 'https://picsum.photos/200';

* in the img tag, we give the src attribute a js value in curly braces;
<img alt='' src= {img} />

* we can also add a query in the curly braces. ie; say the url if added a 'grayscale' query will make the pictures black and white. instead of adding to the img variable , we use the string literal style ;
<img alt='' src= {img +'?grayscale'} />

*/

//in react, all self-closing tags must have a backslash(/) at the end just before the (>).

// in the index.html script tag, we change the javascript file from js to jsx to tell the browser that we're working with jsx
// unlike html attributes which are all in lowercases, the react attributes are in carmel casing.
// in react, we use 'className' instead of html's 'class'
// we use the html 'contentEditable attribute (set the value to 'true') to edit HTML's elements directly on the browser'
// we use the 'spellCheck' attribute (set to true by default) when set to false stops the browser from checking correct spellings in words
