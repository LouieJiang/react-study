import React from 'react'

export default class setStateDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  increment = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        //这里是同步的
        console.log(this.state.count)
      }
    )
    //这里是异步的
    console.log(this.state.count)
  }
  render() {
    return (
      <div>
        setState 是同步还是异步
        <p>{this.state.count}</p>
        <button onClick={this.increment}>修改</button>
      </div>
    )
  }
}
