import React, { Component } from "react";
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import './App.css';

import Nombre from "./components/nombre";

import "bootstrap/dist/css/bootstrap.min.css"
import ProgressBar from "react-bootstrap/ProgressBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClipboard, faClock} from "@fortawesome/free-solid-svg-icons";

library.add(faClipboard, faClock);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPic:"",
      pictureLoaded: false
    }
  }

  componentDidMount = async () => {
    const user = await axios.get("https://randomuser.me/api/");
    this.setState({
      userPic: user.data.results[0].picture.medium,
      pictureLoaded: true
    })
  }

  render () {
  return (
    <div className="App">
      <header>
        <div className="contHeader">
          <h1 className="titleHeader">Título de formulario</h1>
          <FontAwesomeIcon icon="clipboard" size="5x" className="faIcon"></FontAwesomeIcon>
        </div>
        <p className="subtitleHeader">
          <FontAwesomeIcon icon="clock" size="1x"></FontAwesomeIcon>
          <space> </space>En menos de 5 minutos
        </p>
      </header>
      <ProgressBar now={33.3}/>

      <Container>
        <Row>
          <Col xs={3}>
            {this.state.pictureLoaded ? <img src={this.state.userPic} alt="user" className="userPic"></img> : <p></p>}
          </Col>
          <Col>
            <Route exact path="/" render= {() => ( <Nombre/>)} />
          </Col>
        </Row>
      </Container>      
    </div>
  );
}
}

export default App;
