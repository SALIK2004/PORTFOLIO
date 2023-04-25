import React from 'react'
import { Element } from 'react-scroll'
import './Contact.css'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import GitHubIcon from '@mui/icons-material/GitHub';
const Contact=()=>{
  return(
    <Element className='contact' id='contact'>
        <h1>CONTACT</h1>
        <div className='contact__container'>
            <p>PHONE:  <a href='tel:9488433154'><span>9488433154</span> <span>   <ContactPhoneIcon/></span></a></p>
            <p>EMAIL:  <a href='mailto:salikmohammed356@gmail.com'><span>salikmohammed356@gmail.com</span><span>  <MarkEmailReadIcon/></span></a></p>
            <p>GITHUB:  <a href='https://github.com/SALIK2004'><span>@SALIK2004</span><span>  <GitHubIcon/></span></a></p>
            
        </div>
    </Element>
  )
}
export default Contact;