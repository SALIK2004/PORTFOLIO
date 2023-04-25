import React from 'react'
import { Element } from 'react-scroll';
import skilling from "../../assests/img4.jpg"
import "./SkillContainer.css"
const SkillContainer=()=>{
  return(
    <div>
        <Element className='skillcontainer' id="skills">
            <div className='skillContainer__img' >
                <img src={skilling} alt=""/>
            </div>
            <div className='skillContainer__text'>
                <h2 className='s'>SKILL<span>SET:</span></h2>
                <div className='skillContainer__skillset'>
                    <h4>HTML</h4>
                    <div className='skillContainer__slider skillContainer__slider1'>
                        <progress className='slider1' max="100" value="90" ></progress>
                    </div>
                </div>
                <div className='skillContainer__skillset'>
                    <h4>C PROGRAM</h4>
                    <div className='skillContainer__slider skillContainer__slider2'>
                        <progress className='slider2' max="100" value="60"></progress>
                    </div>
                </div>
                <div className='skillContainer__skillset'>
                    <h4>C++</h4>
                    <div className='skillContainer__slider skillContainer__slider3'>
                        <progress className='slider3' max="100" value="80"></progress>
                    </div>
                </div>
                <div className='skillContainer__skillset'>
                    <h4>REACT</h4>
                    <div className='skillContainer__slider skillContainer__slider4'>
                        <progress className='slider4' max="100" value="80"></progress>
                    </div>
                </div>
                <div className='skillContainer__skillset'>
                    <h4>JAVA</h4>
                    <div className='skillContainer__slider skillContainer__slider5'>
                        <progress className='slider5' max="100" value="40"></progress>
                    </div>
                </div>
            </div>
        </Element>
    </div>
  )
}
export default SkillContainer;