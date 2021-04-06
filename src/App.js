import React, { Component } from "react";
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import './App.css';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClipboard} from "@fortawesome/free-solid-svg-icons";

library.add(faClipboard);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render () {
  return (
    <div className="App">
      <header>
        <Container>
          <Row>
            <Col sm={8}>
              <h1>Título de Formulario</h1>
            </Col>
            <Col sm={4}>
              <FontAwesomeIcon icon="clipboard" size="2x"></FontAwesomeIcon>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}
}

export default App;
