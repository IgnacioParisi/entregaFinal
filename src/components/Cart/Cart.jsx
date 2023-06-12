import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Link } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import deleteIcon from '../../assets/trash-can1.png';

export const Cart = () => {
    const { cart, totalQuantity, removeItem, cartTotal } = useContext(CartContext);

    if(totalQuantity() === 0) {
        return (
            <Container>
                <div>
                    <h2>No hay items en el carrito</h2>
                    <Link to={'/'}>Volver a la página principal</Link>
                </div>
            </Container>
        )
    }

    return (
        <>
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product) => {
                        return (
                            <tr>
                                <td key={product.id}>{ product.title }</td>
                                <td key={product.id}>$ { product.price }</td>
                                <td key={product.id}>x { product.quantity }</td>
                                <Button variant="secondary" onClick={() => removeItem(product.id)} >
                                    <img src={ deleteIcon } alt="delete-icon" />
                                </Button>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <th>Total</th>
                    <th>$ { cartTotal() }</th>
                </tfoot>
            </Table>
            <Button>
                <Link to={'/checkout'} style={{color: 'white', textDecoration: 'none'}}>
                    Checkout
                </Link>
            </Button>
        </Container>
        </>
    )
}