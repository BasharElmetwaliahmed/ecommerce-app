import './App.css'
import TopHeading from './Components/TopHeading'
import Nav from './Components/Nav/Nav'
import Home from './Pages/Home/Home'
import { useEffect, useState } from 'react'
import Cart from './Pages/Cart/Cart'
import Footer from './Components/Footer/Footer'
import { useSelector,useDispatch } from "react-redux";
import { getProducts } from './redux/ProductsSlice'
import LoginPage from './Pages/Log/LoginPage'
import { Route, Routes } from 'react-router-dom'
import Contact from './Pages/Contact/Contact'
import ProductPage from './Pages/Product/ProductPage'
import ProductsPage from './Pages/Product/ProductsPage'
import FavProducts from './Pages/FavProducts/FavProducts'
  import 'react-toastify/dist/ReactToastify.css';
import UserPage from './Pages/UserPage/UserPage'
import { getCartProducts } from './redux/CartSlice'
import { doc, setDoc } from 'firebase/firestore'
import { db } from './firebase'
import { logIn } from './redux/UserSlice'
import { ToastContainer } from 'react-toastify'



let initial=0;

const checkLocalStorage=()=>{
  if(localStorage.getItem('user')){
    return true
  }
  else{
    return false
  }
}

function App() {
  const [isSignUp,setSignUp]=useState(true)
  const isAuthenticated=useSelector(state=>state.user).isAuthenticated
  const user=useSelector(state=>state.user).user
  const cart=useSelector(state=>state.cart);
  const dispatch=useDispatch();
  const [homeNotification,setHomeNotification]=useState(false)

      const updateData=async(uid)=>{
await setDoc(doc(db,'cart',uid ), {cartProducts:cart.cartProducts , favProducts:cart.favProducts});
    }
  useEffect(()=>{
    if(initial===0){
      initial++
      return;
    }
    if(isAuthenticated ){
    updateData(user.uid)
    }
  },[cart])


  

 useEffect(()=>{

  //when app open get Products
  dispatch(getProducts())

 //check if user is logged in
 if(checkLocalStorage()){
 //get user from local storage
  const user=JSON.parse(localStorage.getItem('user'));
  dispatch(logIn(user))
    dispatch(getCartProducts(user.uid))}

 }


,[])

  return (
    <>
    {isAuthenticated?null:<TopHeading setSignUp={setSignUp}/>}
  <Nav/>
 <Routes>
  < Route path='/' element={<Home/>}/>
  < Route path='/contact' element={<Contact/>}/>
  < Route path='/products' element={<ProductsPage/>}>
    </Route>
      <Route path='/products/:productId' element={<ProductPage></ProductPage>}/>

      {isAuthenticated?
      <>
                  < Route path='/cart' element={<Cart/>} />
      < Route path='/favourites' element={<FavProducts/>} />
      <Route path='/user' element={<UserPage/>}/>
      
      </>
      :  < Route path='/loginsignin' element={<LoginPage setSignUp={setSignUp} isSignUp={isSignUp}/>} />}
 </Routes>
  <Footer/> 

         <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </>
  )
}

export default App
