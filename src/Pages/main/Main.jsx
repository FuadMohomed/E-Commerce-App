import React from 'react'
import Slider from '../../Components/slider/Slider'
import FeaturedProducts from '../../Components/featuredproducts/FeaturedProducts'
import './main.scss'
import Category from '../../Components/category/Category'
import Contact from '../../Components/contact/Contact'



function Main() {
  return (
    <div className='home'>
      <Slider/>
     <FeaturedProducts type='featured'/>
     <Category/>
     <FeaturedProducts type='trending'/>
     <Contact/>
      </div>
  )
}

export default Main