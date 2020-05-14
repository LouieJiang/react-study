import React from 'react'
import Home from './pages/Home'
import Mine from './pages/Mine'
import Ucenter from './pages/Ucenter'
import NotFound from './pages/NotFound'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mine">Mine</Link>
          </li>
          <li>
            <Link to="/mine/ucenter">Ucenter</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/mine" component={Mine}></Route>
          <Route path="/mine/ucenter" component={Ucenter}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
