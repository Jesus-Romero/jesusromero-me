import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <h1 className="My-name">Jesus Romero</h1>
        </header>
        <h3 className="Personal-intro">
          Current Title: Recent Graduate
        </h3>
      </div>
    );
  }
}

export default App;
