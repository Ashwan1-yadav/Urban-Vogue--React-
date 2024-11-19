import React,{ createContext,useState } from "react";
import Products from "../assets/all_product";

export const ShopContext = createContext(null);
const defaultCart = () => {
  let cart = []
  for (let index = 0; index < Products.length+1; index++) {
    cart[index]  = 0;
  }
  return cart;
}

const ContextProvider = (props) => {
  const [cartItem, setcartItem] = useState(defaultCart())

  const addTocart = (itemId) => {
    setcartItem((prev) => 
    ({...prev,[itemId]:prev[itemId]+1}))
    alert("Added To Cart")
   }

  const removeFromcart = (itemId) => {
    setcartItem((prev) => {
     ({...prev,[itemId]:prev[itemId]-1})
    })
  }
  
  const totalCartItems = () => {
    let totalItems = 0
    for(const item in cartItem) {
      if (cartItem[item] > 0) {
         totalItems = totalItems + cartItem[item]
      }
    }
    return totalItems
  } 

  const contextVal = {Products,cartItem,addTocart,removeFromcart,totalCartItems};

  return (
    <ShopContext.Provider value={contextVal}>
        {props.children}
    </ShopContext.Provider>
  )
};
 

export default ContextProvider