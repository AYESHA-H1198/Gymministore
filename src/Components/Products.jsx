import React from 'react'
import Product from './Product'
import GymEquip from '../assets/GymEquip1.png';
import GymEquip1 from '../assets/gymEuip.png';
import GymEquip2 from '../assets/gymEquip2.png';
import Dots from './Dots';


const Products = () => {
  return (
    <div className='bg-[#373737] flex items-center justify-center flex-col gap-10 py-10'>
        <h1 className='font-Averia text-5xl font-semibold text-white'>Latest Products</h1>
    <div className='flex flex-col md:flex-row gap-8 flex-wrap' >
        <Product img = {GymEquip}/>
        <Product img = {GymEquip1}/>
        <Product img = {GymEquip2}/>
    </div>
    <Dots />
    </div>
  )
}

export default Products;