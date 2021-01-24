import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super()

    this.state = {
      gameSystems: ['Oculus Quest 2', 'PlayStation 5', 'X Box Series X', 'X Box series S', 'Nintendo Switch'],
      filterString: ''
    }
  }

  handleChange(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    let gamesToDisplay = this.state.gameSystems.filter((element, index) => {return element.includes(this.state.filterString);}).map((element, index) => 
    {return <h2 key={index}>{element}</h2>;})
    return (
      <div className="App">
       <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {gamesToDisplay}
      </div>
    )
  }
}

export default App;
