import React from 'react';
import Link from 'next/link';

// ger url for the image
import { urlFor } from '../lib/client';
import product from '../sanity_myeshop/schemas/product';

const Product = ({product: {image, name, slug, price}}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img src={urlFor(image && image[0])}
          width={300}
          height={300}
          className='product-image'
          />
          <p className='product-name'>{name}</p>

          <p className='product-price'>${price}</p>

        </div>
      </Link>
    </div>
  )
}

export default Product