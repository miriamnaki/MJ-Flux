import React, {createContext, useContext, useState, useEfect} from 'react';

// create context
const Context = createContext();

export const StateContext = ({children}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [totalPrice , setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState();

  return (
    <Context.Provider value={{
      showCart, cartItems, totalPrice, totalQuantities, qty
    }}>
      {children}
    </Context.Provider>
  )
}