import { Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Logo from '../../assets/cava-selecta-logo.png';
import './Footer.css'

export const Footer = () => {

    return (
        <div className="footer-container">
            <Container className="footer-wrp">
                <img src={ Logo } alt="Logo"/>
                <div className="footer-links">
                    <NavLink to={'/'} className='nav-link'>Home</NavLink>
                    <NavLink to={'/category/vinos'} className='nav-link'>Vinos</NavLink>
                    <NavLink to={'/category/espumantes'} className='nav-link'>Espumantes</NavLink>
                </div>
            </Container>
        </div>
    )
}