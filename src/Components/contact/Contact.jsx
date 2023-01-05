import React from 'react'
import './contact.scss'
import {AiFillFacebook} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'
import {FaPinterestP} from 'react-icons/fa'
import {AiOutlineGoogle} from 'react-icons/ai'

function Contact() {
  return (
    <div className='contact'>
       <div className="wrapper">
           <span>BE IN TOUCH WITH US:</span>
           <div className="mail">
              <input type='text' placeholder='Enter Your Email...'/>
              <button>JOIN US</button>
           </div>
           <div className="icons">
               <AiFillFacebook/>
               <BsTwitter/>
               <GrInstagram/>
               <FaPinterestP/>
               <AiOutlineGoogle/>
           </div>
       </div>
         </div>
  )
}

export default Contact