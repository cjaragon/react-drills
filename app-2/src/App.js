import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super()

    this.state = {
      arr: ['Oculus Quest 2', 'PlayStation 5', 'XBox Series X', 'XBox Series S', 'Nintendo Switch']
    }
  }

  render() {
    return (
      <div className="App">
        <h2>{ this.state.arr[0] }</h2>
        <h2>{ this.state.arr[1] }</h2>
        <h2>{ this.state.arr[2] }</h2>
        <h2>{ this.state.arr[3] }</h2>
        <h2>{ this.state.arr[4] }</h2>
      </div>
    );
  }
}

export default App;
