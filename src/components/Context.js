import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'CHECK_TODO':
            return{
                todos: state.todos.map((todo)=>{
                    if(todo.id === action.payload)
                        todo.isChecked = !todo.isChecked
                    return todo;
                })
            };
        case 'TOGGLE_ADD':
            return{
                isAddBlock: !state.isAddBlock
            };
        case 'ADD_TASK':
            return{
                todos: [...state.todos, action.payload]
            };
        default:
            return state;
    }
}

export class Provider extends Component {

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
        ],
        isAddBlock: false,
        dispatch: action => this.setState(state => reducer(state, action))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
