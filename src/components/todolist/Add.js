import React, { Component } from 'react';
import {Consumer} from '../Context';

export default class Add extends Component {

    state = {
        id: -1,
        task: '',
        isChecked: false
    }

    handleKeyPress = (dispatch, e) =>{
        if(e.which === 13){
            dispatch({
                type: 'ADD_TASK',
                payload: this.state
            });
            e.target.value = '';
        }
    }

    handleOnChange = (length, e) =>{
        this.setState({
            task: e.target.value,
            id: length + 1,
            isChecked: false
        });
    }

    render() {
        return (
            <Consumer>
                {value => {
                    return(
                    <div>
                        <div className={(value.isAddBlock ? "flex" : "hidden") + " " + "w-full h-16 text-left text-black border-l-2 border-transparent hover:border-pink-700"}>
                            <div className="flex-initial self-center w-full h-full">
                                <input className="w-full h-full p-3 outline-none focus:border-pink-700" type="text" placeholder="Type your task ..." onKeyPress={this.handleKeyPress.bind(this, value.dispatch)} onChange={this.handleOnChange.bind(this, value.todos.length)}/>
                            </div>
                        </div>
                    </div>
                    )
                }}
            </Consumer>
        )
    }
}
