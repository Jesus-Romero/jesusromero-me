import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <section className="block">
        <div className="section-title">
          <h5 className="section-title-c">About</h5>
        </div>
        <div className="section-text">
          <font className="section-text-c">Hello! I'm Jesus Romero, a recent UT Austin Graduate with an interest in Software Engineering, Web Development, and Cloud Operations.
          I'm seeking roles that will supply me with Full-Stack and/or DevOps experience in an industry setting to harbor proper Engineering/Development habits and
          eventually work on challenging projects. </font>
        </div>
      </section>
    );
  }
}

export default About;
