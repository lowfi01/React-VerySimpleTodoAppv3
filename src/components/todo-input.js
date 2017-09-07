
import React, { Component } from 'react'

class TodoInput extends Component{
    constructor(){
        super()

        this.state = {
            term: ' '
        }
    } 

    render(){
        return(
            <form>
            <input onChange={(event) => {
                console.log(event.target.value)
                this.setState({ term: event.target.value});
            }} />
            <button className="btn" type="submit" 
                onClick={(event) => {
                    event.preventDefault();
                    this.props.onSubmit(this.state.term)
                    }}
                
                > Submit </button>
            </form>
        )
    }

    
}

export default TodoInput;