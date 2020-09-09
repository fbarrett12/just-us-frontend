import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions'
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
                <Navbar.Brand href="/" className="form-center">
                    JUST US
                </Navbar.Brand>

                <Nav className="ml-auto">
                    <Nav.Item>
                        <Link to="/signup">Sign Up</Link>
                    </Nav.Item> 
                    <Nav.Item>
                        <Link to="/login">Log In</Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </Styles>
    </>  
)     
} 
export default NavigationBar