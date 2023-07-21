import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart,increaseProductAmount, decreaseProductAmount } from '../../redux/CartSlice'

function CartItem({item:product}) {
     const dispatch=useDispatch()

     const removeItemHandler=()=>{
        dispatch(removeFromCart(product))
     }   
     const increaseProductAmountHandler=()=>{
        dispatch(increaseProductAmount(product))
     }
     const decreaseProductAmountHandler=()=>{
        dispatch(decreaseProductAmount(product))
     }
   
  return (
      <div className='cart-product--item '>
                            <div className='img-container'>
            <img src={product.image} alt='product' />
        </div>
        <div className='cart-product-detail'>
            <h5>{product.title}</h5>
            <p className='product_category'>{product.category}</p>
            <div className='product-amount'>
            <div className='product-quantity'>
                <button className='increase' onClick={increaseProductAmountHandler}>+</button>
                <p>{product.amount}</p>
                <button className='decrease' onClick={decreaseProductAmountHandler}>-</button>
            </div>
            <p className='product-price'>Price:{product.price}$</p>

            </div>
                              <p className='product-total'>SUB TOTAL: {product.amount*product.price}$</p>
                              <button className='rmv-btn' onClick={removeItemHandler}>X</button>


        </div>
      </div>  )
}

export default CartItem