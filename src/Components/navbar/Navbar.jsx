import { useState } from 'react'
import './navbar.scss'
import {BsHeart} from 'react-icons/bs'
import {HiOutlineSearch} from 'react-icons/hi'
import {AiOutlineUser} from 'react-icons/ai'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {AiOutlineDown} from 'react-icons/ai'
import pic1 from '../../img/pic1.jpg'
import {Link} from 'react-router-dom'
import Ncart from '../nCart/Ncart'




function Navbar() {
  const [open,setOpen] = useState(false)

  return (
    <div className='navbar'>
    <div className="wrapper">
      <div className="left">
        <div >
          <img src={pic1} alt='p'/>
          <AiOutlineDown/>
        </div>
        <div className="item">
          <span>CAD</span>
          <AiOutlineDown/>
        </div>
        <div className="item">
          <Link className='link' to='/products/1'>women</Link>
        </div>
        <div className="item">
        <Link className='link' to='/products/2'>Men</Link>
        </div>
        <div className="item">
          <Link className='link' to='/products/1'>Children</Link>
        </div>
      
      </div>
      <div className="center">
         <Link  className='link' to='/'>BestStore</Link>
      </div>
      <div className="right">
        <div className="item">
          <Link className='link' to='/'>Homepage</Link>
        </div>
        <div className="item">
          <Link className='link' to='/'>About</Link>
        </div>
        <div className="item">
          <Link className='link' to='/'>Contact</Link>
        </div>
        <div className="item">
          <Link className='link' to='/'>Stores</Link>
        </div>
        <div className="icons">
          <HiOutlineSearch/>
          <AiOutlineUser/>
          <BsHeart/>
          <div className="cartIcon" onClick={() => setOpen(!open)}>
            <HiOutlineShoppingCart/>
            <span>0</span>
          </div>

        </div>
       
      </div>
    </div>
    {open &&  <Ncart/>}
      </div>
  )
}

export default Navbar