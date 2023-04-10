import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar"
import Combobox from "react-widgets/Combobox";
import { Button, Col, Form, FormGroup, Input, Label, Row ,Modal,ModalHeader, ModalBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Tutor = (args) => {

    const [err,setError] = useState(null)

    const navigate = useNavigate()

    const toggle = async e => {
        setModal(!modal);
        e.preventDefault()

        try{
            
            await axios.post("/tutors/add", inputs)
            navigate("/");

        }catch(err){
            
            setError(err.response.data)
        }
    }

    const [modal, setModal] = useState(false);



    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        period: "",
        day_1: "",
        hour1: "",
        day_2: "",
        hour2: ""
    });

    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    return(
        <div className="home" style={{
            width: 1263,
        }}>
            <>
            <Navbar/>
            </>
            <div className="container" style={{
                marginTop: 30,
            }}>

                <div className="justify-content-center text-center">
                    Titulo
                </div>

                <div className='container shadow p-3 mb-5 border border-primary rounded' style={{
                    marginTop: 10,
                    background: '#efefef'
                }}>
                    <Form style={{
                        marginBottom: 20
                    }}>
                        <Row>
                            <Col md={5}>
                            <FormGroup>
                                <Input
                                id="Name"
                                name="name"
                                placeholder="Nombre y Apellido"
                                type="text"
                                onChange={handleChange}
                                />
                            </FormGroup>
                            </Col>
                            <Col md={5}>
                            <FormGroup>
                                <Input
                                id="Email"
                                name="email"
                                placeholder="Correo"
                                type="email"
                                onChange={handleChange}
                                />
                            </FormGroup>
                            </Col>
                            <Col md={2}>
                                {/* <Button style={{
                                background: "#990000"
                                }}>
                                Validar
                                </Button> */}
                            </Col>
                        </Row>
                    </Form>
              

                    <div>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Input
                                    id="Period"
                                    name="period"
                                    placeholder="Periodo"
                                    type="select"
                                    onChange={handleChange}
                                    >
                                        <option disabled selected>
                                            Periodo
                                        </option>
                                        <option>
                                            Enero/Abril
                                        </option>
                                        <option>
                                            Mayo/Agosto
                                        </option>
                                        <option>
                                            Septiembre/Diciembre
                                        </option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>

                    <div  className='container p-3 mb-5 border border-danger rounded' style={{
                        width: '90%',
                        height: '100%',
                        marginTop: 20,
                        background: "#364eaf"
                    }}>

                        <Row>
                            <Col>
                                <div className='container p-3 mb-5 bg-body border border-danger rounded' style={{
                                    height: "80%"
                                }}>

                                    <div className="justify-content-center text-center" style={{
                                        marginBottom: 10
                                    }}>
                                        Dia 1
                                    </div>

                                    <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input
                                            id="Day"
                                            name="day_1"
                                            type="select"
                                            onChange={handleChange}
                                            >
                                                <option disabled selected>
                                                    Dia
                                                </option>
                                                <option>
                                                    Lunes
                                                </option>
                                                <option>
                                                    Martes
                                                </option>
                                                <option>
                                                    Miercoles
                                                </option>
                                                <option>
                                                    Jueves
                                                </option>
                                                <option>
                                                    Viernes
                                                </option>
                                            </Input>
                                        </FormGroup>
                                    </Col>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Input
                                            id="Hour"
                                            name="hour1"
                                            type="select"
                                            onChange={handleChange}
                                            >
                                                <option disabled selected>
                                                    Hora
                                                </option>
                                                <option>
                                                    4:20PM a 7:40PM
                                                </option>
                                                <option>
                                                    4:40PM a 8:00PM
                                                </option>
                                                <option>
                                                    5:20PM a 8:20PM
                                                </option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    </Row>

                                </div>
                            </Col>
                            <Col>
                                <div className='container p-3 mb-5 bg-body border border-danger rounded' style={{
                                    height: "80%"
                                }}>

                                <div className="justify-content-center text-center" style={{
                                        marginBottom: 10
                                    }}>
                                        Dia 2
                                    </div>

                                    <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input
                                            id="Day"
                                            name="day_2"
                                            type="select"
                                            onChange={handleChange}
                                            >
                                                <option disabled selected>
                                                    Dia
                                                </option>
                                                <option>
                                                    Lunes
                                                </option>
                                                <option>
                                                    Martes
                                                </option>
                                                <option>
                                                    Miercoles
                                                </option>
                                                <option>
                                                    Jueves
                                                </option>
                                                <option>
                                                    Viernes
                                                </option>
                                            </Input>
                                        </FormGroup>
                                    </Col>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Input
                                            id="Hour"
                                            name="hour2"
                                            type="select"
                                            onChange={handleChange}
                                            >
                                                <option disabled selected>
                                                    Hora
                                                </option>
                                                <option>
                                                    4:20PM a 7:40PM
                                                </option>
                                                <option>
                                                    4:40PM a 8:00PM
                                                </option>
                                                <option>
                                                    5:20PM a 8:20PM
                                                </option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    </Row>

                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="justify-content-center text-center">
                        <Button 
                        onClick={toggle}
                        size="lg"
                        style={{
                        background: "#990000"
                        }}>
                        Registrar Horario
                        </Button>
                        <Modal className='border border-danger rounded' isOpen={modal} toggle={toggle} {...args}>
                            <ModalHeader style={{
                                background: "#364eaf"
                            }} toggle={toggle}>Error</ModalHeader>
                            <ModalBody>
                            {err && <p>{err}</p>}
                            </ModalBody>
                        </Modal>
                    </div>
                    
                </div>

            </div>
           

            
        </div>
    )
}

export default Tutor