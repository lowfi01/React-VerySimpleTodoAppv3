import React, { Component } from 'react'
import ReactDom from 'react-dom';

// COMPONENTS
import Todo from './components/todo';




class App extends Component{
    render(){
        return(
            <div>
                <Todo />
            </div>
        )
    }   
}


ReactDom.render(<App />, document.getElementById('root'))