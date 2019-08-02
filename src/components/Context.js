import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'CHECK_TODO':
            return{
                todos: state.todos.map((todo)=>{
                    if(todo.id === action.payload)
                        todo.completed = !todo.completed
                    return todo;
                })
            };
        case 'TOGGLE_ADD':
            return{
                isAddBlock: !state.isAddBlock
            };
        case 'ADD_TASK':
            return{
                todos: [action.payload, ...state.todos]
            };
        default:
            return state;
    }
}

export class Provider extends Component {

    async componentDidMount(){
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
        this.setState({
            todos: res.data.reverse()
        });
    }

    state = {
        todos:[
            {
                id:1,
                title: 'Morning run',
                completed: false
            },
            {
                id:2,
                title: 'Learning ReactJS',
                completed: true
            },
            {
                id:3,
                title: 'Practice and improve skills',
                completed: false
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
