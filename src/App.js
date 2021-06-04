import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ToDo from './components/todo/todo.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <ToDo />
      </>
    );
  }
}