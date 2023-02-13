import React, { useRef, useState } from 'react'
import { Input } from '../../UI/Input'
import classes from './MealItemForm.module.css'

export const MealItemForm = (props) => {
  const [amountIsValid,setAmountIsValid] = useState(true)

  const amountInputRef = useRef();
  console.log("Curree",props);
  // console.log(amountInputRef);
  const submitHandler =(event) =>{
    event.preventDefault()
    // console.log(value,"888");
   const enteredAmount = amountInputRef.current.value;
  //  console.log(amountInputRef.current,"-------------------");
   const enteredAmountNumber = +enteredAmount
   if (enteredAmount.trim().length === 0 || 
   enteredAmount < 0 ||
    enteredAmount> 5 ) {
     setAmountIsValid(false)
     return
   }
   props.onAddToCart(enteredAmountNumber)
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input ref = {amountInputRef}label='Amount' input={{
        id:'amount_' + props.id,
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
      }}/>
        <button>
            + ADD
        </button>
       {!amountIsValid && <p>Please enter Vallid Input</p>}
    </form>
  )
}
