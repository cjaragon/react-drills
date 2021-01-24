import React, { Component } from 'react'


class Image extends Component{
    render() {
        return (
            <div class='poster'>
                <img src={this.props.url} 
                class='image'/>
                <div>
                    <p class='p-1'>409</p>
                    <p class='p-2'>conflict</p>
                </div>
            </div>
        )
    }
  
}

export default Image