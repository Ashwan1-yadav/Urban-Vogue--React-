import React,{useContext} from "react";
import starIcon from "../assets/star_icon.png";
import starDull from "../assets/star_dull_icon.png";
import { ShopContext } from "../Context/ShopContext"

const ProductShow = (props) => {
  const {addTocart} = useContext(ShopContext)

  return (
    <div className="flex mx-0 my-[10px] px-10 mb-[200px]">
      <div className="left flex gap-[17px] ">
        <div className="img-list flex flex-col gap-[16px]">
          <img className="h-[112px] w-[142px]" src={props.product.image} alt="" />
          <img className="h-[112px] w-[142px]" src={props.product.image} alt="" />
          <img className="h-[112px] w-[142px]" src={props.product.image} alt="" />
          <img className="h-[112px] w-[142px]" src={props.product.image} alt="" />
        </div>
        <div className="display-image">
          <img className="display-main-img w-[630px] h-[500px]" src={props.product.image} alt="" />
        </div>
      </div>
      <div className="right mx-[40px] flex flex-col">
        <h1 className="text-[#3d3d3d] text-4xl font-sans font-semibold">{props.product.name}</h1>
        <div className="display-right flex items-center mt-[3px] gap-[2px] ">
          <img className="h-[15px]" src={starIcon} alt="" />
          <img className="h-[15px]" src={starIcon} alt="" />
          <img className="h-[15px]" src={starIcon} alt="" />
          <img className="h-[15px]" src={starIcon} alt="" />
          <img className="h-[15px]" src={starDull} alt="" />
          <p>(4.0)</p>
        </div>
        <div className="right-prices flex my-0 gap-[10px] font-semibold text-3xl">
          <div className="dispaly-price-new text-green-600">
            &#8377; {props.product.new_price}
          </div>
          <div className="display-right-old line-through text-[#818181]">
            &#8377; {props.product.old_price}
          </div>
        </div>
        <div className="description mt-[20px] text-lg">
        {props.product.name} is a brand new cloth available for you only at discounted price grab it now....
        </div>
        <div className="right-size">
          <h1 className="mt-[10px] text-[#656565] text-lg font-semibold">Select Size</h1>
          <div className="sizes flex mt-3 mb-3 my-0 gap-[10px] font-mono cursor-pointer">
             <div className="h-[50px] w-[50px] bg-slate-300 rounded-full shadow-md border-1 border-zinc-600 flex items-center justify-center font-semibold text-lg">S</div>
             <div className="h-[50px] w-[50px] bg-slate-300 rounded-full shadow-md border-1 border-zinc-600 flex items-center justify-center font-semibold text-lg">M</div>
             <div className="h-[50px] w-[50px] bg-slate-300 rounded-full shadow-md border-1 border-zinc-600 flex items-center justify-center font-semibold text-lg">L</div>
             <div className="h-[50px] w-[50px] bg-slate-300 rounded-full shadow-md border-1 border-zinc-600 flex items-center justify-center font-semibold text-lg">XL</div>
             <div className="h-[50px] w-[50px] bg-slate-300 rounded-full shadow-md border-1 border-zinc-600 flex items-center justify-center font-semibold text-lg">XXL</div>
          </div>
        </div>
        <button onClick={()=>addTocart(props.product.id)} className="mt-[20px] mb-[10px] px-4 py-2 bg-red-500 rounded-lg shadow-md w-[130px] font-semibold ">Add to Cart</button>
        <p className="category mt-[20px]">
          <span className="font-semibold">Category :</span> {(props.product.category)}
        </p>
        <p className="category">
          <span className="font-semibold">Tags :</span> latest, modern 
        </p>
      </div>
    </div>
  );
};

export default ProductShow;
