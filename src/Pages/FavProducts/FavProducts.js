import React from 'react'
import {  useSelector } from 'react-redux'
import Products from '../../Components/Products/Products'

function FavProducts() {
    const favItems=useSelector(state=>state.cart).favProducts

      const products=useSelector(state=>state.products).products

 //find product in products list
  const findProduct=(favproduct)=>{
    const productexisted=products.find(product=>favproduct.id==product.id)
    return {...productexisted}
  }

  //get cartProduct with full information
  const favProducts=favItems.map(product=>findProduct(product))
  return (
    <div className='page'>
        { favItems.length?
        <Products products={favProducts} productsHeader='Favourite Products'></Products>:
        <h3>There Are No Favourite Items</h3>
        }
    </div>
  )
}

export default FavProducts