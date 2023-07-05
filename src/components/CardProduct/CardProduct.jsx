import { Button, Container } from "react-bootstrap";
import Imagen from '../../assets/product-1.jpeg'
import './CardProduct.css'

export const CardProduct = () => {

    return (
        <Container className="producs-section">
            <div className="card-container">
                <div className="image-container">
                    <img src={Imagen} alt="imagen product" className="product-image" />
                </div>
                <div className="card-body">
                    <span className="card-subtitle">Category</span>
                    <h5 className="card-title">Card Title</h5>
                    <div className="card-price-container">
                        <span className="card-price">$2000</span>
                    </div>
                </div>
                <Button className="card-btn" size="sm">
                    Ver detalle
                </Button>
            </div>
            <div className="card-container">
                <div className="image-container">
                    <img src={Imagen} alt="imagen product" className="product-image" />
                </div>
                <div className="card-body">
                    <span className="card-subtitle">Category</span>
                    <h5 className="card-title">Card Title</h5>
                    <div className="card-price-container">
                        <span className="card-price">$2000</span>
                    </div>
                </div>
                <Button className="card-btn" size="sm">
                    Ver detalle
                </Button>
            </div>
        </Container>
    )
}