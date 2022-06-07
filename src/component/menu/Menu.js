// import { MenuOpen } from '@mui/icons-material'
import React from 'react'
import "./Menu.scss"

const Menu = ({menuopen , setmenuopen}) => {
  return (
    <div className={"menu " + (menuopen  && "active")}>   
     {/*------->>>>>>>THIS IS MORE IMORTANT -->IF MENUOPEN TRUE THEN ACTIVE CLASS WILL BE ADD  */}
    
      <ul>
          <li onClick={()=>setmenuopen(false)}  className='list'>
              <a  href="#introo" className="intro1">Intro</a>
          </li>
          <li onClick={()=>setmenuopen(false)}   className='list'>
              <a href="#prtf" className="portfolio1">Portfolio</a>
          </li>
          <li onClick={()=>setmenuopen(false)}   className='list'>
              <a href="#testmn" className="testmonial1">Testmonial</a>
          </li>
          <li onClick={()=>setmenuopen(false)}   className='list'>
              <a href="#wrk" className="work1">Work</a>
          </li>
          <li onClick={()=>setmenuopen(false)}   className='list'>
              <a href="#cnt" className="contact1">Contact</a>
          </li>
         
      </ul>
    </div>
  )
}

export default Menu
