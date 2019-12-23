import React, { Component } from 'react';
import './css/bootstrap/bootstrap.min.css';
import './App.css';

import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="title">Todo List</h1>
        <TodoList/>
      </div>
    );
  }
}

export default App;
