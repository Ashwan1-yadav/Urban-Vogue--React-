import React, { useContext } from "react";
import removeIcon from "../assets/cart_cross_icon.png";
import { ShopContext } from "../Context/ShopContext";
const CartItems = () => {
  const { Products, cartItem } = useContext(ShopContext);
  return (
    <div className="cart-items mx-[100px] my-[80px]">
      <h1 className=" flex justify-center items-center font-semibold text-2xl mb-[10px] ">Cart Item</h1>
     
      <hr className="h-[3px] bg-[#e2e2e2] border-0 " />
      {Products.map((item, index) => {
        if (cartItem[item.id] > 0) {
          return (
            <div key={index}>
              <div className="format m-[10px] flex items-center gap-[20px]">
                <img className="product-icon h-[140px] rounded-md shadow-" src={item.image} />
                <p className="text-xl mr-[20px]">{item.name}</p>
                <p className="font-semibold text-green-500">Price : {item.new_price} </p>
                <p className="quantity font-semibold">Quantity: {cartItem[item.id]}</p>
                <p className="font-semibold">Total Price : {item.new_price} X {cartItem[item.id]} = {item.new_price * cartItem[item.id]}</p>
                
              </div>
              <hr className="h-[3px] bg-[#e2e2e2] border-0 " />
            </div>
          );
        } else {
          return;
        }
      })}
    </div>
  );
};

export default CartItems;
