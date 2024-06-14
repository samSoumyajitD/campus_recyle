import React from 'react';
import BuyerNavbar from '../components/BuyerNavbar.jsx/BuyerNavbar';
import ProductList from '../components/ProductListing/ProductList';
import ProductSearchFilter from '../components/ProductListing/Search-Filter/ProductSearchFilter';

function ProductListing() {
  return (
    <>
        <BuyerNavbar/>
        <ProductSearchFilter/>
        <ProductList/>
    </>
  )
}

export default ProductListing