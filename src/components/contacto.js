import React, {Component} from 'react';
import { Form } from 'react-bootstrap';

class Contacto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            cel: "",
            captured: false,
            finished: false
        }
        console.log(props)
    }

    handleData = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
            captured: true
        })
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
        <div className="forma">
            <div>
                <h1 className="titleComp">Datos de Contacto</h1>
                <Form>
                    <Form.Group>
                        <Form.Control 
                            type="email" 
                            placeholder="Correo electrónico" 
                            size="lg" 
                            name="email" 
                            onChange={this.handleData}
                            autofocus="true"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            type="tel" 
                            placeholder="Teléfono celular" 
                            size="lg" 
                            name="cel" 
                            onChange={this.handleData}
                            onKeyUp={this.hitEnter}/>
                    </Form.Group>
                </Form>
            </div>
            {this.state.captured ? 
                <div className="printData">
                    <p>Correo electrónico: {this.state.email}</p>
                    <p>Teléfono celular: {this.state.cel} </p>
                </div> 
                : <space></space>}
        </div>
        
    )
}
}

export default Contacto