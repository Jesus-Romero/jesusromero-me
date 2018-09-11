import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
    <div className="site-title-box">
      <header className="line-adjustment-name">
        <font class="Home-name Home-name-a">Jesus Romero</font>
      </header>
      <p className="line-adjustment-title">
        <b className="Home-title Home-currenttitle-a">Current Title:</b> <font className="Home-title Home-thetitle-a">Recent Graduate</font>
      </p>
    </div>
    );
  }
}

export default Home;
