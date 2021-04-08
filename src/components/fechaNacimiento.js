import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import Contacto from "./contacto"

class FechaDeNacimiento extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dia: "",
            mes: "",
            anio: "",
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
        this.props.updatePercentage(66.7)
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
            <Contacto user={this.props} dia={this.state.dia} mes={this.state.mes} anio={this.state.anio} updatePercentage={this.props.updatePercentage}/>
        :             
        <div>
            <Form className="forma">
            <h1 className="titleComp">¿Cuál es tu fecha de nacimiento?</h1>
                <Form.Group>
                    <Form.Control 
                        type="number" 
                        placeholder="Día" 
                        size="lg" 
                        name="dia" 
                        onChange={this.handleData}
                        autofocus="true"/>
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        type="text" 
                        placeholder="Mes" 
                        size="lg" 
                        name="mes" 
                        onChange={this.handleData}/>
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        type="number" 
                        placeholder="Año" 
                        size="lg" 
                        name="anio" 
                        onChange={this.handleData}
                        onKeyUp={this.hitEnter}/>
                </Form.Group>
            </Form>
        
            {this.state.captured ? 
                <div className="printData">
                <p>{this.state.dia} {this.state.mes} {this.state.anio} </p>
            </div> 
        : <space></space>}
        </div> }
        <br></br>
    </div>
    )
}
}

export default FechaDeNacimiento