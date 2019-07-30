import React, { Component } from 'react';
import {Consumer} from '../Context';
import classnames from 'classnames';

export default class Add extends Component {

    state = {
        id: -1,
        task: '',
        isChecked: false,
        error: null
    }

    handleKeyPress = (dispatch, e) =>{
        if(e.which === 13){

            if(this.state.task === ''){
                this.setState({error: 'Task can\'t be blank'});
                return;
            }

            dispatch({
                type: 'ADD_TASK',
                payload: this.state
            });
            
            this.setState({
                id: -1,
                task: '',
                isChecked: false,
                error: null
            });
        }
    }

    handleOnChange = (length, e) =>{
        this.setState({
            task: e.target.value,
            id: length + 1,
            isChecked: false,
            error: null
        });
    }

    render() {
        return (
            <Consumer>
                {value => {
                    return(
                    <div>
                        <div className={(value.isAddBlock ? "flex" : "hidden") + " " + "w-full h-16 text-left text-black border-2 border-transparent"}>
                            <div className="flex-initial self-center w-full h-full">
                                <input
                                    className= {classnames("w-full h-full p-3 outline-none", {
                                        'bg-red-500': this.state.error
                                    })}
                                    type="text"
                                    placeholder= {(this.state.error === null) ? 'Type your task ...' : this.state.error}
                                    onKeyPress={this.handleKeyPress.bind(this, value.dispatch)}
                                    onChange={this.handleOnChange.bind(this, value.todos.length)}
                                    value={this.state.task}/>
                            </div>
                        </div>
                    </div>
                    )
                }}
            </Consumer>
        )
    }
}
