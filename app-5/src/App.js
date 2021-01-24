import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './image'

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Image 
        url={'https://images.unsplash.com/photo-1563198797-24d96c7f865c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1339&q=80'}
        />
        
      </div>
    );
  }
}

export default App;
