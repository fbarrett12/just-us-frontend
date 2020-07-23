import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions'
import SidebarIcon from './SidebarIcon'
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

const NavigationBar = () => {
//   const dispatch = useDispatch()
//   const handleLogout = () => {
//     dispatch(userActions.logoutUser())
//   }

//   const [isOpen, setIsOpen] = useState({
//     isOpen: true
//   })

return(
    <>    
        <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href="/">JUST US</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Form className="form-center">
                        <FormControl type="text" placeholder="Search" className="" />
                    </Form>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Link to="/signup">Signup</Link>
                    </Nav.Item> 
                    <Nav.Item>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    </>  
)     
} 
export default NavigationBar