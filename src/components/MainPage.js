import React from 'react';
import Cart from './Cart';
import EditProduct from './EditProduct';
import MyBalance from './MyBalance';
import Navigation from './Navigation';
import VendingMachine from './VendingMachine';


export default function MainPage() {
  return (
    <div>
      <Navigation />
      <div className="main-p">
        <VendingMachine />
        <div className='main-bottom'>
          <MyBalance />
          <Cart />
        </div>
      </div>
    </div>
  );
}
