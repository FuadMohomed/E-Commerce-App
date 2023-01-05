import React from 'react'
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import Main from './Pages/main/Main'
import Product from './Pages/product/Product'
import Products from './Pages/products/Products'
import Navbar from './Components/navbar/Navbar'
import Footer from './Components/footer/Footer'
import Slider from './Components/slider/Slider'
import './app.scss'

const Layout = () => {
  return(
    <div className='app'>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </div>
  )
}

const router =createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children: [
      {
        path:'/',
       element:<Main/>
    },
      {
        path:'/products/:id',
       element: <Products/>
    },
      {
        path:'/product/:id',
       element:<Product/>
    },
    ]
  },

])

function App() {
  return (
  <div>
    <RouterProvider router={router}/>
   
  </div>
  )
}

export default App
