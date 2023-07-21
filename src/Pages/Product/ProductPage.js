import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import  './ProductPage.css'
import {  useParams } from 'react-router-dom';
import Notification from '../../Components/Notification';
import { addToCartWithAmount, decreaseProductAmount, increaseProductAmount, removeFromCart } from '../../redux/CartSlice';



function ProductPage() {
  const products=useSelector(state=>state.products).products;
  const cartItems=useSelector(state=>state.cart).cartProducts;
  const dispatch=useDispatch()
  const [quantityOfProduct,setQuantity]=useState(0);
  const {productId}=useParams();
  let  existOnCart= cartItems.some(item => productId==item.id);
  const product=products.find(product=>product.id==productId);
  let  existedtProduct=existOnCart?cartItems.find(item => productId==item.id):null
  

  useEffect(()=>{
  if(existOnCart){
    setQuantity(existedtProduct.amount);
  }


  },[])

  const increaseHandler=()=>{
      setQuantity(quantityOfProduct+1)
      if(existOnCart)
      dispatch(increaseProductAmount(product))
  }
  const decreaseHandler=()=>{
    if(quantityOfProduct>0){
    setQuantity(quantityOfProduct-1)}
    if(existOnCart)
    dispatch(decreaseProductAmount({...product,amount:quantityOfProduct}))
  
    
  }
  const addToCartBtnHandler=()=>{
    if(quantityOfProduct==0){
     Notification('please determine quantity','warning')
     return
    }
    if(!existOnCart){
    dispatch(addToCartWithAmount({product,amount:quantityOfProduct}))
    Notification('product added to cart')}
    else{
      dispatch(removeFromCart(product))
      setQuantity(0)
    }
  }
  
  return (
    <div className='product-page'>
    {
      product?
    <div className='product-content container'>
      <div className='product-img'>
        <img src={product.image} ></img>
      </div>
      <div className='product-details'>
          <div className='product-title'>
            <h6>{product.category}</h6>
            <h2>{product.title}</h2>
        </div>
        <p className='product-description'>{product.description}</p>
          <div className='product-info'>
            <p className='price'>{product.price} $</p>
            <p className='rate'>{product.rating.rate} <i className="fa-solid fa-star"></i></p>
          </div>
       <div className='product-quantity'>
        <button className=' btn-css' onClick={increaseHandler}>+</button>
        <p>{quantityOfProduct}</p>
        <button className=' btn-css' onClick={decreaseHandler}>-</button>
       </div>
       <button className=' btn-css' onClick={addToCartBtnHandler}><i className="fa-solid fa-bag-shopping"></i>{!existOnCart?'Add To Cart':'Remove From Cart'}</button>

      </div>
    </div>:
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    }

    </div>
  )
}

export default ProductPage