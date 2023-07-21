import { signOut, updatePassword } from 'firebase/auth'
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Notification from '../../Components/Notification'
import { auth } from '../../firebase'
import { logOut } from '../../redux/UserSlice'
import './UserPage.css'

function UserPage() {
    const passwordRef=useRef()
    const dispatch=useDispatch()
    const navigate=useNavigate()


    const changePasswordHandler=()=>{
       const newPassword=passwordRef.current.value;
        const user = auth.currentUser;


updatePassword(user, newPassword).then(() => {
    Notification('password changed success')
}).catch((error) => {
    Notification('something wrong','error')
});}
  const signOutHandler=()=>{
    dispatch(logOut())

signOut(auth).then(() => {
  localStorage.clear()
   navigate('/')
      dispatch(logOut())

  
}).catch((error) => {
  // An error happened.
});
  }
    
  return (
    <div className='page user-page'>
           <h2>Account Settings</h2>
               <button className=' btn-css' onClick={signOutHandler}><i className="fa-solid fa-right-from-bracket"></i>Log Out</button>

               <div className="form__group">
  <input type="password" className="form__input" id="name" placeholder="New Password" required=""  ref={passwordRef}/>
  <label htmlFor="name" className="form__label"></label>
                 <button className=' btn-css' onClick={changePasswordHandler}>Change Password</button>

</div>

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

    </div>
  )
}

export default UserPage