import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>WELCOME TO PETWELL</h2>
        <div>
          <div className="hero-hand-icon">
            <p>WHERE</p>
          </div>
          <p>WELLNESS</p>
          <p>BEGINS....</p>
        </div>
        <div >
          <a href="http://localhost:3001/" target="_blank">
            <button className='hero-latest-btn'>Chat With Us</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
