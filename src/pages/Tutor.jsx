import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar"
import Combobox from "react-widgets/Combobox";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Tutor = () => {

    const [inputs, setInputs] = useState({
        name: "",
        email: ""
    });

    const [err,setError] = useState(null)

    const navigate = useNavigate()

    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e =>{
        e.preventDefault()

        try{
            
            await axios.post("/tutors/add", inputs)
            navigate("/");

        }catch(err){
            setError(err.response.data)
        }
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
                                <Button onClick={handleSubmit} style={{
                                background: "#990000"
                                }}>
                                Validar
                                </Button>
                            </Col>
                        </Row>
                    </Form>
              

                    <div>
                        <Row>
                            <Col md={4}>
                                <Combobox
                                    placeholder="Periodo"
                                    data={["Enero/Abril", "Mayo/Agosto", "Septiembre/Diciembre"]}
                                />
                            </Col>
                        </Row>
                    </div>

                    <div  className='container p-3 mb-5 border border-danger rounded' style={{
                        width: '90%',
                        marginTop: 20,
                        background: "#364eaf"
                    }}>

                        <Row>
                            <Col>
                                <div className='container p-3 mb-5 bg-body border border-danger rounded'>

                                    <div className="justify-content-center text-center" style={{
                                        marginBottom: 10
                                    }}>
                                        Dia 1
                                    </div>

                                    <Col md={6}>
                                        <Combobox
                                            placeholder="Dia de la Asesoria"
                                            data={["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]}
                                        />
                                    </Col>

                                    <Form style={{
                                        marginTop: 20
                                    }}>
                                        <Row>
                                            <Col md={6}>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora1" type="checkbox" />
                                                    <Label>
                                                    4:20PM a 4:40PM
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora2" type="checkbox" />
                                                    <Label>
                                                    4:40PM a 5:00PM
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora3" type="checkbox" />
                                                    <Label>
                                                    5:00PM a 5:20PM
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora4" type="checkbox" />
                                                    <Label>
                                                    5:20PM a 5:40PM
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora5" type="checkbox" />
                                                    <Label>
                                                    5:40PM a 6:00PM
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora6" type="checkbox" />
                                                    <Label>
                                                    6:00PM a 6:20PM
                                                    </Label>
                                                </FormGroup>
                                            </Col>

                                            <Col md={6}>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora7" type="checkbox" />
                                                    <Label>
                                                    6:20PM a 6:40PM
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora8" type="checkbox" />
                                                    <Label>
                                                    6:40PM a 7:00PM
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora9" type="checkbox" />
                                                    <Label>
                                                    7:00PM a 7:20PM
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora10" type="checkbox" />
                                                    <Label>
                                                    7:20PM a 7:40PM
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora11" type="checkbox" />
                                                    <Label>
                                                    7:40PM a 8:00PM
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora12" type="checkbox" />
                                                    <Label>
                                                    8:00PM a 8:20PM
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        
                                    </Form>

                                </div>
                            </Col>
                            <Col>
                                <div className='container p-3 mb-5 bg-body border border-danger rounded'>

                                <div className="justify-content-center text-center" style={{
                                        marginBottom: 10
                                    }}>
                                        Dia 2
                                    </div>

                                    <Col md={6}>
                                        <Combobox
                                            placeholder="Dia de la Asesoria"
                                            data={["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]}
                                        />
                                    </Col>

                                    <Form style={{
                                        marginTop: 20
                                    }}>
                                        <Row>
                                            <Col md={6}>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora1" type="checkbox" />
                                                    <Label>
                                                    4:20PM a 4:40PM
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora2" type="checkbox" />
                                                    <Label>
                                                    4:40PM a 5:00PM
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora3" type="checkbox" />
                                                    <Label>
                                                    5:00PM a 5:20PM
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora4" type="checkbox" />
                                                    <Label>
                                                    5:20PM a 5:40PM
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora5" type="checkbox" />
                                                    <Label>
                                                    5:40PM a 6:00PM
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora6" type="checkbox" />
                                                    <Label>
                                                    6:00PM a 6:20PM
                                                    </Label>
                                                </FormGroup>
                                            </Col>

                                            <Col md={6}>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora7" type="checkbox" />
                                                    <Label>
                                                    6:20PM a 6:40PM
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora8" type="checkbox" />
                                                    <Label>
                                                    6:40PM a 7:00PM
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora9" type="checkbox" />
                                                    <Label>
                                                    7:00PM a 7:20PM
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora10" type="checkbox" />
                                                    <Label>
                                                    7:20PM a 7:40PM
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora11" type="checkbox" />
                                                    <Label>
                                                    7:40PM a 8:00PM
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup
                                                    check
                                                >
                                                    <Input name="hora12" type="checkbox" />
                                                    <Label>
                                                    8:00PM a 8:20PM
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        
                                    </Form>

                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="justify-content-center text-center">
                        <Button 
                        size="lg"
                        style={{
                        background: "#990000"
                        }}>
                        Registrar Horario
                        </Button>
                    </div>
                    
                </div>

            </div>
           

            
        </div>
    )
}

export default Tutor