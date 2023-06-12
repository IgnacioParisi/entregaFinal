import { CartWidget } from "../CartWidget/CartWidget";
import Logo from '../../assets/cava-selecta-logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

export const NavBar = () => {
    return (
        <Navbar expand="md" variant="dark" className="navbar" >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand style={{ marginLeft: 16 }}>
                    <Link to={'/'}><img src={ Logo } alt="Cava Selecta logo" /></Link>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to={'/'} className='nav-link'>Home</NavLink>
                        <NavLink to={'/category/vinos'} className='nav-link'>Vinos</NavLink>
                        <NavLink to={'/category/espumantes'} className='nav-link'>Espumantes</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}