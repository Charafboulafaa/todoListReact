import React, { Component } from 'react'

import './App.css';
import Box from './components/todolist/Box';

export default class App extends Component {
  render() {
    return (
      <div className="flex self-center justify-center bg-gray-100 w-full h-screen text-center font-sans">
        <Box></Box>
      </div>
    )
  }
}

