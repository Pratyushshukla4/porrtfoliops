import React from 'react'
import "./data.scss"

const Datalist = (props) => {
  return (
    <>
      <div className="item">
          <img src={props.img} alt="img" />
          <h3>{props.title}</h3>
    </div>
    </>
  )
}

export default Datalist
