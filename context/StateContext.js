import React, {createContext, useContext, useState, useEfect} from 'react';

// create context
const Context = createContext();

export const StateContext = ({children}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [totalPrice , setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1);

  // function to increase quantity
  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  // function to decrease quantity
  const decreaseQty = () => {
    setQty((prevQty) => {
      if(prevQty -1 < 1) return 1;
       return prevQty -1
    })
  }

  return (
    <Context.Provider value={{
      showCart, cartItems, totalPrice, totalQuantities, qty, increaseQty, decreaseQty
    }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);