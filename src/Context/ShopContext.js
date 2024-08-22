import React, { createContext, useState } from "react";
import Allproduct from "../Data/Allproduct";


export const ShopContext = createContext(null) ;


const getDefaultCart = () => {
    let cart = {} ;
    for (let index = 1; index <= Allproduct.length; index++) {
        cart[index] = 0 ;
    }
    return cart ;
 }

const ShopContextProvider = (props) => {
    const [cartItems , setCartItems] = useState(getDefaultCart()) ;
    

//   ADD TO CART 
   const addToCart = (itemID ) => {
    setCartItems (
        (prev) => ({
            ...prev ,[itemID] : (prev[itemID] + 1)
        })
    )
     
   }
  

//    REMOVE FROM CART 
const removeFromCart = (itemID) => {
    setCartItems (
        (prev) => ({
            ...prev , [itemID] : prev[itemID] - 1
        })
    )

   }

//    TOTAL CART VALUE 
const getTotalCartValue = () => {
    let totalValue = 0 ;
    for ( const item in cartItems)
    {
        if(cartItems[item] > 0) 
        {
            let itemInfo = Allproduct.find ((product) =>  product.id === Number(item) ) 
            totalValue +=  Number(itemInfo.price) * cartItems[item] ;
        }
        
    }
    return totalValue ;
}
 //    TOTAL CART ITEMS FOR CART ICON

const getTotalCartItems = () => {
    let totalItems = 0 ;
    for ( const item in cartItems)
    {
        if(cartItems[item] > 0) 
        {
            totalItems += cartItems[item] ;
        }
        
    }
    return totalItems ;
}


   const contextValue = {Allproduct , cartItems , addToCart , removeFromCart , getTotalCartValue , getTotalCartItems } ;
   //all things to share through context to all components

 return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
 )
}

export default ShopContextProvider ;