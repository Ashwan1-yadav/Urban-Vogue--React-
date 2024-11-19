import React, { useContext } from "react";
import { ShopContext } from "../src/Context/ShopContext";
import dropdown from "../src/assets/dropdown_icon.png";
import Items from "../src/Components/Items";
const category = (props) => {
  const { Products } = useContext(ShopContext);
  return (
    <>
      <div className="shopCategory w-full">
        <img className="shadow-lg" src={props.banner} alt="banner" />
        <br />
        <br />
        <div className="category-products flex justify-center items-center flex-wrap gap-10 p-[50px] mt-11">
          {Products.map((item, index) => {
            if (props.category === item.category) {
              return (
                <Items
                  key={index}
                  id={item.id}
                  title={item.name}
                  image={item.image}
                  newPrice={item.new_price}
                  oldPrice={item.old_price}
                ></Items>
              );
            } else {
              return;
            }
          })}
        </div>
        <br />
        <br />
        <div className="flex justify-center items-center mb-[50px]">
          <button className="px-3 py-2 bg-red-400 rounded-xl cursor-pointer font-sans text-zinc-900 hover:shadow-md active:hover:bg-red-600">
            Show More
          </button>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default category;
