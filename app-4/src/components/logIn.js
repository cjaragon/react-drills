import React, {Component} from 'react'

class LogIn extends Component {
    
    constructor (){
        super ()

        this.state = {
            userName: '',
            password: ''
        }

        this.handleLogin = this.handleLogin.bind(this)
    }

    handleName = (name) => {
        this.setState({userName: name })
    }

    handlePass = (pass) => {
        this.setState({password: pass })
    }

    handleLogin() {
        alert(`Username: ${this.state.userName} Password: ${this.state.password}`);
      }
    
    render() {
        return (
            <div>
                <input 
                onChange={e => this.handleName(e.target.value)}
                type='text'
                />
                <input 
                onChange={e => this.handlePass(e.target.value)}
                type='text'
                />
                <button onClick={this.handleLogin}> Log In </button>
            </div>
        )
    }
}

export default LogIn