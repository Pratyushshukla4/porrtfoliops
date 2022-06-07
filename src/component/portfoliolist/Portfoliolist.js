import React from 'react'
import "./Portfoliolist.scss"
// import "./Portfolio.scss"

const Portfoliolist = (props ,tital , active , setselect ,id) => {
    // console.log()
  return (


    <li className={props.active ? "portfoliolist active" : "portfoliolist"} onClick={()=>props.setselect(props.id)}>
       {props.tital}
    </li>
  )
}
// active ? "portfoliolist actice" : "portfoliolist"
export default Portfoliolist
