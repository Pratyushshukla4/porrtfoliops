import React, { useState } from 'react'
// import "./app.css"
// import Contact from './component/contact/Contact'
import Topbar from './component/topbar/Topbar'
import Intro from './component/intro/Intro'
import Portfolio from './component/portfolio/Portfolio'
import Work from './component/work/Work'
import Testimonials from './component/testmonials/Testimonials'
import Contact from './component/contact/Contact'
import Menu from './component/menu/Menu'


const App = () => {
  const [menuopen , setmenuopen] = useState(false)

  
  return (
    <>
    <div className="app">
    <Topbar menuopen={menuopen} setmenuopen={setmenuopen}/>
    <Menu menuopen={menuopen} setmenuopen={setmenuopen}/>
    {/* <Menu/> */}
    <div className="section">
  <Intro/>
  {/* <div className="dddd"> */}
  <Portfolio/>
  {/* </div> */}
  <Work/>
  <Testimonials/>
  <Contact/>
  </div>
  </div>
  

   
    </>
  )
}

export default App

