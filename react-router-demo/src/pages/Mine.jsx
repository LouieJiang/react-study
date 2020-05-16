import React from 'react'
import querystring from 'querystring'

const Mine = (props) => {
  // const params = new URLSearchParams(props.location.search)
  // console.log(params)
  // console.log(params.get('name'))
  // console.log(params.get('age'))
  // const value = querystring.parse(props.location.search)
  // console.log('多个问号',value)
  // console.log(value.name)
  // console.log(value.age)
  console.log(props)

  const clickHandle = () => {
    console.log('事件')
    //props.history.push('/')
    props.history.replace('/')
  }
  return (
    <div>
      Mine
      <button onClick={clickHandle}>回到Home页面</button>
    </div>
  )
}
export default Mine
