import React from 'react'
import './css/style.css'
import Home from './pages/Home'
import Mine from './pages/Mine'
import Ucenter from './pages/Ucenter'
import NotFound from './pages/NotFound'
import Demo from './pages/Demo'
import Shop from './pages/Shop'
import Book from './pages/Book'
import JavaBook from './pages/JavaBook'
import WebBook from './pages/WebBook'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
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
            <NavLink
              to={{
                pathname: '/mine',
                search: '?sort=name',
                hash: '#the-hash',
                state: { flag: '我是隐藏的' },
              }}
              activeClassName="selected"
              exact
            >
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
          <Redirect from="/helloMine" to="/mine" />
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/mine" component={Mine}></Route>
          <Route path="/mine/ucenter/:id?/:name?" component={Ucenter}></Route>
          {/* <Route path="/demo" render={() => <div>hello Demo</div>}></Route> */}
          <Route
            path="/demo"
            render={(props) => <Demo {...props} name="hello"></Demo>}
          ></Route>
          <Route path="/shop" component={Shop}></Route>
          {/* <Route path="/book" component={Book}></Route> */}
          <Book>
            <Switch>
              <Route path="/book/webbook" component={WebBook}></Route>
              <Route path="/book/javabook" component={JavaBook}></Route>
            </Switch>
          </Book>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
