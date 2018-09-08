import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 class="Home-name Home-name-a">Jesus Romero</h1>
        </header>
        <p className="Home-title Home-title-a">
          <b>Current Title:</b> Recent Graduate
        </p>
      </div>
    );
  }
}

export default Home;
