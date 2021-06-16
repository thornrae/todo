import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import SiteContext from './context/context.js';
import LoginContext from './auth/context.js';
import Login from './auth/login.js';

import ToDo from './components/todo/todo.js';

export default class App extends React.Component {
  render() {
    return (
      <>
      <SiteContext>
      <LoginContext>
        
        
          <Login />
          <ToDo />
         
        
      </LoginContext>
      </SiteContext>
      </>
    );
  }
}