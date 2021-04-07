import React, {Component} from 'react';
import { Form } from 'react-bootstrap';

class Nombre extends Component {


render () {
    return (
        <div className="nombre">
            <div>
                <h1 className="titleComp">¿Cuál es tu nombre?</h1>
                <Form>
                    <Form.Group controlId="name1">
                        <Form.Control type="text" placeholder="Nombre" size="lg"/>
                    </Form.Group>
                    <Form.Group controlId="name2">
                        <Form.Control type="text" placeholder="Segundo nombre" size="lg"/>
                    </Form.Group>
                    <Form.Group controlId="lastName1">
                        <Form.Control type="text" placeholder="Apellido paterno" size="lg"/>
                    </Form.Group>
                    <Form.Group controlId="lastName2">
                        <Form.Control type="text" placeholder="Apellido materno" size="lg"/>
                    </Form.Group>
                </Form>
            </div>

        </div>
        
    )
}
}

export default Nombre