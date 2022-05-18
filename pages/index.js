import React from 'react';
import { Product, FooterBanner, HeroBanner} from '../components';
import { client } from '../lib/client';
// import HeroBanner from '../components/HeroBanner';
// import FooterBanner from '../components/FooterBanner';


const Home = ({products, bannerData, footerBannerData}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      {console.log(products)}
      {console.log(bannerData)}
      {console.log(footerBannerData)}

      <div className='products-heading'>
        <h2>Top Sellers</h2>
        <p>Refine Your Image</p>
      </div>

      <div className='products-container'>
        {products?.map(product => <Product key={product._id} product={product}/>)}

      </div>

      <FooterBanner footerBanner={footerBannerData && footerBannerData[0]}/>
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

  const footerBannerQuery = '*[_type == "footerBanner"]';
  const footerBannerData = await client.fetch(footerBannerQuery);

  // what getServerSide props returns gets populated in the homepage fields
  return {
    props: {products, bannerData, footerBannerData}
  }
}

export default Home;