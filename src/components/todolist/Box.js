import React, { Component } from 'react';
import Header from './Header';
import List from './List';
import Add from './Add';

export default class Box extends Component {
    render() {
        return (
            <div className="flex flex-col border border-solid border-gray-400 rounded w-2/4 h-auto m-16">
                <Header/>
                <Add/>
                <List/>
            </div>
        )
    }
}
