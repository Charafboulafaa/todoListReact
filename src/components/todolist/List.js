import React, { Component } from 'react'
import Single from './Single';
import { Consumer } from '../Context';

export default class List extends Component {
    render() {
        return (
            <Consumer>
                {value=>(
                    <div className="flex flex-col h-full w-full overflow-y-scroll bg-gray-100">
                        {value.todos.map((todo)=>(
                            <Single key={todo.id} data={todo}/>
                        ))}
                    </div>
                )}
            </Consumer>
        )
    }
}
