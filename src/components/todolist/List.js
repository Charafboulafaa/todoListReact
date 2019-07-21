import React, { Component } from 'react'
import Single from './Single';

export default class List extends Component {

    state = {
        todos:[
            {
                id:1,
                task: 'Morning run',
                isChecked: false
            },
            {
                id:2,
                task: 'Learning ReactJS',
                isChecked: true
            },
            {
                id:3,
                task: 'Practice and improve skills',
                isChecked: false
            }
        ]
    }

    onCheckTodo(id) {
        console.log('Mcha',id);
        const newList = this.state.todos.map((todo)=>{
            if(todo.id === id){
                todo.isChecked=!todo.isChecked;
            }
            return todo;
        });
        this.setState({
            todos: newList
        });
    }

    render() {
        return (
            <div className="flex flex-col h-full w-full">
                {this.state.todos.map((todo)=>(
                    <Single key={todo.id} data={todo} onCheckTodo={this.onCheckTodo.bind(this, todo.id)}/>
                ))}
            </div>
        )
    }
}
