import React, {useState} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useStateContext } from '../context/StateContext';

const Success = () => {
  const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();
  const [order, setOrder] = useState(null);
  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill/>
        </p>
        <h2>Thank you for your order!</h2>
        <p className='email-msg'>Check your email inbox for the reciept!</p>
        <p className='description'>
          If you have any questions please email
           <a className='email' href='mailto:customerservice@example.com'>customerservice@desertmoresso.com</a>
        </p>

        <Link href='/'>
          <button type='button' width='300px' className='btn'>Continue shopping</button>
        </Link>

      </div>


    </div>
  )
}

export default Success