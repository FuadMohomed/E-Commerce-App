import React from 'react'
import './ncart.scss'
import {MdOutlineDelete} from 'react-icons/md'

const data = [

    {
        id:1,
        img:"https://unsplash.com/photos/WiPgrA9woHM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NTk4fHxmYXNoaW9ufGVufDB8fHx8MTY3MjYxNTk5OA&force=true",
        img2: 'https://unsplash.com/photos/I4hap0ye-o4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NDI0fHxmYXNoaW9ufGVufDB8fHx8MTY3MjU4NTcxNQ&force=true',
        title:'Blue Crop Top',
        desc:'Blue Crop Top',
        isNew:true,
        oldPrice: 19,
        price:12,
    },
    {
        id:2,
        img:'https://unsplash.com/photos/5KAjSBSdaK4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NzUzfHxmYXNoaW9ufGVufDB8fHx8MTY3MjYxNjA5NQ&force=true',
        title:'Green Thermal Shirt',
        desc:'Green Thermal Shirt',
        isNew:true,
        oldPrice: 19,
        price:15,
    },
]

function Ncart() {
  return (
<div className='cart'>
       <h1>Products in your cart</h1>
         {data?.map((item) => {
             return <div className="item" key={item.id}>
               <img src={item.img} alt="img" />
               <div className="details">
                 <h1>{item.title}</h1>
                 <p>{item.desc?.substring(0,100)}</p>
                 <div className="price">1 * ${item.price}</div>

               </div>
               <MdOutlineDelete className='delete'/>
             </div>
         })}
         <div className="total">
           <span>SUBTOTAL:</span>
           <span>$1234</span>
         </div>
         <button>PROCEED TO CHECKOUT</button>
         <span className="reset">
           Reset Cart
         </span>
        </div>
  )
}

export default Ncart