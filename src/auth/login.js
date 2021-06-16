import React, {useState, useContext} from 'react';
import {LoginContext} from './context.js';
import {If, Then, Else} from 'react-if';


function Login() {

  const [user, setUser] = useState({});
  //this hook call gets login connected to context
  const userContext = useContext(LoginContext);
  
  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    userContext.login(user);
  }

  return (

    <If condition={userContext.isLoggedIn} >
    <Then>
    <button onClick={userContext.logout}>Logout</button>
    </Then>
    <Else >
    <form onSubmit={handleSubmit}>
      <input placeholder="username" name="username" onChange={handleChange}/>
      <input name="password" type="password" onChange={handleChange}/>
      <button>Login</button>
    </form>

    </Else>
    </If>
  )
}

export default Login;