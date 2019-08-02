import React, { Component } from 'react';
import {Consumer} from '../Context';
import classnames from 'classnames';
import axios from 'axios';

export default class Add extends Component {

    state = {
        title: '',
        completed: false,
        error: null
    }

    handleKeyPress = async (dispatch, e) =>{
        if(e.which === 13){

            if(this.state.title === ''){
                this.setState({error: 'Task can\'t be blank'});
                return;
            }

            try{
                const res = await axios.post('https://jsonplaceholder.typicode.com/todos', this.state);
                dispatch({
                    type: 'ADD_TASK',
                    payload: res.data
                });
            }
            catch(e){
                console.log(e);
            }
            
            this.setState({
                title: '',
                completed: false,
                error: null
            });
        }
    }

    handleOnChange = (e) =>{
        this.setState({
            title: e.target.value,
            completed: false,
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
                                    placeholder= {(this.state.error === null) ? 'Type your task title ...' : this.state.error}
                                    onKeyPress={this.handleKeyPress.bind(this, value.dispatch)}
                                    onChange={this.handleOnChange}
                                    value={this.state.title}/>
                            </div>
                        </div>
                    </div>
                    )
                }}
            </Consumer>
        )
    }
}
