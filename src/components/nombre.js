import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import FechaDeNacimiento from "./fechaNacimiento"

class Nombre extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre1: "",
            nombre2: "",
            apellido1: "",
            apellido2: "",
            captured: false,
            finished: false
        }
    }

    handleData = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
            captured: true
        })
        this.props.updatePercentage(33.3)
    }

    hitEnter = (event) => {
        if (event.keyCode === 13) {
            this.setState({
                finished: true
            })
        }
    }

render () {
    return (
        <div>
            {this.state.finished ?  
                <FechaDeNacimiento nombre1={this.state.nombre1} nombre2={this.state.nombre2} apellido1={this.state.apellido1} apellido2={this.state.apellido2} updatePercentage={this.props.updatePercentage}/>        
             :             
             <div>
                <Form className="forma">
                <h1 className="titleComp">¿Cuál es tu nombre?</h1>
                    <Form.Group>
                        <Form.Control 
                            type="text" 
                            placeholder="Nombre" 
                            size="lg" 
                            name="nombre1" 
                            onChange={this.handleData}
                            autofocus="true"/>
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
                            onChange={this.handleData}
                            onKeyUp={this.hitEnter}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            type="text" 
                            placeholder="Apellido materno" 
                            size="lg" 
                            name="apellido2" 
                            onChange={this.handleData}
                            onKeyUp={this.hitEnter}/>
                    </Form.Group>
                </Form>

                {this.state.captured ? 
                    <div className="printData">
                        <p>{this.state.nombre1} {this.state.nombre2} {this.state.apellido1} {this.state.apellido2}</p>
                    </div> 
                : <space></space> }
            </div> }
            <br></br>
            
         </div>
    )
    
}
}

export default Nombre