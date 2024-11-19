import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div className="w-[65%] mt-[120px] h-[40vh] flex flex-col justify-center items-center m-auto px-0 py-[140px] mb-[150px] bg-gradient-to-r from-slate-100 to-zinc-200 gap-[30px] shadow-xl rounded-lg bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg">
        <h3 className="text-[#454545] text-[40px] font-semibold">Get Exclusive offers on email</h3>
        <p className="text-[#454545] text-[20px] font-semibold" >Connect with us and stay updated</p>
        <div className="flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border-1 border-[#e3e3e3]">
          <input className="w-[500px] ml-[30px] outline-none border-none font-sans text-[16px]" type="text" placeholder="Your Email id" name="email" />
          <button className="w-[210px] h-[70px] rounded-[80px] bg-red-500 text-zinc-900 text-xl font-semibold cursor-pointer" type="submit">Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
