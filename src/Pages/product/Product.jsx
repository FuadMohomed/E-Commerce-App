import React from 'react'
import { useState } from 'react'
import {MdAddShoppingCart} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import {GiScales} from 'react-icons/gi'
import './product.scss'

const images = [
  "https://images.pexels.com/photos/1926767/pexels-photo-1926767.jpeg?cs=srgb&dl=pexels-konstantin-mishchenko-1926767.jpg&fm=jpg&_gl=1*15tfdcb*_ga*MTAzNjE1NDYyNS4xNjcyNzUxMDIz*_ga_8JE65Q40S6*MTY3Mjc5MjcwMy40LjEuMTY3Mjc5MjgwMi4wLjAuMA..",
  "https://images.pexels.com/photos/2755612/pexels-photo-2755612.jpeg?cs=srgb&dl=pexels-ali-pazani-2755612.jpg&fm=jpg&_gl=1*ad78ax*_ga*MTAzNjE1NDYyNS4xNjcyNzUxMDIz*_ga_8JE65Q40S6*MTY3Mjc5MjcwMy40LjEuMTY3Mjc5Mjc5NC4wLjAuMA.."
]

function Product() {
const [selectedImg, setSelectedImg] = useState(0)
const [quantity, setQuantity] = useState(1)

  return (
<div className="product">
  <div className="left">
    <div className="images">
      <img src={images[0]} alt="d" onClick={(e) => setSelectedImg(0) }/>
      <img src={images[1]} alt="d" onClick={(e) => setSelectedImg(1) }/>
    </div>
    <div className="mainImg">
      <img src={images[selectedImg]} alt="n" />
    </div>
  </div>
  <div className="right">
    <h1>Title</h1>
    <span className='price'>$199</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aspernatur, 
      labore maxime error enim aperiam minus, 
      debitis ab esse exercitationem molestiae repudiandae laboriosam excepturi! 
      Quia hic dolores nisi odio nesciunt?</p>
      <div className="quantity">
        <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev -1)}>-</button>
           {quantity}
        <button onClick={() => setQuantity(prev => prev + 1)} >+</button>
      </div>
      <button className="add">
    <MdAddShoppingCart className='i'/> ADD TO CART
   </button>
 <div className="links">
   <div className="item">
       <AiOutlineHeart/> ADD TO WISH LIST

   </div>
   <div className="item">
      <GiScales/> ADD TO COMPARE
   </div>
 </div>
 <div className="info">
   <span>Vendor: Polo</span>
   <span>Product type: T-shirt</span>
   <span>Tag: T-shirt, Women, Top</span>
 </div>
 <hr/>
 <div className="info">
   <span>DESCRIPTION</span>
   <hr/>
   <span>ADDITIONAL INFORMATION</span>
   <hr/>
   <span>FAQ</span>
 </div>
  </div>
</div>
  )
}

export default Product