import React from 'react'

// 用类的形式创建组件，Hook形式
class App extends React.Component {
  //渲染函数
  render() {
    return <h1>{this.props.a}</h1>
  }
}
export default App
