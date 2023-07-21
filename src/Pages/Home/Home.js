import Features from '../../Components/Features'
import Products from '../../Components/Products/Products'
import { useSelector } from "react-redux";
import img from '../../assets/imgs/hero-1.jpg'
import secondslide from '../../assets/imgs/hero-2.jpg'

import './Home.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Home() {
  const products=useSelector(state=>state.products).products
  const [currentSlide,setCurrentSlide]=useState(0);
  const prevSlide=()=>{
    if(currentSlide==0){
      setCurrentSlide(1)
    }
    else{
      setCurrentSlide(currentSlide-1);
    }
  }

    const nextSlide=()=>{
    if(currentSlide==1){
      setCurrentSlide(0)
    }
    else{
      setCurrentSlide(currentSlide+1);
    }
  }


  return (
    <>

    <div className="home">
      <div className="container">
         <div className='txt'>
                  <h4>Summer Collection</h4>
        <h2>Fall - Winter Collections 2030</h2>
        <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                commitment to exceptional quality.</p>
         <Link to='/products' className='shop-btn'>Shop now <i className="fa-solid fa-arrow-right"></i> </Link>

         </div>
      </div>
      <div className='background' style={{transform:`translateX(-${currentSlide*100}%)`}}>
           <img src={img} className='slide-img'></img>
           <img src={secondslide} className='slide-img'></img>

      </div>
      <button className='left-slide' onClick={prevSlide}><i className="fa-solid fa-chevron-left"></i></button>
      <button className='right-slide' onClick={nextSlide}><i className="fa-solid fa-chevron-right"></i></button>
    </div>
            <Features/>
     <Products productsHeader='Top Products' products={products.slice(0,8)}/> 
     </>
  )
}

export default Home