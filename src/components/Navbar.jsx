import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import logonav from "../img/logonav.png"

function Menu(args) {


  return (
    <div>
      <Navbar style={{
        background: '#efefef',
        width: '100%',
        height: 90
      }}>
        <NavbarBrand href="/" style={{
          height: 80
        }}>
        <img src={logonav} alt="" style={{
          marginLeft: 20,
          width: '100%',
          height: '100%'
        }}/>
        </NavbarBrand>
          <Nav>
            <NavItem>
            <Button   style={{
                  background: "#001d92",
                  margin: 5,
                  width: 100
                }} href="/alumno">
                  Pasante
                </Button>
            </NavItem>
            <NavItem>
            <Button style={{
                  background: "#001d92",
                  margin: 5,
                  width: 100
                }} href="/tutor">
                  Tutor
                </Button>
            </NavItem>
            <NavItem>
            <Button style={{
                  background: "#001d92",
                  margin: 5,
                  width: 100
                }}href="/agenda">
                  Agenda
                </Button>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Menu;