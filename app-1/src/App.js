import React from 'react'
import './App.css';



class App extends React.Component {

  constructor() {
    super()
    
    this.state = {
      userInput: ''
    }
  }

  handleChange = (val) =>{
    this.setState({userInput: val})
  }


  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)} />
        <h1> {this.state.userInput} </h1>
      </div>
    );
  }
}

export default App;
