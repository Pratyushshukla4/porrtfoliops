import React from 'react'
import "./Topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
// import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const Topbar = ({menuopen,setmenuopen}) => {

  

  return (
    <div className={"topbar " + (menuopen && "active1")}>
      <div className="topbarwraper">

        
        <div className="topbarleft">
         <a className='int' href="#introo"><h1 className="topname">Pratyush</h1></a>
          <div className="phnnum">
           
            <PersonIcon/>
            <span className="number">+91 9917956867</span>
             </div>
           <div className="email">
           <MailIcon className='mailicon'/>
            <span className="gmail">Piyush@gmail.com</span>
          </div>
        </div>
        <div className="topbarright">
        {/* <DragIndicatorIcon/> */}
        <div onClick={()=>setmenuopen(!menuopen)} className="humberger">
          <span className="l1 line"></span>
          <span className="l2 line"></span>
          <span className="l3 line"></span>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Topbar
