import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './page/Home'
// 用类的形式创建组件，Hook形式
class App extends React.Component {
  //渲染函数
  render() {
    return <Route path="/home" component={Home}></Route>
  }
}
export default App
