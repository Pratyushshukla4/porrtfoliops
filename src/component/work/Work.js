import React, { useState } from 'react'
import "./Work.scss"
import {data} from "../../Workdata"

const Work = () => {
  // const [currentslide ,  setcurrentslide]  = useState(0)
  const [currentslide ,setcurrentslide] = useState(0);

  const clickhandler = (way)=>{

      //  way === "left"  ? setcurrentslide(currentslide>0? currentslide-1 : 2) :
      //  setcurrentslide(currentslide>data.length-1?currentslide+1 :0)

       way === "left"
       ? setcurrentslide(currentslide > 0 ? currentslide - 1 : 2)
       : setcurrentslide(currentslide < data.length - 1 ? currentslide + 1 : 0);

       console.log(currentslide)
  }

  return (
   
    <>
    <div id='wrk' className='work'>
      <div className="slider" style={{transform : `translateX(-${currentslide*100}vw)`}} >
      
           
 
{
  data.map((ele)=>{
    return(
      <div  className="container">
      <div key ={ele.id} className="item">
      <div className="left">
       <div className="leftcontainer">

      <div className="imgcontainer">
      <img src={ele.img} alt="" className="imgwrk" />
    </div>
   
    <h3 className='leftconttital'>{ele.title}</h3>
    {/* <p>{ele.desc}</p> */}
    <span>Project</span>
    
  </div>

 </div>
 <div className="right">
             <img src={ele.img}alt="" />
            </div>
          </div>
        </div>
    )
  })
}

      </div>
      

      <img src="/assests/pre.png" alt="" className="prevarrao" onClick={()=>{clickhandler("left")}} />
      <img src="/assests/next.png" alt="" className="nextarrow" onClick={()=>{clickhandler()}}/>
    </div>
    </>
  )
}

export default Work
