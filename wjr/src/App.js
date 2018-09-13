import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div>
    	<Home/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
    );
  }
}

export default App;
