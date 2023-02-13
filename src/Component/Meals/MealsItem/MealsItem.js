import React, { useContext } from "react";
import { MealItemForm } from "./MealItemForm";
import classes from './MealsItem.module.css'
import CartContext from '../../../store/cart-context'
export const MealsItem = (props) => {
    console.log("received props",props.title);

   const cartCtx  =  useContext(CartContext)
   const addToCartHandler = amount =>{
    cartCtx.addItem({
      id:props.id,
      name:props.title,
      amount:amount,
      price:props.price
    })
   }

  const price = props.price.toFixed(2);
  return (
    <li  className={classes.meal} id={props.id}>
      <div>
        <img src={props.image} alt='egg'/>
        <h3>{props.title}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart ={addToCartHandler} id={props.id}></MealItemForm>
      </div>
    </li>
  );
};
