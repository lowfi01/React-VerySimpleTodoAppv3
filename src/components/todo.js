import React, { Component } from 'react';

//Components
import TodoInput from './todo-input';
import TodoDisplay from './todo-display';
import TodoCompletedDisplay from './todo-completed-display';
//eslint-disable-next-line
import {
    Row,
    Panel,
    Col,
    
} from 'react-bootstrap';

class Todo extends Component{
    constructor(){
        super()

        this.state = {
            todos: [],
            completedTodos: [],
        }
    }

    onDeleteCompleted(index){
        let completedTodos = this.state.completedTodos.slice()
        completedTodos.splice(index, 1)
        this.setState({completedTodos})

    }

    onDelete(index){
        let todos = this.state.todos.slice()
        todos.splice(index, 1)
        this.setState({todos})

    }

    onUndoDelete(todo){
        let todos = this.state.todos.slice()
        todos = [...todos, todo]
        this.setState({todos})
    }

  

    render(){
        return (
            <div className="container flex-right">

                <div>
                    <TodoInput 
                        onSubmit={(todo) => {
                        var todos = [...this.state.todos, todo];
                        this.setState({todos})
                        }} />
                </div>
                        
                <div >
                <Panel>    
                    <Col xs={12} sm={6} md={4}>
                    <TodoDisplay 
                        todos={this.state.todos}
                        onDelete={(index) => {
                            this.onDelete(index);
                        }}
                        onComplete={(todo, index) => {
                            this.onDelete(index)
                            var completedTodos = [...this.state.completedTodos, todo];
                            this.setState({completedTodos})
                        }}
                        />
                    </Col>
                </Panel>
            <Panel>
                <Row>
                <Col xs={12} sm={6}>
                    <TodoCompletedDisplay 
                        todo={this.state.completedTodos}
                        onUndo={(todo, index) => {
                            this.onUndoDelete(todo);
                            this.onDeleteCompleted(index);
                        }}
                        onDelete={(index) => {
                            this.onDeleteCompleted(index);
                        }}
                        />
                </Col>
                </Row>
            </Panel>
                </div>

            </div>
        );
    };
};


export default Todo;