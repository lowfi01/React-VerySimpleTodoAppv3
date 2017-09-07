import React, { Component } from 'react';

import TodoItem from './todo-item';

class TodoDisplay extends Component{
    
    render(){
        const todos = this.props.todos.map((todo, index) => {
                return(
                    <div key={index}>
                        <TodoItem onComplete={this.props.onComplete} onDelete={this.props.onDelete} todo={todo} index={index}/>
                    </div>
                )
            } 
        ) // map todos

        return(
            <div>{todos}</div>
        ) // final return
    }// render()
}

export default TodoDisplay;