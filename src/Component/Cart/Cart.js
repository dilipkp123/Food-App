import React from "react";
import { Model } from "../UI/Model";
import classes from "./Cart.module.css";
import { useContext } from "react";
import cartContext from "../../store/cart-context";
import CartItem from "./CartItem";

export const Cart = (props) => {
  const ctxConst = useContext(cartContext);
  console.log(ctxConst ,"ctxCOnst");
  const totalAmount = ctxConst.totalAmount.toFixed(2);
  const hasItem = ctxConst.items.length > 0;
  const orderHandler = () => {
    console.log("Food is Ordering.....");
    props.onHideCart();
  };
  const removeItemHandler = (id) => {
    return(
      ctxConst.removeItem(id)
    )
  }
  const addItemHandler = (item) => {
    return(
     ctxConst.addItem(item)
    )
  }
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {ctxConst.items.map((item) => {
        console.log(item.id+'items');
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={removeItemHandler.bind(null,item.id)}
            onAdd = {addItemHandler.bind(null,item)}
          ></CartItem>
        );
      })}
    </ul>
  );
  return (
    <Model onClick={props.onHideCart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItem && (
          <button className={classes.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    </Model>
  );
};
