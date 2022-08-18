import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (name) => {},
  removeItem: (id) => {},
});



export default CartContext;