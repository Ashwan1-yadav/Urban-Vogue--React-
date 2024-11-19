import React from 'react'
import { Link } from 'react-router-dom'

const Items = ({image,title,newPrice,oldPrice,id}) => {
  return (
    <div className='w-[350px] hover:scale-105 duration-500'>
        <Link to={`/product/${id}`}><img onClick={window.screenTop} className='shadow-md rounded-xl cursor-pointer' src={image} alt="" /></Link>
        <p className='mx-6px mt-4 my-0 cursor-pointer'>{title}</p>
        <div className='price flex gap-[20px] cursor-pointer'>
            <div className='new-price text-[#374151] text-xl font-semibold'>
            &#8377; {newPrice}
            </div>
            <div className='old-price text-[#8c8c8c] text-xl font-semibold line-through'>
            &#8377; {oldPrice}
            </div> 
        </div>
    </div>
  )
}

export default Items