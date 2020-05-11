import React from 'react'

export default class FetchDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      banners: [],
    }
  }

  componentDidMount() {
    fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          banners: data.banner,
        })
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
