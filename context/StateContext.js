import React, {createContext, useContext, useState, useEfect} from 'react';
import toast from 'react-hot-toast';

// create context
const Context = createContext();

export const StateContext = ({children}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice , setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

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
    console.log(product)
    console.log(quantity)
    // check for items in the cart if already exist
    const checkProductInCart = cartItems.find((item) => item._id === product._id)

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if(checkProductInCart) {
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

  // remove from cart
  const removeFromCart = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id)
    let newcartItems2 = cartItems.filter((item, i) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);

    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newcartItems2)

    
  }


  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id)
    index = cartItems.findIndex((product) => product._id === id);
    let newcartItems2 = cartItems.filter((item, i) => item._id !== id);

    if(value === 'inc') {
      let newcartItems = [...newcartItems2, { ...foundProduct, quantity: foundProduct.quantity + 1}]   
      setCartItems(newcartItems)
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    
    } else if(value === 'dec'){
      if(foundProduct.quantity > 1) {

        let newcartItems = [...newcartItems2, { ...foundProduct, quantity: foundProduct.quantity - 1}]   
        setCartItems(newcartItems)
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }

    }

  }

  return (
    <Context.Provider value={{
      showCart, cartItems, totalPrice, totalQuantities, qty, addToCart, increaseQty, decreaseQty, setShowCart, toggleCartItemQuantity, removeFromCart, setCartItems, setTotalQuantities, setTotalPrice
    }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);