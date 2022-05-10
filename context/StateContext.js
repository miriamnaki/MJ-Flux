import React, {createContext, useContext, useState, useEfect} from 'react';
import toast from 'react-hot-toast';

// create context
const Context = createContext();

export const StateContext = ({children}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice , setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState(0);
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

  // add items to cart
  const addToCart = (product, quantity) => {
    // check for items in the cart if already exist
    const checkProductInCart = cartItems.find((item) => item._id === product._id)

    if(checkProductInCart) {
      setTotalPrice((prevTotalPrice => prevTotalPrice + product.price * quantity));
      setTotalQuantities(prevTotalQty => prevTotalQty + quantity)

      // Update cart
      const updateCartItems = cartItems.map((cartProduct) => {
        if(cartProduct._id === product._id) return {
          ...cartProduct, quantity: cartProduct.quantity + quantity
        }
      })

      setCartItems(updateCartItems);
      toast.success(`${qty} ${product.name} added to your cart.` )

      // if item does not exist
    } else {
      product.quantity = quantity

      setCartItems([...cartItems, {...product}])
    }
    toast.success(`${qty} ${product.name} added to your cart.` )

  }

  return (
    <Context.Provider value={{
      showCart, cartItems, totalPrice, totalQuantities, qty, addToCart, increaseQty, decreaseQty, setShowCart
    }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);