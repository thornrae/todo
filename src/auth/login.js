import React, {useState, useContext} from 'react';

import {If, Then, Else} from 'react-if';
import {LoginContext} from './context.js'
function Login(){
  const [user, setUser] = useState({});
  const userContext = useContext(LoginContext);

  const handleChange = (e) => {
    setUser( {...userContext, [e.target.name]: e.target.value} )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    userContext.login(user);
  }

  return ( 
    <If condition={userContext.isLoggedIn}>
      <Then>
        <button onClick={userContext.logut}></button>
      </Then>
      <Else>
        <form onSubmit={handleSubmit}>
          <input placeholder="username" name="username" onChange={handleChange} />
          <input name="password" type="password" onChange={handleChange}/>
          <button>Log In</button>
        </form>
      </Else>
    </If>
  )
}

export default Login;