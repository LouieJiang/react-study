import React from 'react'
import './css/style.css'
import Home from './pages/Home'
import Mine from './pages/Mine'
import Ucenter from './pages/Ucenter'
import NotFound from './pages/NotFound'
import Demo from './pages/Demo'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <NavLink
              activeClassName="selected"
              activeStyle={{ color: 'green' }}
              exact
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" exact to="/mine">
              Mine
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" exact to="/mine/ucenter">
              Ucenter
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/mine" component={Mine}></Route>
          <Route path="/mine/ucenter/:id?/:name?" component={Ucenter}></Route>
          {/* <Route path="/demo" render={() => <div>hello Demo</div>}></Route> */}
          <Route
            path="/demo"
            render={(props) => <Demo {...props} name="hello"></Demo>}
          ></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
