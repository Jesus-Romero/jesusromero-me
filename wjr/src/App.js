import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Background from './components/Background'

class App extends Component {
  render() {
    return (
      <div>
      	<Home />
        <Background />
      </div>
    );
  }
}

export default App;
