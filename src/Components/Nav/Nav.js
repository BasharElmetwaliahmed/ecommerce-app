import React, { useState } from 'react'
import logo from '../../assets/imgs/logo.png'
import searchIcon from '../../assets/imgs/icon/search.png'
import favIcon from '../../assets/imgs/icon/heart.png'
import cartIcon from '../../assets/imgs/icon/cart.png'
import './Nav.css'
import {NavLink,Link} from 'react-router-dom'
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Notification from '../Notification'



function Nav() {
  const  [navClass,setNavClass]=useState('');
  const user=useSelector(state=>state.user)
  const navigate=useNavigate()
  const navHandler=()=>{
    if(navClass=='active'){ 
      setNavClass('')
    }
    else{
      setNavClass('active')
    }

  }
  const navigateHandler=(path)=>{
    if(!user.isAuthenticated){
      navigate('loginsignin')
      Notification('you must be logged in', 'warning')
  }
    else {navigate(`/${path}`)}
  }
  const onClickLink=()=>{
    setNavClass('')
  }
  
  return (
    <div className='header'>
        <div className='container'>
                    <img src={logo} alt="logo" className='header-logo' />
        <nav className={`header-nav ${navClass}`}>
           <ul>
            <li><NavLink to='/' onClick={onClickLink}>Home</NavLink></li>
            <li><NavLink to='/products' onClick={onClickLink}>Product</NavLink></li>
            <li><NavLink to='/Contact' onClick={onClickLink}>Contact</NavLink></li>
           </ul>
        </nav>
         <button className='nav-btn' onClick={navHandler}><i className="fa-solid fa-bars"></i></button>
        <div className='header-btns'>
          <button onClick={()=>navigateHandler('favourites')}><img src={favIcon} alt="Favourits" /></button>         
          <button onClick={()=>navigateHandler('cart')}><img src={cartIcon} alt="cart" /></button>
          <button  onClick={()=>{navigateHandler('user')}}><i className="fa-solid fa-user"></i></button>
        </div>
        </div>

    </div>
  )}


export default Nav