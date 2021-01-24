import React, {Component} from 'react'

class Input extends Component {
    constructor () {
        super ()

        this.state = {
            input: ''
        }
    }

    handleChange = (val) => {
        return this.setState({
            input: val
        })
    }

    handleAdd = () => {
        this.props.add(this.state.input)
        this.setState({ input: '' })

    }

    render() {
        return (
            <div>
                <input
                placeholder='What is next?'
                onChange={e => this.handleChange(e.target.value)}
                value={this.state.input}
                />
                <button onClick={this.handleAdd}> Add Task </button>
            </div>
        )
    }
}

export default Input