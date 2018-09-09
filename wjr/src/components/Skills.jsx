import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Skills.css';

class Skills extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
              <Col xs="3" className="section-title"><h5 className="section-title-c">Skills</h5></Col>
              <Col xs="6" className="section-text"><h6 className="section-text-c">Hello, My Skills include</h6></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Skills;
