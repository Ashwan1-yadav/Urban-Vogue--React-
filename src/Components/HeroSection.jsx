import React from 'react'
import heroImage from "../assets/hero_image.png"

const HeroSection = () => {
  return (
  <>
    <div className='hero h-[100vh] flex bg-gradient-to-r from-slate-100 to-zinc-100'>
        <div className='left flex flex-col justify-center gap-[20px] pl-[100px] leading-7'>
            <h2 className='text-black text-7xl font-sans font-extrabold mt-[-150px]'> Where Style Meets the City
            </h2>
            <p className='text-black font-semibold'>Redefine your wardrobe with modern, chic, and effortlessly cool apparel. Step into the latest trends and embrace your unique vibe. Elevate your fashion game with Urban Vogue.</p>
            <hr className='px-3 py-1 bg-red-400 rounded-lg'></hr>
        </div>
        <div className='w-[170%]'>
            <img src={heroImage} className='h-[700px] w-[7000px] mt-[-20px]' alt="" />
        </div>
    </div>
  </>
  )
}

export default HeroSection