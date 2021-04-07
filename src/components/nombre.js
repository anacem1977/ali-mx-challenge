import React, {Component} from 'react';
import { Form } from 'react-bootstrap';

class Nombre extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre1: "",
            nombre2: "",
            apellido1: "",
            apellido2: "",
            captured: false
        }
    }

    handleData = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
            captured: true
        })
        console.log(this.state.nombre1)
        console.log(this.state.nombre2)
        console.log(this.state.apellido1)
        console.log(this.state.apellido2)
        console.log(this.state.captured)
    }

    captureUserData = async (event) => {
        event.preventDefault();
        this.setState({
          captured: true
        })
        console.log(this.state.captured)
      }


render () {
    return (
        <div className="nombreCompleto">
            <div>
                <h1 className="titleComp">¿Cuál es tu nombre?</h1>
                <Form>
                    <Form.Group>
                        <Form.Control 
                            type="text" 
                            placeholder="Nombre" 
                            size="lg" 
                            name="nombre1" 
                            onChange={this.handleData}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            type="text" 
                            placeholder="Segundo nombre" 
                            size="lg" 
                            name="nombre2" 
                            onChange={this.handleData}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            type="text" 
                            placeholder="Apellido paterno" 
                            size="lg" 
                            name="apellido1" 
                            onChange={this.handleData}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            type="text" 
                            placeholder="Apellido materno" 
                            size="lg" 
                            name="apellido2" 
                            onChange={this.handleData}/>
                    </Form.Group>
                </Form>
            </div>
            {this.state.captured ? 
                <div className="printData">
                    <p>{this.state.nombre1} {this.state.nombre2} {this.state.apellido1} {this.state.apellido2}</p>
                </div> 
                : <space></space>}
        </div>
        
    )
}
}

export default Nombre