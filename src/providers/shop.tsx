import { createContext, useContext, useState } from "react";
import { Product } from "../types/product";

const ShopContext = createContext<{product: null|Product, setProduct?: any}>({ product: null});

export function ShopProvider({children}: any) {

    const [ product, setProduct ] = useState<Product|null>(null);

    return (<ShopContext.Provider value={{product, setProduct}}>
        {children}
    </ShopContext.Provider>)
}

export const useShopContext = () => useContext(ShopContext);