import "./App.css";
import { Header } from "./Component/Layout/Header";
import React, { useState } from "react";
import { Meals } from "./Component/Meals/Meals";
// import { Card } from './Component/UI/Card';
import { Cart } from "./Component/Cart/Cart";
import { CartProvider } from "./store/CartProvider";

function App() {
  const [cartShow,setCardShow] = useState(false)
 const showCartHandler = () => {
    setCardShow(true)
  }
  const hideCartHandler = () => {
    setCardShow(false)
  }
  return (
    <CartProvider>
     {cartShow && <Cart onHideCart = {hideCartHandler} ></Cart>}
      <Header onShowCard = {showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
      </CartProvider>
  );
}

export default App;
