import React from 'react'
import ProductIem from './ProductIem'

import './Products.css'
function Products({productsHeader,products,children}) {
   


  return (
    <div className='products'>
        <div className='container'>
            <h2>{productsHeader}</h2>
            {children?children:""}
            <div className='products-container'>
                {
                  products?
                    products.map((product,i)=><ProductIem product={product} key={product.id}  />):
                    ""
                    }

                
                

            </div>

        </div>
    </div>
  )
}

export default Products