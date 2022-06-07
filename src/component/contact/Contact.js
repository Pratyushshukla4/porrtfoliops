import React from 'react'
import "./Contact.scss"

const Contact = () => {

   const clickhandler =(e)=>{
     e.preventDefault()
   }
  return (
      <>
    <div id='cnt' className='contact'>
      <div className="left">
        <img src="/assests/shk.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onClick={()=>clickhandler} action="">
          <input type="text" placeholder='xyz@gmail.com' />
          <textarea name="" id="" >message</textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
      
    </div>
    </>
  )
}

export default Contact
