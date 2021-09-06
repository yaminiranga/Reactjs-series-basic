import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import ParentComponent from './components/ParentComponent'
import ChildComponent from './components/ChildComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComponent/>
        <h1>This line is new</h1>
      </div>
    )
  }
}

export default App;
