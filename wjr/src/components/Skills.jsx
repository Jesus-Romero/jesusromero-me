import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {
  render() {
    return (
    <div>
      <div className="section-title">
        <h5 className="section-title-c">Skills</h5>
      </div>
      <div className="skills-block">
        <div className="skills-sections">
          <div className="skills-section-header">
            <b className="section-title-c skills-section-header">Languages</b>
          </div>
          <p className="section-text-c skills-tighten">Java</p>
          <p className="section-text-c skills-tighten">Python</p>
          <p className="section-text-c skills-tighten">SQL</p>
          <p className="section-text-c skills-tighten">C</p>
          <p className="section-text-c skills-tighten">JavaScript</p>
        </div>
        <div className="skills-sections">
          <div className="skills-section-header">
            <b className="section-title-c skills-section-header">Data Management</b>
          </div>
          <p className="section-text-c skills-tighten">UML Design</p>
          <p className="section-text-c skills-tighten">Firebase</p>
          <p className="section-text-c skills-tighten">PostgreSQL</p>
        </div>
        <div className="skills-sections">
          <div className="skills-section-header">
            <b className="section-title-c skills-section-header">Tools</b>
          </div>
          <p className="section-text-c skills-tighten">Git</p>
          <p className="section-text-c skills-tighten">Docker</p>
          <p className="section-text-c skills-tighten">REST API</p>
          <p className="section-text-c skills-tighten">AWS EC2</p>
        </div>
        <div className="skills-sections">
          <div className="skills-section-header">
            <b className="section-title-c">Frameworks</b>
          </div>
          <p className="section-text-c skills-tighten">Flask</p>
          <p className="section-text-c skills-tighten">React</p>
          <p className="section-text-c skills-tighten">Selenium</p>
        </div>
      </div>
    </div>
    );
  }
}

export default Skills;
