import React from 'react'
import newCollections from "../assets/new_collections"
import Items from './Items'
const Collections = () => {
  return (
    <div className='w-[98% bg-gradient-to-r from-white-100 to-zinc-100'>
        <h1 className='text-black mt-[90px] text-5xl font-semibold text-center'>New Collections</h1>
        <hr className='w-[180px] mt-7 mb-[100px] h-[6px] rounded-md bg-[#252525] ml-[555px]' />
        <div className='flex flex-wrap p-10 justify-center items-center gap-[40px]'>
            {newCollections.map((item,index) => {
                return <Items key={index} id={item.id} title={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price}></Items>
            })}
        </div>
    </div>
  )
}

export default Collections