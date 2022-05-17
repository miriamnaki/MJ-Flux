import React from 'react';
import Link from 'next/link';
import {AiOutlineShopping} from 'react-icons/ai';
import {Cart} from './';
import { useStateContext } from '../context/StateContext';
import logo from '../assets/Logo.png';
console.log('image',logo)

const Navbar = () => {

  const { showCart, setShowCart, totalQuantities } = useStateContext()
  return ( 
    <div className='navbar-container'>
      <p>
        <Link href='/'>
          <img src={logo.src} alt='logo'  className='navbar-logo'/>
        </Link>
      </p>

      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping/>
        <span className='cart-item-qty'>{totalQuantities}</span>

      </button>

      {showCart && <Cart/>}

    </div>
  )
}

export default Navbar