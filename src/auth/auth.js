import React, {useContext, useReducer} from 'react';
import {LoginContext} from './context.js';
import {When} from 'react-if'


function Auth(props) {

  const userContext = useContext(LoginContext);

  // console.log('in auth component...', userContext.isLoggedIn);

  const canDoThing = props.capability ? userContext.can(props.capability) : true;

  const okayToRender = userContext.isLoggedIn && canDoThing;
  //_^ 

  console.log( props.capability, userContext.isLoggedIn, canDoThing, 'ok?', okayToRender);

  return(
   <When condition={okayToRender}>
   {props.children}
   </When> 
  )
}

export default Auth;

//how do you make auth print out the shit in todo = props.children of auth is what is going ot make it render 