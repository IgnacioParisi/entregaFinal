import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Item.css';

export const Item = ({ id, title, price, imageUrl }) => {
    return (
        <>
            <div className="card-container">
                <div className="image-container">
                    <img src={imageUrl} alt={ title } className="product-image" />
                </div>
                <div className="card-body">
                    {/* <span className="card-subtitle">{ category }</span> */}
                    <h6 className="card-title">{ title }</h6>
                    <div className="card-price-container">
                        <span className="card-price">$ { price }</span>
                    </div>
                </div>
                <Button className="card-btn" size="sm">
                    <Link to={`/item/${id}`}
                        style={{color: 'white', textDecoration: 'none'}}
                        >Ver detalle</Link>
                </Button>
            </div>
        </>
    )
}
