import { Item } from "../Item/Item";
import CardGroup from 'react-bootstrap/CardGroup';
import { Container, Col, Row } from "react-bootstrap";

export const ItemList = ({ products }) => {

    return (
        <Container>
            <Row>
                <CardGroup>
                    { products.map((product) => {
                        return (
                            <>
                            <Col xs={6} md={6} lg={4}>
                                <Item 
                                    key={product.id}
                                    {...product} />
                            </Col>
                            </>
                        )
                    })}
                </CardGroup>
            </Row>
        </Container>
    )
}