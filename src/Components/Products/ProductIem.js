import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import {Notification} from '../Notification'
import { addToCart, addToFav } from '../../redux/CartSlice';
import './ProductItem.css'
function ProductIem({product}) {
   const dispatch=useDispatch();
   const navigate=useNavigate();

    const cartItems =useSelector(state=>state.cart).cartProducts
    const favItems=useSelector(state=>state.cart).favProducts
    const {id,category,image,title,price}=product
    const existOnCart=cartItems.some(item => id===item.id);
    const addToCartHandler=()=>{
      if(!existOnCart){
      dispatch(addToCart(product)) 
      Notification('item added to cart')
      }
      else{
        dispatch(addToCart(product)) && Notification('product removed from cart')
      }
    }
        const existOnFav=favItems.some(item => id===item.id);

    const addToFavHandler=()=>{
      if(!existOnFav){
      dispatch(addToFav(product)) && Notification('product added to fav ')
      }
      else{
              dispatch(addToFav(product)) && Notification('product removed from fav ')

      }
    

    }


    
  return (
    <div className='product-item'>
        <div className='img-contianer'>
                    <img src={image} alt="product-img " className='product-img' />
                    <div className='product-selections'>
                        <button onClick={addToCartHandler} className={existOnCart?"added":null}><i className="fa-solid fa-cart-shopping"></i></button>
                        <button><i className="fa-regular fa-eye" onClick={()=>{navigate(`/product/${id}`)}}></i></button>
                        <button onClick={addToFavHandler} className={existOnFav?"added":null}><i className="fa-regular fa-heart"></i></button>
                    </div>

        </div>
        <div className='product-txt'>
             <h2>{category}</h2>
            <h3>{title}</h3>
            <p>{`${price}$`}</p> 
        </div>
  

    </div>
  )
}

export default ProductIem