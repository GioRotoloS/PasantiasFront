
import React, { useState } from "react";
import Navbar from "../components/Navbar"
import Combobox from "react-widgets/Combobox";
import { Button, Col, Form, FormGroup, Input, Label, Row, Modal,ModalHeader, ModalBody, ModalFooter  } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pdf from "../Pdf";
import { PDFViewer, PDFDownloadLink} from "@react-pdf/renderer";


const Alumno = (args) => {

    const [err,setError] = useState(null)
    const [verPdf, setVerPdf]= useState(false);
    const navigate = useNavigate()

    const toggle = async e => {
        setModal(!modal);
        e.preventDefault()

        try{
            
            await axios.post("/inters/register", inputs)
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
          inter_type: "",
          tutor: "",
          advisorys_day: "",
          advisorys_hour: ""
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
                        marginBottom: 20,
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
                            
                        </Row>
                    </Form>

                    <div>
                        <Row>
                            <Col md={4} style={{
                                marginBottom: 20
                            }}>
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
                            <Col md={4} style={{
                                marginBottom: 20
                            }}>
                                <FormGroup>
                                    <Input
                                    id="Inter_type"
                                    name="inter_type"
                                    placeholder="Tipo de Pasante"
                                    type="select"
                                    onChange={handleChange}
                                    >
                                        <option disabled selected>
                                            Tipo de Pasante
                                        </option>
                                        <option>
                                        PASANTES A MEDIO TIEMPO (6 horas diarias)
                                        </option>
                                        <option>
                                        PASANTES A TIEMPO COMPLETO (8 Horas diarias)
                                        </option>
                                        <option>
                                        PASANTES DE TODO EL PERIODO (8 Horas diarias)
                                        </option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={4} style={{
                                marginBottom: 20
                            }}>
                                <FormGroup>
                                    <Input
                                    id="Tutor"
                                    name="tutor"
                                    placeholder="Tutor"
                                    type="select"
                                    onChange={handleChange}
                                    >
                                        <option disabled selected>
                                            Tutor
                                        </option>
                                        <option>
                                            Tutor 1
                                        </option>
                                        <option>
                                            Tutor 2
                                        </option>
                                        <option>
                                            Tutor 3
                                        </option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>

                    <div  className='container p-3 mb-5 border border-danger rounded' style={{
                        width: '90%',
                        marginTop: 20,
                        background: "#364eaf"
                    }}>

                        <Col md={4}>
                            <FormGroup>
                                <Input
                                id="Advisorys_day"
                                name="advisorys_day"
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

                        <div className='container p-3 mb-5 bg-body border border-danger rounded' style={{
                        width: '90%',
                        marginTop: 20
                    }}>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <FormGroup
                                        check
                                    >
                                        <Input 
                                        id="Advisorys_hour"
                                        name="advisorys_hour"
                                        type="radio"
                                        value="4:20PM a 4:40PM"
                                        onChange={handleChange} 
                                        />
                                        <Label>
                                        4:20PM a 4:40PM
                                        </Label>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                    >
                                        <Input 
                                        id="Advisorys_hour"
                                        name="advisorys_hour"
                                        type="radio"
                                        value="4:40PM a 5:00PM"
                                        onChange={handleChange} 
                                        />
                                        <Label>
                                        4:40PM a 5:00PM
                                        </Label>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                    >
                                        <Input 
                                        id="Advisorys_hour"
                                        name="advisorys_hour"
                                        type="radio"
                                        value="5:00PM a 5:20PM"
                                        onChange={handleChange} 
                                        />
                                        <Label>
                                        5:00PM a 5:20PM
                                        </Label>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                    >
                                        <Input 
                                        id="Advisorys_hour"
                                        name="advisorys_hour"
                                        type="radio"
                                        value="5:20PM a 5:40PM"
                                        onChange={handleChange} 
                                        />
                                        <Label>
                                        5:20PM a 5:40PM
                                        </Label>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                    >
                                        <Input 
                                        id="Advisorys_hour"
                                        name="advisorys_hour"
                                        type="radio"
                                        value="5:40PM a 6:00PM"
                                        onChange={handleChange} 
                                        />
                                        <Label>
                                        5:40PM a 6:00PM
                                        </Label>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                    >
                                        <Input 
                                        id="Advisorys_hour"
                                        name="advisorys_hour"
                                        type="radio"
                                        value="6:00PM a 6:20PM"
                                        onChange={handleChange} 
                                        />
                                        <Label>
                                        6:00PM a 6:20PM
                                        </Label>
                                    </FormGroup>
                                </Col>

                                <Col md={6}>
                                    <FormGroup
                                        check
                                    >
                                        <Input 
                                        id="Advisorys_hour"
                                        name="advisorys_hour"
                                        type="radio"
                                        value="6:20PM a 6:40PM"
                                        onChange={handleChange} 
                                        />
                                        <Label>
                                        6:20PM a 6:40PM
                                        </Label>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                    >
                                        <Input 
                                        id="Advisorys_hour"
                                        name="advisorys_hour"
                                        type="radio"
                                        value="6:40PM a 7:00PM"
                                        onChange={handleChange} 
                                        />
                                        <Label>
                                        6:40PM a 7:00PM
                                        </Label>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                    >
                                        <Input 
                                        id="Advisorys_hour"
                                        name="advisorys_hour"
                                        type="radio"
                                        value="7:00PM a 7:20PM"
                                        onChange={handleChange} 
                                        />
                                        <Label>
                                        7:00PM a 7:20PM
                                        </Label>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                    >
                                        <Input 
                                        id="Advisorys_hour"
                                        name="advisorys_hour"
                                        type="radio"
                                        value="7:20PM a 7:40PM"
                                        onChange={handleChange} 
                                        />
                                        <Label>
                                        7:20PM a 7:40PM
                                        </Label>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                    >
                                        <Input 
                                        id="Advisorys_hour"
                                        name="advisorys_hour"
                                        type="radio"
                                        value="7:40PM a 8:00PM"
                                        onChange={handleChange} 
                                        />
                                        <Label>
                                        7:40PM a 8:00PM
                                        </Label>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                    >
                                        <Input 
                                        id="Advisorys_hour"
                                        name="advisorys_hour"
                                        type="radio"
                                        value="8:00PM a 8:20PM"
                                        onChange={handleChange} 
                                        />
                                        <Label>
                                        8:00PM a 8:20PM
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                            
                        </Form>
                    </div>
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
           

            <PDFDownloadLink
        document={<Pdf  />}
        fileName="cronograma.pdf"
      >
        <Button variant="info">Descargar PDF</Button>
      </PDFDownloadLink>


        </div>

        
    )
   
}
  

export default Alumno;