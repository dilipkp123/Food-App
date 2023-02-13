import React,{ Fragment } from 'react'
import classes from './Model.module.css'
import ReactDOM from "react-dom" 
const Backdrop = (props) =>{
  // console.log("BackDrop",props);
  return  <div className={classes.backdrop} onClick ={props.onClose}></div>
}
const ModalOverLay  =(props) => {
   return( <div className={classes.modal}>  
    <div className={classes.content}>
{props.children}    
    </div>
   </div>
   )
}

const portalElement = document.getElementById('modal')
export const Model = (props) => {
  // console.log("model received props " , props);
  return(
    <Fragment>{ReactDOM.createPortal(<Backdrop onClose ={props.onClick}></Backdrop>,portalElement)}
{ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,portalElement)}
</Fragment>)

}
