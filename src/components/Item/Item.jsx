import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export const Item = ({ id, title, description, price, stock, imageUrl }) => {
    return (
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" style={{ width: '60%'}} src={ imageUrl } />
                <Card.Body style={{ textAlign:'center' }} >
                    <Card.Title>{ title }</Card.Title>
                    <Card.Text>
                        { description }
                    </Card.Text>
                    <Card.Title>$ { price }</Card.Title>
                    <Button variant="primary">
                        <Link to={`/item/${id}`} 
                            style={{color: 'white',
                            textDecoration: 'none'}}
                            >Ver detalle</Link>
                    </Button>
                </Card.Body>
            </Card>
    )
}
