import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input'
import Todo from './components/todo'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      tasks: []
    }
  }

  addTask = (task) => {
    this.setState({tasks: [...this.state.tasks, task]})
  }

  render() {
    let list = this.state.tasks.map( (elem, index) =>{
      return < Todo key={index} task={elem} />
    })

    return (
      <div className="App">
        <h1> To Do List </h1>
        <Input add={this.addTask} />

        <br/>

        {list}
      </div>
    );
  }
}

export default App;
