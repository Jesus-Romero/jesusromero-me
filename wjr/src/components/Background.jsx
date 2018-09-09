import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Background.css';

class Background extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
              <Col xs="3" className="section-title"><h5 className="section-title-c">Background</h5></Col>
              <Col xs="6" className="section-text"><h6 className="section-text-c">I'm a recent Graduate that attended The University of Texas at Austin.</h6></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Background;
