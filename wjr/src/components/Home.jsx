import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Home.css';

class Home extends Component {
  render() {
    return (
    <div className="text-right">
        <Container>
          <Row>
            <Col xs="4" className="Home-alignment">
              <p className="line-adjustment">
                <header>
                  <h1 class="Home-name Home-name-a">Jesus Romero</h1>
                </header>
                <font className="Home-title Home-currenttitle-a">Current Title:</font> <font className="Home-title Home-thetitle-a">Recent Graduate</font>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
