import React from 'react'
import ReactDOM from 'react-dom'

// import StateComponent from './StateComponent'
import ComponentLife from './ComponentLife'
import SetStateDemo from './setStateDemo'
import IfDemo from './ifDemo'
import KeyDemo from './keyDemo'
import HookDemo from './HookDemo'
import FormDemo from './FormDemo'
// function tick(params) {
//   const element = (
//     <div>
//       <h1>hello,world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   )
//   ReactDOM.render(element, document.getElementById('root'))
// }
// setInterval(tick, 1000)
ReactDOM.render(<HookDemo></HookDemo>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
