import React from 'react'

const Ucenter = (props) => {
  return (
    <div>
      Ucenter:{props.match.params.id}-{props.match.params.name}
    </div>
  )
}

export default Ucenter
