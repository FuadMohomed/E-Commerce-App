import React from 'react'
import { Link } from 'react-router-dom'
import './card.scss'

function Card({item}) {
  return ( 
    <Link to={`/product/${item.id}`}>
    <div className='card'>
      <div className="image">
        {item.isNew && <span>New Season</span>}
        <img src={item.img} alt="pic1" className="mainImg" />
        <img src={item.img2} alt="pic2" className="secoundImg" />
      </div>
      <h2>{item.title}</h2>
      <div className="prices">
        <h3>${item.oldPrice}</h3>
        <h3>${item.price}</h3>
      </div>
      </div>
    </Link>
  )
}

export default Card