import React from 'react'
import products from "../assets/data"
import Items from './Items'
const PopularItem = () => {
  return (
    <div>
        <h1 className='text-black mt-[90px] text-5xl font-semibold text-center'>Trending fashion for Men</h1>
        <hr className='w-[380px] mt-7 mb-[100px] h-[6px] rounded-md bg-[#252525] ml-[460px]'/>
        <div className='items flex  items-center gap-[30px] bor h-[70vh] mt-[-100px] p-[130px]'>
            {products.map((item,index)=>{
                return <Items key={index} id={item.id} title={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price}></Items>
            })}
        </div>
    </div>
  )
}

export default PopularItem