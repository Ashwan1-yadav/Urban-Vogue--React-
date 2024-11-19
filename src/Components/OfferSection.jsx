import React from "react";
import ExImage from "../assets/exclusive_image.png";
const OfferSection = () => {
  return (
    <div className="offers w-[98%] height-[10vh] flex m-auto px-[110px] py-[60px] bg-gradient-to-r from-slate-100 to-zinc-300
    bg-opacity-20 backdrop-filter backdrop-blur-lg">
      <div className="left flex flex-col justify-center w-[50%]">
        <h1 className="text-6xl font-extrabold font-sans mt-[-200px] mb-[10px] ">
          Tremendous
        </h1>
        <h1 className="text-6xl font-extrabold font-sans ">
          Offers for You only
        </h1>
        <p className="text-xl text-green-400 font-semibold font-sans mt-[30px]">
          Best Sellers
        </p>
        <button className="px-3 w-[130px] py-2 bg-red-400 rounded-md shadow-md text-black font-semibold mt-[30px] font-sans">
          Check Now
        </button>
      </div>
      <div className="right ml-[60px]">
        <img className="h-[75vh]" src={ExImage} alt="" />
      </div>
    </div>
  );
};

export default OfferSection;
