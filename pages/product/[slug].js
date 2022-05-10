// square brackets mean the product is gonna be dynamic

import React from 'react';
import { client, urlFor } from '../../lib/client';
import {AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar} from 'react-icons/ai';
import Product from '../../components/Product';

const ProductDetails = ({ product, products}) => {
console.log(product)
  const {image, name, details, price} = product;
  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='image-container'>
            <img src={urlFor(image && image[0])} className='product-detail-image'/>

          </div>

          {/* image carousel */}
          {/* <div className='small-images-container'>
            {image?.map((item, i) => (
              <img
              key={i}
               src={urlFor(item)}
               className=''
               onMouseEnter=''
               />
            ))}

          </div> */}


        </div>

        <div className='product-detail-desc'>
          <h1>{name}</h1>
          <div className='reviews'>
            <div>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiOutlineStar/>
            </div>

            <p>(20)</p>

          </div>

          <h4>Details</h4>
          <p>{details}</p>
          <p className='price'>${price}</p>
          <div className='quantity'>
            <h3>Quantity:</h3>
            <p className='quantity-desc'>
              <span className='minus' onClick=""><AiOutlineMinus/></span>
              <span className='num' onClick="">0</span>
              <span className='plus' onClick=""><AiOutlinePlus/></span>
            </p>
          </div>

          {/* add to cart */}
          <div className='buttons'>
            <button type='button' className='add-to-cart' onClick="">Add to Cart</button>

            <button type='button' className='buy-now' onClick="">Buy Now</button>

          </div>

        </div>

      </div>

      {/*  */}
      <div className='maylike-products-wrapper'>
        <h2>You may also like</h2>
        <div className="marquee">
          <div className='maylike-products-container track'>
            {products.map((item) => (
              <Product key={item._id} product={item}/>
            ))}

          </div>


        </div>

      </div>

    </div>
  )
}

// set static paths
export const getStaticPaths = async () => {
  // get the query
  // get all products but just the specifix product
  // get current property of a specific slug
  const query = `*[_type == "product"] {    
    slug {
      current
    }
  }
  `
  const products = await client.fetch(query);

  // return a param object
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  // return an object with a path and callback
  return {
    paths,
    fallback: 'blocking'
  }

}

export const getStaticProps = async ({params: {slug}}) => {
  // form sanity query for both product and products
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);

  
  const productsQuery = '*[_type == "product"]';
  const products = await client.fetch(productsQuery);

  
 console.log(product)
  // what getServerSide props returns gets populated in the homapage fields
  return {
    props: {products, product}
  }
}

export default ProductDetails