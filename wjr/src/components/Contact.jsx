import React, { Component } from 'react';
import './Contact.css';

class About extends Component {
  render() {
    return (
    <div className="signature-block">
      <h5 className="section-text-c"> Get in Touch </h5>
      <div className="contact-me">
        <p><a href="mailto:ejesusromero@gmail.com"><img src="https://i.imgur.com/xThw5ov.png" width="20" height="20" className="contact-logo"/><font className="contact-size">eJesusRomero@gmail.com</font></a></p>
        <p><a href="https://www.linkedin.com/in/inJesusRomero"><img src="https://i.imgur.com/jgg8tiS.png" width="20" height="20" className="contact-logo"/><font className="contact-size">inJesusRomero</font></a></p>
        <p><a href="https://www.github.com/Jesus-Romero"><img src="https://i.imgur.com/zWcYEFj.png" width="20" height="20" className="contact-logo"/><font className="contact-size">Jesus-Romero</font></a></p>
        <p><a href="https://www.facebook.com/fJesusRomero"><img src="https://i.imgur.com/Mnti9Dc.png" width="20" height="20" className="contact-logo"/><font className="contact-size">fJesusRomero</font></a></p>
        <p><a href="https://twitter.com/tJesusRomero"><img src="https://i.imgur.com/k6KKh2q.png" width="20" height="20" className="contact-logo"/><font className="contact-size">tJesusRomero</font></a></p>
      </div>
      <div className="section-title-c signature">
        developed by jesus romero, 2018
      </div>
    </div>
    );
  }
}

export default About;
