import React, { Component } from 'react';

import CompletedItem from './todo-completed-item'

class TodoCompletedDisplay extends Component{
    render(){
        const todos = this.props.todo.map((todo, index) => {
            return(
                <div key={index}>
                    <CompletedItem onDelete={this.props.onDelete} onUndo={this.props.onUndo} todo={todo} index={index}/>
                </div>
            )
        })

        return(
            <div>
                {todos}
            </div>
        )
    }
}

export default TodoCompletedDisplay;