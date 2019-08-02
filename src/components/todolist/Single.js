import React, { Component } from 'react';
import { Consumer } from '../Context';

export default class Single extends Component {

    handleCheck(id, dispatch) {
        dispatch({
            type:'CHECK_TODO',
            payload: id
        });
    }

    render() {
        const {id, title, completed} = this.props.data;

        return (
            <Consumer>
                {value=>(
                    <div className="flex w-full h-16 text-left py-3 border-l-2 border-transparent hover:border-pink-700">
                        <div className="flex-initial self-center px-3">
                            <label className="toggleButton">
                                <input type="checkbox" checked={completed} onChange={this.handleCheck.bind(this, id, value.dispatch)}/>
                                <div>
                                    <svg viewBox="0 0 44 44">
                                        <path d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758" transform="translate(-2.000000, -2.000000)"></path>
                                    </svg>
                                </div>
                            </label>
                        </div>
                        <div className="flex-initial self-center">
                            <p className={completed ? 'line-through' : ''}>{title}</p>
                        </div>
                    </div>
                )}
            </Consumer>

        )
    }
}
