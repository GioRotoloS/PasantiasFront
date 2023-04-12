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
        hour1_1: "",
        hour1_2: "",
        hour1_3: "",
        hour1_4: "",
        hour1_5: "",
        hour1_6: "",
        hour1_7: "",
        hour1_8: "",
        hour1_9: "",
        hour1_10: "",
        day_2: "",
        hour2_1: "",
        hour2_2: "",
        hour2_3: "",
        hour2_4: "",
        hour2_5: "",
        hour2_6: "",
        hour2_7: "",
        hour2_8: "",
        hour2_9: "",
        hour2_10: "",
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
                                    height: "90%"
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
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Input
                                                id="Hour"
                                                name="hour1_1"
                                                type="select"
                                                onChange={handleChange}
                                                >
                                                    <option disabled selected>
                                                        Primera Hora
                                                    </option>
                                                    <option>
                                                        4:20PM a 4:40PM
                                                    </option>
                                                    <option>
                                                        4:40PM a 5:00PM
                                                    </option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Input
                                                id="Hour"
                                                name="hour1_2"
                                                type="select"
                                                onChange={handleChange}
                                                >
                                                    <option disabled selected>
                                                        Segunda Hora
                                                    </option>
                                                    <option>
                                                        5:00PM a 5:20PM
                                                    </option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Input
                                                id="Hour"
                                                name="hour1_3"
                                                type="select"
                                                onChange={handleChange}
                                                >
                                                    <option disabled selected>
                                                        Tercera Hora
                                                    </option>
                                                    <option>
                                                        5:20PM a 5:40PM
                                                    </option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Input
                                                id="Hour"
                                                name="hour1_4"
                                                type="select"
                                                onChange={handleChange}
                                                >
                                                    <option disabled selected>
                                                        Cuarta Hora
                                                    </option>
                                                    <option>
                                                        5:40PM a 6:00PM
                                                    </option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Input
                                                id="Hour"
                                                name="hour1_5"
                                                type="select"
                                                onChange={handleChange}
                                                >
                                                    <option disabled selected>
                                                        Quinta Hora
                                                    </option>
                                                    <option>
                                                        6:00PM a 6:20PM
                                                    </option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Input
                                                id="Hour"
                                                name="hour1_6"
                                                type="select"
                                                onChange={handleChange}
                                                >
                                                    <option disabled selected>
                                                        Sexta Hora
                                                    </option>
                                                    <option>
                                                        6:20PM a 6:40PM
                                                    </option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Input
                                                id="Hour"
                                                name="hour1_7"
                                                type="select"
                                                onChange={handleChange}
                                                >
                                                    <option disabled selected>
                                                        Septima Hora
                                                    </option>
                                                    <option>
                                                        6:40PM a 7:00PM
                                                    </option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Input
                                                id="Hour"
                                                name="hour1_8"
                                                type="select"
                                                onChange={handleChange}
                                                >
                                                    <option disabled selected>
                                                        Octava Hora
                                                    </option>
                                                    <option>
                                                        7:00PM a 7:20PM
                                                    </option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Input
                                                id="Hour"
                                                name="hour1_9"
                                                type="select"
                                                onChange={handleChange}
                                                >
                                                    <option disabled selected>
                                                        Novena Hora
                                                    </option>
                                                    <option>
                                                        7:20PM a 7:40PM
                                                    </option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Input
                                                id="Hour"
                                                name="hour1_10"
                                                type="select"
                                                onChange={handleChange}
                                                >
                                                    <option disabled selected>
                                                        Decima Hora
                                                    </option>
                                                    <option>
                                                        7:40PM a 8:00PM
                                                    </option>
                                                    <option>
                                                        8:00PM a 8:20PM
                                                    </option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col>
                                <div className='container p-3 mb-5 bg-body border border-danger rounded' style={{
                                    height: "90%"
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
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Input
                                                id="Hour"
                                                name="hour2_1"
                                                type="select"
                                                onChange={handleChange}
                                                >
                                                    <option disabled selected>
                                                        Primera Hora
                                                    </option>
                                                    <option>
                                                        4:20PM a 4:40PM
                                                    </option>
                                                    <option>
                                                        4:40PM a 5:00PM
                                                    </option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Input
                                                id="Hour"
                                                name="hour2_2"
                                                type="select"
                                                onChange={handleChange}
                                                >
                                                    <option disabled selected>
                                                        Segunda Hora
                                                    </option>
                                                    <option>
                                                        5:00PM a 5:20PM
                                                    </option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Input
                                                id="Hour"
                                                name="hour2_3"
                                                type="select"
                                                onChange={handleChange}
                                                >
                                                    <option disabled selected>
                                                        Tercera Hora
                                                    </option>
                                                    <option>
                                                        5:20PM a 5:40PM
                                                    </option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Input
                                                id="Hour"
                                                name="hour2_4"
                                                type="select"
                                                onChange={handleChange}
                                                >
                                                    <option disabled selected>
                                                        Cuarta Hora
                                                    </option>
                                                    <option>
                                                        5:40PM a 6:00PM
                                                    </option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Input
                                                id="Hour"
                                                name="hour2_5"
                                                type="select"
                                                onChange={handleChange}
                                                >
                                                    <option disabled selected>
                                                        Quinta Hora
                                                    </option>
                                                    <option>
                                                        6:00PM a 6:20PM
                                                    </option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Input
                                                id="Hour"
                                                name="hour2_6"
                                                type="select"
                                                onChange={handleChange}
                                                >
                                                    <option disabled selected>
                                                        Sexta Hora
                                                    </option>
                                                    <option>
                                                        6:20PM a 6:40PM
                                                    </option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Input
                                                id="Hour"
                                                name="hour2_7"
                                                type="select"
                                                onChange={handleChange}
                                                >
                                                    <option disabled selected>
                                                        Septima Hora
                                                    </option>
                                                    <option>
                                                        6:40PM a 7:00PM
                                                    </option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Input
                                                id="Hour"
                                                name="hour2_8"
                                                type="select"
                                                onChange={handleChange}
                                                >
                                                    <option disabled selected>
                                                        Octava Hora
                                                    </option>
                                                    <option>
                                                        7:00PM a 7:20PM
                                                    </option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Input
                                                id="Hour"
                                                name="hour2_9"
                                                type="select"
                                                onChange={handleChange}
                                                >
                                                    <option disabled selected>
                                                        Novena Hora
                                                    </option>
                                                    <option>
                                                        7:20PM a 7:40PM
                                                    </option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Input
                                                id="Hour"
                                                name="hour2_10"
                                                type="select"
                                                onChange={handleChange}
                                                >
                                                    <option disabled selected>
                                                        Decima Hora
                                                    </option>
                                                    <option>
                                                        7:40PM a 8:00PM
                                                    </option>
                                                    <option>
                                                        8:00PM a 8:20PM
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