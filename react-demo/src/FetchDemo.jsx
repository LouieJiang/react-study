import React from 'react'
import qs from 'querystring'
export default class FetchDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      banners: [],
    }
  }

  componentDidMount() {
    /**
     * fetch 基于promise
     * http://iwenwiki.com/api/blueberrypai/getIndexBanner.php
     * get
     */
    fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          banners: data.banner,
        })
      })
    /**
     * post
     */
    fetch('http://iwenwiki.com/api/blueberrypai/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json,text/plain,*/*',
      },
      body: qs.stringify({
        user_id: 'iwen@qq.com',
        password: 'iwen123',
        verification_code: 'crfvw',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }
  render() {
    const { banners } = this.state
    console.log('banners', banners)

    return (
      <div>
        {banners.length > 0 ? (
          <ul>
            {banners.map((element, index) => {
              return <li key={index}>{element.title}</li>
            })}
          </ul>
        ) : (
          <div>等待数据加载...</div>
        )}
      </div>
    )
  }
}
