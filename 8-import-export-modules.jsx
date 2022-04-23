//in the math.js

const pi = 3.1415962

const doublePi = () => {
  return pi * 2
}
const triplePi = () => {
  return pi * 3
}

export default pi
export { doublePi, triplePi }

/**
 * here, we export pi as the default export and export any other singular js variables and functions we would also want to use seperately and these other ones will be in curly braces
 */

// in the index.js

import React from 'react'
import ReactDOM from 'react-dom'
import * as pi from './math.js'

ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </ul>,
  document.getElementById('root')
)

/**** we can use two ways to import pi and the other functions (doublePi and triplePi);

this the first and most recommended way:
 ** import PI, { doublePi, triplePi } from './math.js'
 using this way, we must note that;

 - the default export (which is 'PI' in our case) can be given any name in the import statement but the other exports {the ones in curly braces in the export statements} must stick to thie exact variable name in the import statement.
 - if the other exports are functions, they MUST have a set of parenthesis in front of them when they will be applied and not in their import or export statement

 example;
 import PI, { doublePi, triplePi } from './math.js'

  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,

  ############################################################

second way:
 ** import * as pi from './math.js'
 using this wildcard(*), it will import everything and to access them;

- the default export ('pi' in this case) will act as a js object and the other exports will act as its values.

example;
import * as pi from './math.js'

  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </ul>

 */
