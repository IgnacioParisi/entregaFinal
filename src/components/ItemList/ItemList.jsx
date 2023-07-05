import { Item } from "../Item/Item";
import { Container } from "react-bootstrap";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";
import './ItemList.css'

export const ItemList = ({ products }) => {

    return (
        <Container className="products-section">
            { 
                products.length > 0 
                ? products.map((product) => {
                    return (
                        <Item 
                            key={product.id}
                            {...product} />
                    )
                })
                : <CardSkeleton />
            }
        </Container>
    )
}