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
    }

    handleData = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
            captured: true
        })
        this.props.updatePercentage(100)
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
            <div>
                <Form className="forma">
                <h1 className="titleComp">Datos de contacto</h1>
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
            <div>
                <div className="printData">
                    <p>Correo electrónico: {this.state.email}</p>
                    <p>Teléfono celular: {this.state.cel} </p>
                </div> 
                <div>
                    <br></br>
                    <p className="final">Si tus datos son correctos por favor continuemos</p>
                    <button type="submit" className="btn">Iniciar</button>
                    <div className="printDataFinal">
                        <p>Fecha de Nacimiento: {this.props.dia} {this.props.mes} {this.props.anio}</p>
                        <p>Correo electrónico: {this.state.email}</p>
                        <p>Teléfono celular: {this.state.cel} </p>
                        <p>Nombre: {this.props.user.nombre1} {this.props.user.nombre2} {this.props.user.apellido1} {this.props.user.apellido2}</p>
                    </div> 
                </div>
            </div>
                : <space></space>}
        </div>
        
    )
}
}

export default Contacto