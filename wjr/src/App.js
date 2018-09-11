import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div>
      	<Home />
        <About />
        <Skills />
      </div>
    );
  }
}

export default App;
