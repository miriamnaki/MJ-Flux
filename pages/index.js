import React from 'react';
import { Product, FooterBanner, HeroBanner} from '../components';
import { client } from '../lib/client';
// import HeroBanner from '../components/HeroBanner';


const Home = ({products, bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      {console.log(products)}
      {console.log(bannerData)}

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Clothes of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map(product => <Product key={product._id} product={product}/>)}

      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  )
}

// fetch data from the sanity api
export const getServerSideProps = async () => {
  // form sanity query for both product and banner
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  // what getServerSide props returns gets populated in the homapage fields
  return {
    props: {products, bannerData}
  }
}

export default Home;