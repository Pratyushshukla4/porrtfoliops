import React, { useEffect, useState } from 'react'
import Portfoliolist from '../portfoliolist/Portfoliolist'
import "./Portfolio.scss"
// import Datalist from './datalist'
import {featuredPortfolio,webPortfolio,mobilePortfolio,designPortfolio,contentPortfolio} from "../../Data"
import Datalist from '../datalist/Datalist'
// import Datalist from './component/portfolio/datalist'
// import Datalist from 'portfolio/datalist'

const Portfolio = () => {
  const [select , setselect] = useState("Web")
  const [data , setdata] = useState([]);

  useEffect(()=>{

    switch(select)
    {
      case  "Featured" :
      setdata(featuredPortfolio);
      break;
      case  "Web" :
      setdata(webPortfolio);
      break;
      case  "Mobile" :
      setdata(mobilePortfolio);
      break;
      case  "Design" :
      setdata(designPortfolio);
      break;
      case  "Content" :
      setdata(contentPortfolio);
      break;
      default :
      setdata(featuredPortfolio);

    } 


  },[select],)

  const list = [
    {
        id:"Featured",
        tital:"Featured"
    },
    {
        id:"Web",
        // id1:"Web",
        tital:"Web app"
    },
    {
        id:"Mobile",
        tital:"Mobile app"
    },
    {
        id:"Design",
        tital:"Design"
    },
    {
        id:"Content",
        tital:"Content"
    },
  ]
  return (

    
    <div id='prtf' className='portfolio'>

      <h1>Portfolio</h1>
      <ul>
       
        {
          list.map((ele)=>{
            return(
              <Portfoliolist key={ele.id} tital={ele.tital} id={ele.id} active={select === ele.id} setselect={setselect} />
            )
          })
        }

      </ul>
      <div className="portfoliocontainer">
      

          {
               data.map((ele)=>{
                 return(
                  
                    <Datalist tital={ele.title} img={ele.img} key={ele.id}/>
                   
                 )

               })
          }
        </div>
        
     
      
    </div>
  )
}

export default Portfolio
