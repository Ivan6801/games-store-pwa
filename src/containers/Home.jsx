import React from 'react'
import { Helmet } from "react-helmet";
import initialState from '../initialState';
import ProductsCard from '../components/ProductsCard';

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Games - store</title>
        <meta name="description" content="Games - store" />
      </Helmet>
      <ProductsCard products={initialState.products} />
    </>
  );
}

export default Home