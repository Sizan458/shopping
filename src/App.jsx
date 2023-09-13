
import { useState } from 'react'
import './App.css'
import Cart from './component/Cart'
import Shopping1 from './component/shopping1'
import Shopping2 from './component/shopping2'

function App() {
 const [cart,setCart]= useState([])
 
 const handleCart=(carts,)=>{
  
  const addItems=[...cart,carts]
  setCart(addItems)

 }

  return (
    <>
    <Shopping1></Shopping1>
    <div className=' gap-4 w-[95%] mx-auto md:flex '>
    <Shopping2 handleCart={handleCart} ></Shopping2>
    <Cart cart={cart}></Cart>
    </div>
    </>
  )
}

export default App
