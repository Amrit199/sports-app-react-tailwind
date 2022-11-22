import React, { useContext } from 'react'
import CartContext from '../store/CartContext'

const Cart = () => {
    const cartBox = useContext(CartContext)
    const { items } = cartBox
  return (
    <div>
      hello
    </div>
  )
}

export default Cart
