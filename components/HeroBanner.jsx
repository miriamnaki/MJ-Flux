import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';
import { useEffect } from 'react';
import { runSchoolPride } from '../lib/utils2';

const HeroBanner = ({heroBanner}) => {

  useEffect(() => {
    runSchoolPride()
  },[])

  return (
    <div className='hero-banner-container'>
      <div className='hero-banner-inner'>
        <p className='beats-solo'>{heroBanner.smallText}</p>

        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>

        <img src={urlFor(heroBanner.image)} alt='landing-image' className='hero-banner-image'/>

        <div>
          <Link href={`/product/${heroBanner.product}`}> 
          <button>{heroBanner.buttonText}</button>
          </Link>

          <div className='desc'>
            <p>{heroBanner.desc}</p>
          </div>
        </div>


      </div>

    </div>
  )
}

export default HeroBanner;