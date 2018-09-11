import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {
  render() {
    return (
    <div className="block">
      <div className="section-title">
        <h5 className="section-title-c">About</h5>
      </div>
      <div className="skills-block">
        <div className="skills-sections">
          <b className="section-text-c">Languages</b>
          <p className="section-text-c">Java</p>
          <p className="section-text-c">Python</p>
          <p className="section-text-c">C</p>
          <p className="section-text-c">Swift</p>
          <p className="section-text-c">JavaScript</p>
        </div>
        <div className="skills-sections">
          <b className="section-text-c">Database Management</b>
          <p className="section-text-c">SQL</p>
          <p className="section-text-c">UML Design</p>
          <p className="section-text-c">Firebase</p>
          <p className="section-text-c">PostgreSQL</p>
        </div>
        <div className="skills-sections">
          <b className="section-text-c">Web Development</b>
          <p className="section-text-c">CSS3</p>
          <p className="section-text-c">Docker</p>
          <p className="section-text-c">REST</p>
          <p className="section-text-c">AWS EC2</p>
          <p className="section-text-c">Mocha</p>
        </div>
      </div>
    </div>
    );
  }
}

export default Skills;
