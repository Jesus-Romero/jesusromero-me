import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <section>
        <div className="section-title section-title-c">About</div>


        <div className="block">
          <div className="section-text">
            <p className="section-text-c">&emsp;&emsp;Hello! I'm Jesus Romero, a recent UT Austin Graduate with an interest in Software Engineering, Web Development, and Cloud Operations.
            I'm seeking roles that will supply me with Full-Stack and/or DevOps experience in an industry setting to harbor proper Engineering/Development habits, and
            eventually work on challenging projects with new technologies.</p>
          </div>


          <img src="https://i.imgur.com/E06FD0L.png" width="20" height="20"/>
          <a href="../static/resume.pdf" className="section-title-c resume" target="_blank">Resume</a>
        </div>
      </section>
    );
  }
}

export default About;
