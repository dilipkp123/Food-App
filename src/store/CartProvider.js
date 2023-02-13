import React, { useReducer } from "react";
import cartContext from "./cart-context";

const defaultCartState = {
  item: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // console.log("Action",action,"---------",state);
  if (action.type === "ADD") {
    // const updatedItem = state.item.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.item.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.item[existingCartItemIndex];
    console.log(existingCartItem, "llll");
    let updatedItems;
    if (existingCartItem) {
      const updatedItem_ = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.item];
      updatedItems[existingCartItemIndex] = updatedItem_;
    } else {
      // updatedItem ={...action.item}
      updatedItems = state.item.concat(action.item);
    }

    return {
      item: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.item.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.item[existingCartItemIndex]
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount=== 1) {
        updatedItems = state.item.filter(
            (item) => item.id !== action.id
        )
    } else {
       const updatedItem = {...existingItem,amount:existingItem.amount-1}
       updatedItems =[...state.item] 
       updatedItems[existingCartItemIndex] = updatedItem
    }
    console.log(existingCartItemIndex, " ex");
    return {
        item: updatedItems,
        totalAmount: updatedTotalAmount,
      };
  }
  return defaultCartState;
};

export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cart_Context = {
    items: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <cartContext.Provider value={cart_Context}>
      {props.children}
    </cartContext.Provider>
  );
};
