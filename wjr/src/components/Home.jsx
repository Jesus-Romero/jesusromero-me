import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 class="Home-name Home-name-a">Jesus Romero</h1>
        </header>
        <p>
          <b className="Home-title Home-currenttitle-a">Current Title:</b> <p className="Home-title Home-thetitle-a">Recent Graduate</p>
        </p>
      </div>
    );
  }
}

export default Home;
