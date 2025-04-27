import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialCart = {
  items: [],
  total: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "addToCart":
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price,
      };
    case "removeFromCart":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        total: state.total - action.payload.price,
      };

    case "increaseQuantity":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity++ }
            : item
        ),
        total: state.total + action.payload.price,
      };
    case "decreaseQuantity":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity-- }
            : item
        ),
        total: state.total - action.payload.price,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { useCart, CartProvider };
