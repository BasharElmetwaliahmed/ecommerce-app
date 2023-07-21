import React, { useState } from 'react'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import './LoginPage.css'
import { auth, db } from '../../firebase';
import { logIn, } from '../../redux/UserSlice';
import {  useNavigate } from 'react-router-dom';
import Notification from '../../Components/Notification';
import { doc, setDoc } from 'firebase/firestore';
import { getCartProducts } from '../../redux/CartSlice';





const savetLocalStorage=(user)=>{
  window.localStorage.setItem('user',JSON.stringify(user))
}


function LoginPage({isSignUp,setSignUp}) {

    const [isLoading,setLoading]=useState(false)
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const cart=useSelector(state=>state.cart)

    

    const signUpHandler=async(email,password)=>{
      setLoading(true)
      try{
            const userCredential =await createUserWithEmailAndPassword(auth,email,password)    
            const user = userCredential.user;
            navigate('/',{
              replace:true
            })
            dispatch(logIn({
              accessToken:user.accessToken,
              uid:user.uid
            }))
            Notification('Logged in successfully')

            savetLocalStorage({
              accessToken:user.accessToken,
              uid:user.uid
            })
            await setDoc(doc(db, "cart", user.uid), {cartProducts:cart.cartProducts , favProducts:cart.favProducts});

            setLoading(false)
      }
      catch(error){
                Notification('Something  wrong','error')
                setLoading(false)


      }
    }


    const signInHandler=async(email,password)=>{
      setLoading(true)
      try{
       const userCredential =await  signInWithEmailAndPassword(auth, email, password)
       const user =await userCredential.user;    
       dispatch(logIn({
        accessToken:user.accessToken,
        uid:user.uid
      }))
                  Notification('Logged in successfully')

            savetLocalStorage({
              accessToken:user.accessToken,
              uid:user.uid
            })     
      dispatch(getCartProducts(user.uid))
       navigate('/',{
        navigate:true
       })

      }
      catch(error){
        Notification('Something  wrong','error')
        console.log(error)
      }
                    setLoading(false)


    }    

    const submitHandler=(e)=>{
        e.preventDefault()
        if(isSignUp){
             signUpHandler(email,password)
                    }
        else{
             signInHandler(email,password)
            }

  //clear email & password
        setEmail('')
        setPassword('')
    }



    const signChangeHandler=()=>{
    setSignUp(!isSignUp)
    setEmail('')
    setPassword('')
    }




  return (
<>
    { <form className='login-page' onSubmit={submitHandler}>
       <h2>{isSignUp?'Sign Up':'Sign In'}</h2>
       <p>{isSignUp?"Create New Accout":" Have An Account"}</p>


        <div className='field'>
            <h6 forhtml='email'>Email</h6>
            <input type='email' id='email' name='email' placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
       <div className='field'>
            <h6 forhtml='password'>Password</h6>
            <input type="password" id="password" name="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
       </div>

     {isLoading?<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
     :<button className='submit-btn' type='submit'>Submit</button>}
    <a className='sign-type' onClick={signChangeHandler}>{isSignUp?"Sign In":"Sign Up"}</a>
    </form>

    

  
}

 </>)
}

export default LoginPage