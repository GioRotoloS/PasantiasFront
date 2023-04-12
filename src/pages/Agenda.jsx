import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar"
import Combobox from "react-widgets/Combobox";
import { Button, Col, Form, FormGroup, Input, Label, Row ,Modal,ModalHeader, ModalBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Agenda = (args) => {

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
                    Agenda de Pasantes
                </div>

                <div className='container shadow p-3 mb-5 border border-primary rounded' style={{
                    marginTop: 10,
                    background: '#efefef'
                }}>
                    <Form style={{
                        marginBottom: 20
                    }}>
                        
                    </Form>
              

                    

                    <div  className='container p-3 mb-5 border border-danger rounded' style={{
                        width: '90%',
                        height: '100%',
                        marginTop: 20,
                        background: "#BFCDC1"
                    }}>

                       
<table class="table table-hover">
<thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Correo</th>
      <th scope="col">Tutor</th>
      <th scope="col">Periodo</th>
      <th scope="col">Asesoria 1</th>
      <th scope="col">Asesoria 2</th>
      <th scope="col">Asesoria 3</th>
      <th scope="col">Asesoria 4</th>
    </tr>
    
  </thead>
 
</table>

                                    

                                </div>
                          

                    
                    
                </div>

            </div>
           

            
        </div>
    )
}

export default Agenda