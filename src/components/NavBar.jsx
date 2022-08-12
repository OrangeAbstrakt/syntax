import React from 'react'
import '../index.css';
import { MdShoppingCart, MdShoppingBag } from "react-icons/md";


function NavBar() {

  const shopLaunch = ()=>{
    
  }

  return <div>
    <div className='nav-bar'>
      <input type="text" className='search-bar' placeholder='Search...' />
      <div className='icon-holder'>        
          <MdShoppingBag className='icon-1' onClick={shopLaunch()}/>
        <MdShoppingCart className='icon-2' />
      </div>
    </div>
  </div>
}

export default NavBar