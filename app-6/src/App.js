import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/todo'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      tasks: [],
      userInput: '' 
    }

    this.addItem = this.addItem.bind(this)
  }

  handleChange = value => {
    return this.setState({userInput: value})
  }

  addItem = () => {
    this.setState({
      tasks: [...this.state.tasks, this.state.userInput],
      userInput: ''
    })
  }

  render() {
    let tasks = this.state.tasks.map( (elem, index) => {
      return < Todo key={index} task={elem} />
    })

    return (
      <div className="App">
        <h4> To Do List</h4>
        <input
        value={this.state.input}
        onChange={e => this.handleChange(e.target.value)}
        placeholder='What is next?'
        />
        <button
        onClick={this.addItem}
        > Add To List </button>

        <br/>

        {tasks}

      </div>
    );
  }
}

export default App;
