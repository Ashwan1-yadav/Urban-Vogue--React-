import { useState, react, useContext } from "react";
import companyLogo from "../assets/logo.png";
import cartIcon from "../assets/cart_icon.png";
import {Link} from "react-router-dom"
import { ShopContext } from "../Context/ShopContext";
const Navbar = () => {
  const [link, setLink] = useState("trending");
  const {totalCartItems} = useContext(ShopContext)
  return (
    <>
      <div className="flex justify-around items-center shadow-lg sticky top-0 left-0 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg z-50">
        <div className="flex items-center gap-5 cursor-pointer">
          <img src={companyLogo} alt="Urban Vogue" className="h-[70px]" />
        </div>
        <ul  className="flex gap-10 font-semibold font-sans text-zinc-900 ">
          <li
            onClick={() => {
              setLink("home")}}
            className="flex flex-col items-center justify-center gap-1 cursor-pointer"
          >
            <Link  to="/">Home</Link>
            {link === "trending" ? (
              <hr className="border-none w-[100%] h-[3px] rounded-md bg-red-500" />
            ) : (
              <></>
            )}
          </li>
          <li
            className="flex flex-col items-center justify-center gap-1 cursor-pointer"
            onClick={() => {
              setLink("men");
            }}
          >
            <Link to="/mensFashion">Men's Fashion</Link>
            {link === "men" ? (
              <hr className="border-none w-[100%] h-[3px] rounded-md bg-red-500" />
            ) : (
              <></>
            )}
          </li>
          <li
            className="flex flex-col items-center justify-center gap-1 cursor-pointer"
            onClick={() => {
              setLink("women");
            }}
          >
            <Link to="/womenCorner">Women's Corner</Link>
            {link === "women" ? (
              <hr className="border-none w-[100%] h-[3px] rounded-md bg-red-500" />
            ) : (
              <></>
            )}
          </li>
          <li
            className="flex flex-col items-center justify-center gap-1 cursor-pointer"
            onClick={() => {
              setLink("kids");
            }}
          >
            <Link to="/kidsSection">Kids's Section</Link>
            {link === "kids" ? (
              <hr className="border-none w-[100%] h-[3px] rounded-md bg-red-500 " />
            ) : (
              <></>
            )}
          </li>
        </ul>
        <div className="flex items-center gap-5 font-semibold ">
          <button className="px-3 py-2 bg-red-400 rounded-xl cursor-pointer font-sans text-zinc-900  hover:shadow-md active:hover:bg-red-600">
            <Link to="/login">Sign Up</Link>
          </button>
          <button className="px-3 py-2 bg-red-400 rounded-xl cursor-pointer font-sans text-zinc-900 hover:shadow-md active:hover:bg-red-600">
            <Link to="/login">Login</Link>
          </button>
         <Link to="/cart">
         <img src={cartIcon} alt="" className="h-9" />
         </Link>
         <div className="w-[18px] h-[18px] flex justify-center items-center mt-[-30px] ml-[-30px] rounded-md text-sm  text-zinc-900 bg-red-600 ">
            {totalCartItems()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
