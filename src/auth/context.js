import React, {useState, useEffect} from 'react';

import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

import superagent from 'superagent'

export const LoginContext = React.createContext();

function LoginProvider(props) {

//toggle that says if you are logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

//this will store the user record from the API
  const [user, setUser] = useState({});

  const validateToken = (token) => {
    try {
      const tokenUser = jwt.verify( token, process.env.REACT_APP_SECRET);
      setIsLoggedIn(true);
      setUser(tokenUser);
      cookie.save('auth', token);
    } catch(e) {
      setUser({});
      setIsLoggedIn(false);
      console.warn('token validation error', e);
    }
  }

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
    cookie.remove('auth');

  }

  const can = (permission) => {
    return user.capabilities && user.capabilities.includes(permission);
  }

  //login method that will take the user object from the form and try and go to the server with this
  const login = async (input) => {
    const API = `${process.env.REACT_APP_API}/signin`;
    
    try {
      //send username and password as it was sent by the user
      const response = await superagent.post(API)
        .auth( input.username, input.password);

        const {token} = response.body;

        validateToken(token);

    } catch (e) {
      console.warn('login fail')
    }
  }

  useEffect( () => {
    const token = cookie.load('auth') || null ;
    validateToken(token);
  }, [])

  const sharedThings = {
    logout,
    login,
    can,
    user,
    isLoggedIn
  }



  return (
      <LoginContext.Provider value={sharedThings}>
        {props.children}
      </LoginContext.Provider>
  )
}

export default LoginProvider;