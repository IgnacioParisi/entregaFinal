import { Item } from "../Item/Item";
import CardGroup from 'react-bootstrap/CardGroup';
import { Container, Col, Row } from "react-bootstrap";

export const ItemList = ({ products }) => {

    return (
        <Container>
            <Row>
                <CardGroup>
                    { 
                        products.length > 0 
                        ? products.map((product) => {
                            return (
                                <Col key={product.id} xs={6} md={6} lg={4}>
                                    <Item 
                                        key={product.id}
                                        {...product} />
                                </Col>
                            )
                        })
                        : <p>Cargando...</p>
                    }
                </CardGroup>
            </Row>
        </Container>
    )
}