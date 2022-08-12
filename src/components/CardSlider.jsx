import React from 'react'
import '../index.css';
import blackShoes from '../assets/black_shoes.png';
import blueShoes from '../assets/blue_shoes.png';


function CardSlider() {



  return <div className='cards-holder'>

      <div className='card-1' id="card1">
        <img src={blackShoes} className='card-img1' alt="Deals"/>
        <p className='card-heading1'>Great Deals</p>
      </div>

      <div className='card-2' id="card2">
        <img src={blueShoes} className='card-img2' alt="Deals"/>
        <p className='card-heading2'>Blue</p>
      </div>

    <div className='card-3'>
    <img src={blueShoes} className='card-img2' alt="Deals"/>
        <p className='card-heading3'>Text</p>
    </div>
    <div className='card-4'>
    <img src={blueShoes} className='card-img4' alt="Deals"/>
        <p className='card-heading4'>Blue</p>
    </div>

  </div>
}

export default CardSlider