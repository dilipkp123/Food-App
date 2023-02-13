import React from 'react'
import { Card } from '../UI/Card';
import classes from './Available.module.css'
import { MealsItem } from './MealsItem/MealsItem';
import img1 from '../Assests/egg.jpg'
import img2 from '../Assests/aloopratha.jpg'
import img3 from '../Assests/dahipuri.jpg'
import img4 from '../Assests/greenSalad.jpg'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Dahi Puri Chat',
      description: 'Finest fish and veggies',
      price: 22.99,
      imgage:img3
    },
    {
      id: 'm2',
      name: 'Allo Pratha',
      description: 'A german specialty!',
      price: 16.5,
      imgage:img2
    },
    {
      id: 'm3',
      name: 'Egg With Bread',
      description: 'American, raw, meaty',
      price: 12.99,
      imgage:img1
    },
    {
      id: 'm4',
      name: 'Green Salad',
      description: 'Healthy...and green...',
      price: 18.99,
      imgage:img4
    },
  ];

export const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((mealName) =>{
      // console.log("-------",mealName.imgage);
        return(
<MealsItem title = {mealName.name} description = {mealName.description} id = {mealName.id} price = {mealName.price} image={mealName.imgage}></MealsItem>
     ) })
    // console.log(mealsList);
  return (
   <section className={classes.meals}>
    <ul>
      <Card>
    {mealsList}
    </Card>
    </ul>
   </section>
  )
}

