import React, { Component } from "react";
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import './App.css';

import Nombre from "./components/nombre"

import "bootstrap/dist/css/bootstrap.min.css"
import ProgressBar from "react-bootstrap/ProgressBar";

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
    console.log(user.data.results[0].picture)
    this.setState({
      userPic: user.data.results[0].picture.large,
      pictureLoaded: true
    })
  }

  render () {
    console.log(this.state.userPic)
  return (
    <div className="App">
      <header>
        <div className="container">
          <h1 className="titleHeader">Título de formulario</h1>
          <FontAwesomeIcon icon="clipboard" size="5x" className="faIcon"></FontAwesomeIcon>
        </div>
        <p className="subtitleHeader">
          <FontAwesomeIcon icon="clock" size="1x"></FontAwesomeIcon>
          <space> </space>En menos de 5 minutos
        </p>
      </header>
      <ProgressBar now={33.3}/>
      <section>
        {this.state.pictureLoaded ? <img src={this.state.userPic} alt="user picture"></img> : <p></p>}
        
      </section>

      <Route path="/" render= {(props) => ( <Nombre/>)} />
    </div>
  );
}
}

export default App;
