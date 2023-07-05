import { CartWidget } from "../CartWidget/CartWidget";
import Logo from '../../assets/cava-selecta-logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useLocation } from "react-router-dom";
import './navbar.css'
import { useEffect, useState } from "react";

export const NavBar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    
    const [navbar, setNavbar] = useState(true);

    
    const navbarBg = () => {
        if(navbar && window.scrollY >= 60) {
            setNavbar(false)
        } else {
            setNavbar(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', navbarBg);

        return () => {
            window.removeEventListener('scroll', navbarBg);
        }

    }, [])

    return (
        <Navbar expand="md" variant="dark" className={navbar && isHomePage ? 'navbar' : 'navbar active'} sticky="top" >
            <Container style={{position: "relative"}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand>
                    <Link to={'/'}><img src={ Logo } alt="Cava Selecta logo" /></Link>
                </Navbar.Brand>
                <CartWidget className='cart-widget'/>
                <Navbar.Collapse id="basic-navbar-nav active" className="justify-content-end">
                    <Nav className="mx-auto">
                        <NavLink to={'/'} className='nav-link'>Home</NavLink>
                        <NavLink to={'/category/vinos'} className='nav-link'>Vinos</NavLink>
                        <NavLink to={'/category/espumantes'} className='nav-link'>Espumantes</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}