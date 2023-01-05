import React from 'react'
import './category.scss'
import {Link} from 'react-router-dom'

function Category() {
  return (
    <div className='category'>
     <div className="col">
         <div className="row">
            <img 
            src = 'https://images.pexels.com/photos/4966995/pexels-photo-4966995.jpeg?cs=srgb&dl=pexels-kevin-kabore-4966995.jpg&fm=jpg&_gl=1*p9701s*_ga*MTAzNjE1NDYyNS4xNjcyNzUxMDIz*_ga_8JE65Q40S6*MTY3Mjc1MTAyMy4xLjEuMTY3Mjc1MTE3Mi4wLjAuMA..' 
            alt='pic'
            />
            <button>
                <Link to ='/products/1' className='link'>
               Sale
                </Link>
            </button>
         </div>
         <div className="row">
            <img
             src = 'https://images.pexels.com/photos/1544724/pexels-photo-1544724.jpeg?cs=srgb&dl=pexels-joshua-mcknight-1544724.jpg&fm=jpg&_gl=1*1da7hiw*_ga*MTAzNjE1NDYyNS4xNjcyNzUxMDIz*_ga_8JE65Q40S6*MTY3Mjc1MTAyMy4xLjEuMTY3Mjc1MTIwNS4wLjAuMA..'
             alt='pic'
             />
            <button>
                <Link to ='/products/1' className='link'>
               Women
                </Link>
            </button>
         </div>
     </div>
    <div className="col">
        <div className="row">
                 <img
             src = 'https://images.pexels.com/photos/3263460/pexels-photo-3263460.jpeg?cs=srgb&dl=pexels-brandon-t-leigh-3263460.jpg&fm=jpg&_gl=1*1hz5vu4*_ga*MTAzNjE1NDYyNS4xNjcyNzUxMDIz*_ga_8JE65Q40S6*MTY3Mjc1MTAyMy4xLjEuMTY3Mjc1MTE0OC4wLjAuMA..'
             alt='pic'
             />
            <button>
                <Link to ='/products/1' className='link'>
               Shoes
                </Link>
            </button>
            </div>
    </div>

     <div className="col col-l">
         <div className="row">

         <div className="col">
             <div className="row">
                      <img
             src = 'https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?cs=srgb&dl=pexels-raul-reynoso-1018911.jpg&fm=jpg&_gl=1*1wyw0fj*_ga*MTAzNjE1NDYyNS4xNjcyNzUxMDIz*_ga_8JE65Q40S6*MTY3Mjc1MTAyMy4xLjEuMTY3Mjc1MTEyOC4wLjAuMA..'
             alt='pic'
             />
            <button>
                <Link to ='/products/1' className='link'>
               Men
                </Link>
            </button>
             </div>
         </div>

         <div className="col">
             <div className="row">
                      <img
             src = 'https://images.pexels.com/photos/4355671/pexels-photo-4355671.jpeg?cs=srgb&dl=pexels-murat-esibatir-4355671.jpg&fm=jpg&_gl=1*v8qsbn*_ga*MTAzNjE1NDYyNS4xNjcyNzUxMDIz*_ga_8JE65Q40S6*MTY3Mjc1MTAyMy4xLjEuMTY3Mjc1MTEyMi4wLjAuMA..'
             alt='pic'
             />
            <button>
                <Link to ='/products/1' className='link'>
               Accessories
                </Link>
            </button>
             </div>
         </div>
         </div>

         <div className="row">
                 <img
             src = 'https://images.pexels.com/photos/3193731/pexels-photo-3193731.jpeg?cs=srgb&dl=pexels-jermaine-ulinwa-3193731.jpg&fm=jpg&_gl=1*12ffq6r*_ga*MTAzNjE1NDYyNS4xNjcyNzUxMDIz*_ga_8JE65Q40S6*MTY3Mjc1MTAyMy4xLjEuMTY3Mjc1MTEwMi4wLjAuMA..'
             alt='pic'
             />
            <button>
                <Link to ='/products/1' className='link'>
               New Season
                </Link>
            </button>
         </div>
     </div>
    </div>
  )
}

export default Category