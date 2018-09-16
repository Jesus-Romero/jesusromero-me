import React, { Component } from 'react';
import './Contact.css';

class About extends Component {
  render() {
    return (
    <div>
      <div className="section-title">
        <h6 className="section-text-c"> Get in Touch </h6>
      </div>
      <div className="signature-block">
        <div className="contact-me">
          <font className="contact-size contact-logo"><a href="mailto:ejesusromero@gmail.com" target="_blank"><img src="https://i.imgur.com/xThw5ov.png" width="20" height="20" className="contact-logo" />eJesusRomero@gmail.com</a></font>
          <font className="contact-size contact-logo"><a href="https://www.linkedin.com/in/inJesusRomero" target="_blank"><img src="https://i.imgur.com/jgg8tiS.png" width="20" height="20" className="contact-logo" />inJesusRomero</a></font>
          <font className="contact-size contact-logo"><a href="https://www.github.com/Jesus-Romero" target="_blank"><img src="https://i.imgur.com/zWcYEFj.png" width="20" height="20" className="contact-logo" />Jesus-Romero</a></font>
          <font className="contact-size contact-logo"><a href="https://www.facebook.com/fJesusRomero" target="_blank"><img src="https://i.imgur.com/Mnti9Dc.png" width="20" height="20" className="contact-logo" />fJesusRomero</a></font>
          <font className="contact-size contact-logo"><a href="https://twitter.com/tJesusRomero" target="_blank"><img src="https://i.imgur.com/k6KKh2q.png" width="20" height="20" className="contact-logo" />tJesusRomero</a></font>
        </div>
        <div className="section-title-c signature">
          developed by jesus romero, 2018
        </div>
      </div>
    </div>
    );
  }
}

export default About;
