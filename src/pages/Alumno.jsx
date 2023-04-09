import React from "react";
import Navbar from "../components/Navbar"
import Combobox from "react-widgets/Combobox";
import { Button, Col, Form, FormGroup, Input, Label, Row, Modal,ModalHeader, ModalBody, ModalFooter  } from "reactstrap";



class Alumno extends React.Component{
    state={
        open: false,
    }

   abrirPop=()=>{
      this.setState({open: !this.state.open})
   }

    render(){
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
                                />
                            </FormGroup>
                            </Col>
                            

                            <Col md={2}>
                                <Button onClick={this.abrirPop} style={{
                                background: "#990000"
                                }}>
                                Validar
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                   

                     <Modal isOpen= {this.state.open} >
                     
                        <ModalHeader>
                        Error
                        </ModalHeader>
                        <ModalBody>
                         El correo ya se encuentra registrado
                         
                        </ModalBody>
                        <ModalFooter>
                        <Button onClick={this.abrirPop} style={{
                                background: "#990000"
                                }}>
                                Volver
                                </Button>
                        </ModalFooter>
                     </Modal>

                    <div>
                        <Row>
                            <Col md={4} style={{
                                marginBottom: 20
                            }}>
                                <Combobox
                                    placeholder="Periodo"
                                    data={["Enero/Abril", "Mayo/Agosto", "Septiembre/Diciembre"]}
                                />
                            </Col>
                            <Col md={4} style={{
                                marginBottom: 20
                            }}>
                                <Combobox
                                    placeholder="Tipo de Pasante"
                                    data={["Pasante a Medio Tiempo(6 Horas Diarias)", "Pasante a Tiempo Completo (8 Horas Diarias)", "Pasante de Todo el Periodo (8 Horas Diarias)"]}
                                />
                            </Col>
                            <Col md={4} style={{
                                marginBottom: 20
                            }}>
                                <Combobox
                                    placeholder="Dia de la Asesoria"
                                    data={["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]}
                                />
                            </Col>
                        </Row>
                    </div>

                    <div  className='container p-3 mb-5 border border-danger rounded' style={{
                        width: '90%',
                        marginTop: 20,
                        background: "#364eaf"
                    }}>

                        <Col md={4}>
                            <Combobox
                            placeholder="Tutor"
                            data={["Tutor 1", "Tutor 2", "Tutor 3"]}
                            />
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
                                        <Input name="hora" type="radio" />
                                        <Label>
                                        4:20PM a 4:40PM
                                        </Label>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                    >
                                        <Input name="hora" type="radio" />
                                        <Label>
                                        4:40PM a 5:00PM
                                        </Label>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                    >
                                        <Input name="hora" type="radio" />
                                        <Label>
                                        5:00PM a 5:20PM
                                        </Label>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                    >
                                        <Input name="hora" type="radio" />
                                        <Label>
                                        5:20PM a 5:40PM
                                        </Label>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                    >
                                        <Input name="hora" type="radio" />
                                        <Label>
                                        5:40PM a 6:00PM
                                        </Label>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                    >
                                        <Input name="hora" type="radio" />
                                        <Label>
                                        6:00PM a 6:20PM
                                        </Label>
                                    </FormGroup>
                                </Col>

                                <Col md={6}>
                                    <FormGroup
                                        check
                                    >
                                        <Input name="hora" type="radio" />
                                        <Label>
                                        6:20PM a 6:40PM
                                        </Label>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                    >
                                        <Input name="hora" type="radio" />
                                        <Label>
                                        6:40PM a 7:00PM
                                        </Label>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                    >
                                        <Input name="hora" type="radio" />
                                        <Label>
                                        7:00PM a 7:20PM
                                        </Label>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                    >
                                        <Input name="hora" type="radio" />
                                        <Label>
                                        7:20PM a 7:40PM
                                        </Label>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                    >
                                        <Input name="hora" type="radio" />
                                        <Label>
                                        7:40PM a 8:00PM
                                        </Label>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                    >
                                        <Input name="hora" type="radio" />
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

}
    
  

export default Alumno;