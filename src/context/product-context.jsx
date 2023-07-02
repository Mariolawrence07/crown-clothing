import { createContext, useEffect, useState } from "react";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

import SHOP_DATA  from "../shop-data.json";


export const ProductsContext = createContext({
  PRODUCTS: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  // useEffect(()=>{
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // },[])
  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  );
};
