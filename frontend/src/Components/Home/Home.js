import React from 'react'
import Banner from './Banner/Banner';
import Bestseller from './Bestseller/Bestseller'
import FeatureProducts from './FeatureProducts/FeatureProducts';
import Header from './Header/Header'
import LatestNews from './news/LatestNews';
import Whyus from './Whyus/Whyus';



function Home() {
    return (
      <div>
        <Header />
        <Bestseller />
        <Banner />
        <Whyus />
        <LatestNews />
        <FeatureProducts />
      </div>
    );
}

export default Home
 