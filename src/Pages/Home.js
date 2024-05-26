import React from 'react'
import Categories from "../components/Categories"
import Discountform from "../components/Discountform"
import Sale from "../components/Sale"
import '../styles/Home.css';
import '../styles/Discountform.css';

export default function Home() {
  return (
    <div className='wrapper'>
      <div className='head'>
        <div className='headtext'>Amazing Discounts<br/>on Garden Products!</div>
        <a className='button' href="./All_sales">Check out</a>
      </div>
      <Categories />
      <Discountform />
      <Sale />
    </div>
  )
}

