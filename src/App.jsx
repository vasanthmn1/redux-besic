import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'
import CartItem from './components/CartItem'
import Savecart from './components/Savecart'

function App() {

  const { value, total } = useSelector((state) => state.cart)

  return (
    <div className="App">
      {
        value.map((val, i) => {
          return (
            <CartItem key={i} value={val} />
          )
        })
      }
      <div>
        <Savecart />
        <h1>{total}</h1>
      </div>
    </div>
  )
}

export default App
