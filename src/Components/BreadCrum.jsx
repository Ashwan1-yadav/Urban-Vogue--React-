import React from 'react'
import arrowIcon from "../assets/breadcrum_arrow.png"

const BreadCrum = (props) => {
  return (
    <div className='flex mt-[15px] ml-[43px] text-sm font-semibold'>
        HOME <img className='flex mx-1 h-[14px] mt-[3px]' src={arrowIcon} alt="" />
        SHOP 
        <img className='flex h-[14px] mx-1 mt-[3px]' src={arrowIcon} alt="" /> {props.product.name}
        <br /><br />
    </div>
  )
}

export default BreadCrum