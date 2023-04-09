import React from "react";
import logourbe from "../img/logourbe.png"
import Navbar from "../components/Navbar";
import { Button, Form, FormGroup, Input} from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {


    return(

           <div className="Login">
        <div className='container justify-content-center text-center shadow p-3 mb-5 bg-body border border-primary rounded' style={{
            width: 400,
            marginTop: 40
          }}>

            
            <div>
            <img src={logourbe} alt="" style={{
              marginTop: 20,
              width: '50%',
            }}/>
            </div>
            <h5>
                construcción del cronograma
                de asesorías de pasantías académicas
            </h5>
            <div style={{
              padding: 20
            }}>
              <div>
                <Button   style={{
                  background: "#001d92",
                  margin: 5,
                  width: 150
                }} href="/alumno">
                  Pasante
                </Button>
                <Button style={{
                  background: "#001d92",
                  margin: 5,
                  width: 150
                }} href="/tutor">
                  Tutor
                </Button>
              </div>
              <Button style={{
                  background: "#990000",
                  margin: 5,
                  width: 150
                }}>
                  Agenda
                </Button>
            </div>
          </div>

           </div>
    )
}

export default Login