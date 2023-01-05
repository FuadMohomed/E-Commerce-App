import React from 'react'
import './footer.scss'
import pic2 from '../../img/pic2.png'

function Footer() {
  return (
    <div className='footer'>
     <div className="top">
       <div className="item">
         <h1>Categories</h1>
         <span>Women</span>
         <span>Men</span>
         <span>Shoes</span>
         <span>Accessories</span>
         <span>New Arrivals</span>
       </div>
       <div className="item">
             <h1>Links</h1>
         <span>FAQ</span>
         <span>Pages</span>
         <span>Stores</span>
         <span>Compare</span>
         <span>Cookies</span>
       </div>
       <div className="item">
         <h1>About</h1>
         <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            obcaecati dolore eligendi commodi ratione accusantium ullam consectetur. Ab,
            facilis consequatur asperiores, quia tenetur sit vel, animi dignissimos temporibus maxime alias.</span>
       </div>
       <div className="item">
                 <h1>Contact</h1>
         <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            obcaecati dolore eligendi commodi ratione accusantium ullam consectetur. Ab,
            facilis consequatur asperiores, quia tenetur sit vel, animi dignissimos temporibus maxime alias.</span>
       </div>
     </div>
     <div className="bottom">
       <div className="left">
         <span className='logo'>BestStore</span>
         <span className='copyright'>Copyright © 2023, All Rights Reserved.</span>
   
       </div>
       <div className="right">
         <img src={pic2} alt='pic'/>
       </div>
     </div>
      </div>
  )
}

export default Footer