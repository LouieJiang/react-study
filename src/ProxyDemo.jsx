import React from 'react'
import API from './api'

export default class ProxyDemo extends React.Component {
  componentDidMount() {
    //在 package.json 配置"proxy":"http://tingapi.ting.baidu.com"
    // fetch(
    //   '/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0'
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)
    //   })
    //   // 失败了
    //   .catch((error) => {
    //     console.log(new Error(error))
    //   })
    API.getChangpin()
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
    API.getLogin({
      user_id: 'iwen@qq.com',
      password: 'iwen123',
      verification_code: 'crfvw',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }

  render() {
    return <div>Hello</div>
  }
}
