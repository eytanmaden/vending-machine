import React from 'react'
import AddCoins from './AddCoins';
import AddProduct from './AddProduct'
import Navigation from './Navigation'
import ProductsList from './ProductsList'

export default function Products() {
  return (
    <div>
      <Navigation />
      <div className='products-page'>
        <ProductsList />
        <AddProduct />
      </div>
      <AddCoins/>
    </div>
  );
}
