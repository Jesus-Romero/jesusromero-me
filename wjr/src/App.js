import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Background from './components/Background';
import Skills from './components/Skills';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div>
      	<Home />
        <Background />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default App;
