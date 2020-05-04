import React from 'react'

export default class StateComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 10,
    }
  }

  increment() {
    this.setState({
      count: (this.state.count += 1),
    })
  }

  decrement() {
    this.setState({
      count: (this.state.count -= 1),
    })
  }

  clickHandler = () => {
    console.log(this)
  }

  render() {
    return (
      <div>
        <h3>组件的state</h3>
        <p>{this.state.count}</p>
        <button onClick={this.increment.bind(this)}>增加</button>
        <button onClick={this.decrement.bind(this)}>减少</button>
        <button onClick={this.clickHandler}>this</button>
      </div>
    )
  }
}
