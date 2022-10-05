import React,{useState,useEffect} from 'react'
import { CartHeader } from '../components/Cart/CartHeader'
import { CartCtx } from '../components/Cart/CartCtx'

const Cart = () => {
  return (
    <div>
        <CartHeader />
        <CartCtx />
    </div>
  )
}

export default Cart
