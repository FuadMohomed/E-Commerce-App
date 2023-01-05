import React from 'react'
import './slider.scss'
import {FaArrowLeft} from 'react-icons/fa'
import {FaArrowRight} from 'react-icons/fa'
import { useState } from 'react'

const data = [
    "https://unsplash.com/photos/ISrx6MJ7XXI/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTYxfHxmYXNoaW9ufGVufDB8fHx8MTY3MjY0NzEwOQ&force=true",
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&dl=dom-hill-nimElTcTNyY-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
    'https://images.unsplash.com/photo-1579969406275-0b37fa82deca?ixlib=rb-4.0.3&dl=mohammed-hassan-fdCvrdYUJsY-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
]




function Slider() {
const [currentSlide, setCurrentSlide] = useState(0)

const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
}

const nextSlide = () => {
       setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
}

  return (
    <div className='slider'>
     <div className="container" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
         <img src={data[0]} alt='0' />
         <img src={data[1]} alt='1' />
         <img src={data[2]} alt='2' />
         </div>   
         <div className="icons" >
             <div className="icon" onClick={prevSlide}>
                 <FaArrowLeft/>
             </div>
             <div className="icon" onClick={nextSlide}>
                 <FaArrowRight/>
             </div>
         </div>
     </div>
  )
}

export default Slider