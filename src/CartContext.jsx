// CartContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        setCartItems(Array.isArray(parsed) ? parsed : []);
      } catch (e) {
        setCartItems([]);
      }
    }
    const savedLater = localStorage.getItem('savedItems');
    if (savedLater) {
      try {
        const parsed = JSON.parse(savedLater);
        setSavedItems(Array.isArray(parsed) ? parsed : []);
      } catch (e) {
        setSavedItems([]);
      }
    }
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
  }, [savedItems]);

  const addToCart = (product, quantity = 1, selectedSize = 'Standard', selectedColor = null) => {
    setCartItems(prev => {
      // Check if product already exists with same size and color
      const existingIndex = prev.findIndex(item => 
        item.id === product.id && 
        item.selectedSize === selectedSize &&
        item.selectedColor === selectedColor
      );
      
      if (existingIndex !== -1) {
        // Update existing item
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      } else {
        // Add new item with full product details
        return [...prev, {
          id: product.id,
          name: product.name,
          price: product.price,
          oldPrice: product.oldPrice,
          image: product.images?.[0] || product.image,
          category: product.category,
          quantity: quantity,
          selectedSize: selectedSize,
          selectedColor: selectedColor || product.color,
          discount: product.tag === "Sale" ? 20 : 0,
          brand: product.sub
        }];
      }
    });
  };

  // FIXED: updateQuantity - better parameter handling
  const updateQuantity = (id, newQuantity, size, color) => {
    if (newQuantity <= 0) {
      removeItem(id, size, color);
      return;
    }
    
    setCartItems(prev =>
      prev.map(item => {
        // Match by id AND size AND color
        if (item.id === id && item.selectedSize === size && item.selectedColor === color) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // FIXED: removeItem - works with the item directly
  const removeItem = (id, size, color) => {
    setCartItems(prev =>
      prev.filter(item => {
        // If size and color are provided, match precisely
        if (size !== undefined && color !== undefined) {
          return !(item.id === id && item.selectedSize === size && item.selectedColor === color);
        }
        // Otherwise just match by id (for backward compatibility)
        return item.id !== id;
      })
    );
  };

  const saveForLater = (item) => {
    removeItem(item.id, item.selectedSize, item.selectedColor);
    setSavedItems(prev => [...prev, { ...item, savedAt: new Date() }]);
  };

  const moveToCart = (item) => {
    setSavedItems(prev => prev.filter(i => i.id !== item.id && i.selectedSize === item.selectedSize));
    addToCart(item, item.quantity, item.selectedSize, item.selectedColor);
  };

  const removeSavedItem = (id) => {
    setSavedItems(prev => prev.filter(item => item.id !== id));
  };

  const getItemCount = () => {
    return cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
  };

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + ((item.price || 0) * (item.quantity || 0)), 0);
  };

  const getTotalSavings = () => {
    return cartItems.reduce((total, item) => {
      if (item.oldPrice && item.price) {
        return total + ((item.oldPrice - item.price) * (item.quantity || 0));
      }
      return total;
    }, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      savedItems,
      loading,
      addToCart,
      updateQuantity,
      removeItem,
      saveForLater,
      moveToCart,
      removeSavedItem,
      getItemCount,
      getSubtotal,
      getTotalSavings,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};