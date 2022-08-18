import { Fragment, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [openCart, setOpenCart] = useState(false);

  const openCartHandler = () => {
    setOpenCart(true);
  };

  const closeButtonHandler = () => {
    setOpenCart(false);
  };

  return (
    <CartProvider>
      <Header onOpen={openCartHandler} />
      <MealsSummary />
      <AvailableMeals />
      {openCart && <Cart onClose={closeButtonHandler} />}
    </CartProvider>
  );
}

export default App;
