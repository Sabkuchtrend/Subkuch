// src/components/Home.js
import React from 'react';
import Carousel from '../home-component/carousel';
// import Explore from '../home-component/explore';
import Category from '../home-component/category';
import HotDeals from '../home-component/hot-deals';
import SaleBanner from '../home-component/saleBanner';
import Accessories from '../home-component/accessories';
import Cards from '../home-component/cards';

const Home = () => {
  return (
    <div>

      <Carousel />
      <Category/>
      <div className='hotsection'>
        <HotDeals/>
        <SaleBanner/>
      </div>
        <Accessories/>
        <Cards/>
      
      {/* <Explore/> */}


    </div>
  );
};

export default Home;
