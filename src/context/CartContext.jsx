import { createContext, useContext, useState, useEffect } from "react";

// Create the Cart context
const CartContext = createContext();

// Custom hook to use the Cart context
export const useCart = () => useContext(CartContext);

// CartProvider to wrap the component tree
export const CartProvider = ({ children }) => {
  // Initialize state with data from local storage or default to an empty array
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Save cart data to local storage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        alert("Item already in cart");
        return prevItems;
      } else {
        alert("Item added Successfully");
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.id !== id)
    );
  };

  // Increase item quantity
  const increaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease item quantity
  const decreaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
