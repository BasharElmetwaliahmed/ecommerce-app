import { Link } from 'react-router-dom'
import  './TopHeading.css'
function TopHeading({setSignUp}) {
  return (
    <div className='top-heading' >
      <div className='container'>
              <h3>Free shipping, 30-day return or refund guarantee.</h3>
      <div>
       <Link to='/loginsignin' onClick={()=>{setSignUp(false)}}>SIGN IN</Link>
       <Link to='/loginsignin' onClick={()=>{setSignUp(true)}}>SIGN UP</Link>
      </div>
      </div>

    </div>
  )
}

export default TopHeading