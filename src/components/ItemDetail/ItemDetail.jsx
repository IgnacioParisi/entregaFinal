import './ItemDetail.css'
import Card from 'react-bootstrap/Card';
import { ItemCount } from '../ItemCount/ItemCount';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';

export const ItemDetail = ({ id, title, description, price, stock, imageUrl }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem } = useContext(CartContext);

    const onAdd = (quantity) => {
        setQuantity(quantity);

        const item = {id, title, price};

        addItem(item, quantity);
    }

    return (
        <Container className='item-detail-container'>
            <Card className='item-detail-card'>
            <Card.Img variant="top" src={imageUrl} alt={'Imagen producto'} className='product-img' />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Subtitle>$ {price}</Card.Subtitle>
                    {
                        quantity > 0 ? ( 
                            <Button>
                                <Link to={'/cart'}
                                style={{color: 'white',
                                textDecoration: 'none'}}>Terminar la compra</Link>
                            </Button>)
                            :
                            (<ItemCount stock={stock} initial={1} onAdd={onAdd}/>)
                    }
                </Card.Body>
            </Card>
        </Container>
    )
}