import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import SiteContext from './context/context.js';


import ToDo from './components/todo/todo.js';

export default class App extends React.Component {
  render() {
    return (
      <>
      <SiteContext>
        <ToDo />
      </SiteContext>
      </>
    );
  }
}