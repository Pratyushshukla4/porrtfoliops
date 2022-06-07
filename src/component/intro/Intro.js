import React  from 'react'
import "./Intro.scss"
// import { init } from 'ityped'


const Intro = () => {

  // const textRef = useRef();

  // useEffect(()=>{
         
  //   init(textRef.current, { 
  //     showCursor: false, 
  //     strings: ['Use with React.js!', 'Yeah!' ]
  //    })
  // },[])
  return (
    <div id='introo' className='intro'>
      <div className="left">
        <div className="imgcontainer">
          <img src="/assests/mann3.png" alt="" className="img" />
        </div>
      </div>
      <div className="right">
        <div className="rightwrapper">
          <h2>Hi there , I am</h2>
          <h1>Pratyush shukla</h1>
          <h3>Web <span >developer</span></h3>
        </div>

        <a href="#prtf" className="arraow">
       
          <img src="/assests/dwn.png" alt="" className="arr" />
        </a>
      </div>
    </div>
  )
}

export default Intro
