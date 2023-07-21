import React from 'react'
import './Footer.css'
import footerLogo from '../../assets/imgs/logo.png' 
function Footer() {
  return (
    <footer>
        <div className='container'>
        <div>
            <img src={footerLogo} alt="footer logo" />
            <p>This is Project Created By developers and ui create by </p>
            <ul className='social-links'>
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
            </ul>

        </div>
        <div>
            <h3>My Account</h3>
            <ul>
                <li><a href="#">Acconut</a></li>
                <li><a href='#'>Order</a></li>
                <li><a href="#">Cart</a></li>
            </ul>
        </div>
        <div>
                    <ul>
         <h3>Pages</h3>
         <li><a href="#">Home</a></li>
         <li><a href="#">About</a></li>
         <li><a href="#">Contact</a></li>
         <li><a href="#">Products</a></li>
        </ul>

        </div>
        </div>

    </footer>
  )
}

export default Footer