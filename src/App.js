import React, { Component } from 'react';
import { Provider } from './components/Context';

import './App.css';
import Box from './components/todolist/Box';

export default class App extends Component {
  render() {
    return (
      <Provider>
        <div className="flex self-center justify-center bg-gray-100 w-full h-screen text-center font-sans">
          <Box></Box>
        </div>
      </Provider>
    )
  }
}

