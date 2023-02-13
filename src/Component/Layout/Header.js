import React, { Fragment } from 'react'
import classes from './Header.module.css'
import background_image from '../Assests/top-view-food-frame-with-copy-space.jpg'
import { HeaderCardButton } from './HeaderCardButton';

export const Header = (props) => {
  // console.log("rererer",props);
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Airline Meals</h1>
        <HeaderCardButton onClick ={props.onShowCard}></HeaderCardButton>
      </header>
      <div className={classes['main-image']}>
        <img src={background_image} alt='background_image' ></img>
      </div>
    </Fragment>
  )
}
