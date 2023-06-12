import { useState } from "react";
import Button from 'react-bootstrap/Button';

export const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setCounter] = useState(initial);

    const decrement = () => {
        if (quantity > 1) {
            setCounter( prev => prev - 1);
        }
    }

    const increment = () => {
        if (quantity < stock) {
            setCounter( prev => prev + 1);
        }
    }
  
    return (
        <div className="item-count">
            <div></div>
            <Button onClick={ decrement } variant="danger">-</Button>
            <p className="item">{quantity}</p>
            <Button onClick={ increment } variant="primary">+</Button>
            <Button onClick={() => onAdd(quantity)} disabled={!stock} variant="primary" style={{marginLeft: "50px"}}>
                Agregar al carrito
            </Button>
        </div>
    )
}