import React from 'react'
import salik from '../../assests/pro.jpg'
import "./TopContent.css"
const TopContent=()=>{
  return(
    <div className='topContent'>
      <div className='topContent__container'>
        <h1>MOHAMMED SALIK S B</h1>
        <p>
            A STUDENT AT SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY
        </p>
        <p>
          PURSUING ELECTRICAL AND ELECTRONICAL ENGINEERING
        </p>
        <a href="https://mohammed-salik.github.io/myprofilepage/">
            <button className='topContent__downloadButton'>VIEW PROFILE</button>
        </a>
      </div>
      <div className='img1'>
        <img src={salik} alt=''/>
      </div>
    </div>
  )
}
export default TopContent;