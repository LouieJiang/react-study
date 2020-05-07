import React from 'react'

export default class KeyDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      userInfo: [
        {
          name: 'iwen',
          age: 20,
          sex: '男',
          job: ['11', '22', '33'],
        },
        {
          name: 'iwen',
          age: 20,
          sex: '男',
          job: ['11', '22', '33'],
        },
        {
          name: 'iwen',
          age: 20,
          sex: '男',
          job: ['11', '22', '33'],
        },
      ],
    }
  }

  clickHandler = () => {
    this.setState({
      userInfo: this.state.userInfo.concat([
        {
          name: 'iwen',
          age: 20,
          sex: '女',
          job: ['11', '22', '33'],
        },
      ]),
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.userInfo.map((element, index) => {
            return (
              <li key={index}>
                <span>{element.name}</span>
                <span>{element.age}</span>
                <span>{element.sex}</span>
                <div>
                  {element.job.map((childElement, childIndex) => {
                    return <span key={childIndex}>{childElement}</span>
                  })}
                </div>
              </li>
            )
          })}
          <button onClick={this.clickHandler}>添加数据</button>
        </ul>
      </div>
    )
  }
}
