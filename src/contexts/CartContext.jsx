import { createContext, useState, useEffect } from "react";

// crear el context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // agregar al carrito
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // comprobar si el artículo ya está en el carrito
    const cartItem = cart.find((item) => item.id === id);
    // si el artículo del carrito ya está en el carrito
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
