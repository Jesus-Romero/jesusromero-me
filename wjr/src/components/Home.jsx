import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
    <div>
      <div className="site-title-box">

        <header className="line-adjustment-name">
          <font class="Home-name Home-name-a">Jesus Romero</font>
        </header>


        <p className="line-adjustment-title">
          <b className="Home-title Home-currenttitle-a">Current Title:</b> <font className="Home-title Home-thetitle-a">Recent Graduate</font>
        </p>


        <div className="logo-block">
          <a href="https://twitter.com/tJesusRomero" target="_blank"><img src="https://i.imgur.com/k6KKh2q.png" width="37" height="37" className="logo Home-twitter-a"/></a>
          <a href="https://www.facebook.com/fJesusRomero" target="_blank"><img src="https://i.imgur.com/Mnti9Dc.png" width="37" height="37" className="logo Home-facebook-a"/></a>
          <a href="https://www.github.com/Jesus-Romero" target="_blank"><img src="https://i.imgur.com/zWcYEFj.png" width="37" height="37" className="logo Home-github-a"/></a>
          <a href="https://www.linkedin.com/in/inJesusRomero" target="_blank"><img src="https://i.imgur.com/jgg8tiS.png" width="37" height="37" className="logo Home-in-a"/></a>
          <a href="mailto:ejesusromero@gmail.com" target="_blank"><img src="https://i.imgur.com/xThw5ov.png" width="37" height="37" className="logo Home-email-a"/></a>
        </div>
      </div>
      <img src="https://i.imgur.com/pvmlUGb.png" width="40" height="30" class="indicator Home-indicator-a"/>
    </div>
    );
  }
}

export default Home;
