import React from "react";
import footerLogo from "../assets/logo.png";
import instaIcon from "../assets/instagram_icon.png";
import pinterestIcon from "../assets/pintester_icon.png";
import whatsappIcon from "../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[50px]">
        <hr className="w-[80%] border-none rounded-md h-[3px] bg-[#c7c7c7]" />
      <div className="logo flex items-center gap-[20px] cursor-pointer ">
        <img className="h-[110px]" src={footerLogo} alt="logo" />
      </div>
      <ul className="flex list-none gap-[50px] text-black text-xl ">
        <li className="cursor-pointer font-semibold font-sans">Company</li>
        <li className="cursor-pointer font-semibold font-sans">Products</li>
        <li className="cursor-pointer font-semibold font-sans">Offices</li>
        <li className="cursor-pointer font-semibold font-sans">About</li>
        <li className="cursor-pointer font-semibold font-sans">Contacts</li>
      </ul>
      <div className="footer-icons flex gap-[20px]  ">
        <div className="icons-container p-[10px] pb-[6px] bg-[#fbfbfb] border-1 cursor-pointer border-[#ebebeb]">
          <img src={instaIcon} alt="" />
        </div>
        <div className="icons-container p-[10px] pb-[6px] bg-[#fbfbfb] border-1 cursor-pointer border-[#ebebeb]">
          <img src={pinterestIcon} alt="" />
        </div>
        <div className="icons-container p-[10px] pb-[6px] bg-[#fbfbfb] border-1 cursor-pointer border-[#ebebeb]">
          <img src={whatsappIcon} alt="" />
        </div>
      </div>
      <div className="copyright flex flex-col items-center gap-[30px] w-[100%] mb-[30px] text-[#1a1a1a] text-xl  ">
        <hr className="w-[80%] border-none rounded-md h-[3px] bg-[#c7c7c7]" />
        <p>Copyright &#169; 2024-2029 All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
