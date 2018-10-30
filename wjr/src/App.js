import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
    <div>
      <div className="nav nav-a" id="disp-nav">
        <p><a href="#home" className="section-title-c">home</a></p>
        <p><a href="#about" className="section-title-c">about</a></p>
        <p><a href="#skills" className="section-title-c">skills</a></p>
        <p><a href="#projects" className="section-title-c">projects</a></p>
        <p><a href="#contact" className="section-title-c">contact</a></p>
      </div>


    	<a id="home"></a><Home/>
      <a id="about"></a><About/>
      <a id="skills"></a><Skills/>
      <a id="projects"></a><Projects/>
      <a id="contact"></a><Contact/>
    </div>
    );
  }
}

export default App;
