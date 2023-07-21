import React from 'react'
import {  useSelector } from 'react-redux'
import './Cart.css'
import CartItem from './CartItem'
function Cart() {
  const cartItems =useSelector(state=>state.cart).cartProducts
  const products=useSelector(state=>state.products).products


  
 //find product in products list
  const findProduct=(cartproduct)=>{
    const productexisted=products.find(product=>cartproduct.id==product.id)
    return {...productexisted,amount:cartproduct.amount}
  }

  //get cartProduct with full information
  const cartProducts=cartItems.map(product=>findProduct(product))
  const total=cartProducts?cartProducts.reduce((acc,curr)=>{

    if(!curr) return;
    return (curr.amount*curr.price)+acc
  },0):0

 

  return (
    <div className='cart'>
        <h2>Cart</h2>
        <div className='container'>
         { 
         cartProducts.length?
         cartProducts.map(item=><CartItem item={item} key={item.id}/>):
         <h3>There are no Items</h3>
         }

     {cartProducts.length?<div className='total'>
        <h3>Total</h3>
        <p>{total.toFixed(2)}$</p>

      </div>:""}
        </div>
 

    </div>
  )
}

export default Cart