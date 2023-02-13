import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";
import cartContext from "../../store/cart-context";

export const HeaderCardButton = (props) => {
  const cartCtx = useContext(cartContext)
  // console.log("use Context ", cartCtx);
  const numberOfCartItem = cartCtx.items.reduce((crurNo,item) => {
    return crurNo + item.amount;
  },0)
    return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};
