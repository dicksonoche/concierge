import React from 'react'
import bgImg from "../../assets/heroimg.jpg"
import { AiOutlineSearch } from 'react-icons/ai'


import "./herostyles.css"

function Hero() {
  return (
    <div className='hero'>
        <img className='hero-img' src={bgImg} alt='beach' />
        <div className="overlay"></div>
        <div className="content">
          <h1>Explore the world with confidence</h1>
          <h3>Choose from a wide range of carefully curated travel packages and<br/> destinations backed up by our expert team of travel consultants.</h3>
          <form className='form'>
            <div>
              <input type="text" placeholder='Search Destination'/>
            </div>
            <button><AiOutlineSearch className='icon'/></button>
          </form>
        </div>
    </div>
  )
}

export default Hero;