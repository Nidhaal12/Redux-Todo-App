import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './Component/todoApp';
import { connect } from 'react-redux'

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
