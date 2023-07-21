import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Products from '../../Components/Products/Products';
import './ProductsPage.css'
function ProductsPage() {
    const [categories,setCategories]=useState(null)
    const products=useSelector(state=>state.products).products;
    let [currentProducts,setCurrentProducts]=useState(products)
    const fetchCategories=async()=>{
       const response=await fetch('https://fakestoreapi.com/products/categories')
       const data=await response.json()
       let categories=data.map(category=>{
       return{ categoryName:category,
        isACtive:false,}
       })
         setCategories(categories)

    }
    useEffect(()=>{
        if(!categories){
      fetchCategories()
    }

    },[categories])


    const categoryHandler=(e)=>{

        let choosenCategory=e.target.value
        if(choosenCategory=='all'){
            setCurrentProducts(products)
        }
        else{
     setCurrentProducts(products.filter(product=>product.category==choosenCategory))
        }
    
    }

  return (
    <div className='products-page'> 
        <h2>Products</h2>
        {
            categories?
      <>   
       <Products productHeader="Products" products={currentProducts}>

           <div className="select" onChange={categoryHandler}>
           <select >
            <option value='all'>All</option>
      {categories.map((category,i)=><option key={i} value={category.categoryName}>{category.categoryName}</option>)}
           </select>
       </div>
       </Products>
       </>

        :
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>


        }

    </div>
  )
}

export default ProductsPage