import React from 'react'
import Card from '../cards/Card'
import './featuredProducts.scss'

const data = [
  {
    id:1,
    img:"https://unsplash.com/photos/WiPgrA9woHM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NTk4fHxmYXNoaW9ufGVufDB8fHx8MTY3MjYxNTk5OA&force=true",
    img2: 'https://unsplash.com/photos/I4hap0ye-o4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NDI0fHxmYXNoaW9ufGVufDB8fHx8MTY3MjU4NTcxNQ&force=true',
  title:'Blue Crop Top',
  isNew:true,
  oldPrice: 19,
  price:12,
  },
  {
    id:2,
img:'https://unsplash.com/photos/5KAjSBSdaK4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NzUzfHxmYXNoaW9ufGVufDB8fHx8MTY3MjYxNjA5NQ&force=true',
  title:'Green Thermal Shirt',
  isNew:true,
  oldPrice: 19,
  price:15,
  },
  {
    id:3,
    img:"https://unsplash.com/photos/HLf8NdGcI0g/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NDI4fHxmYXNoaW9ufGVufDB8fHx8MTY3MjU4NTcxNQ&force=true",
    title:'Yellow Jacket',
  isNew:true,
  oldPrice: 39,
  price:20,
  },
  {
    id:4,
    img:'https://unsplash.com/photos/x24l8GJUyNg/download?ixid=MnwxMjA3fDB8MXxhbGx8Nnx8fHx8fDJ8fDE2NzI2NTU3OTI&force=true',
  title:'Yellow Biker Jacket',
  isNew:true,
  oldPrice: 59,
  price:30,
  },
]

function FeaturedProducts({type}) {
  return (
    <div className='featuredProducts'>
   <div className="top">
     <h1>{type} products</h1>
     <p>Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Incidunt dolor rem repellat? Praesentium eum,
        harum, officia facilis alias odit, aliquid deserunt ipsam recusandae labore fuga.
         Dignissimos totam facere tempore quae,
        excepturi animi adipisci quos blanditiis optio ut nulla doloremque ad harum itaque deleniti
         et atque perspiciatis incidunt non ea temporibus.
         </p>
         
   </div>
   <div className="bottom">
     {data.map((item) => (
       <Card item={item} key={item.id}/>
     ))}
   </div>
      </div>
  )
}

export default FeaturedProducts