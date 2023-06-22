import { useContext, useEffect } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Link } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import deleteIcon from '../../assets/trash-can1.png';
import '../styles.css';
import { ConfirmModal } from "../Modal/ConfirmModal";
import { Checkout } from "../Checkout/Checkout";

export const Cart = () => {
    const { cart, totalQuantity, removeItem, cartTotal } = useContext(CartContext);

    useEffect(() => {
        document.title = 'Carrito | Cava Selecta'
    }, []);
 
    if(totalQuantity() === 0) {
        return (
            <Container>
                <div>
                    <h2>No hay items en el carrito</h2>
                    <Link to={'/'}
                    >Volver a la página principal</Link>
                </div>
            </Container>
        )
    }

    return (
        <Container style={{display: 'flex', marginTop: 40}}>
            <Checkout />
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th colSpan={2}>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((product) => {
                                return (
                                    <tr key={product}>
                                        <td key={product.id}><img src={product.imageUrl} alt="Product" width={40} textalign={'center'}/></td>
                                        <td key={product.id}>{ product.title }</td>
                                        <td key={product.id}>{ product.quantity }</td>
                                        <td key={product.id}>$ { product.price }</td>
                                        <Button variant="primary" onClick={() => removeItem(product.id)} >
                                            <img src={ deleteIcon } alt="delete-icon" />
                                        </Button>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot>
                        <th colSpan={3}>Total</th>
                        <th>$ { cartTotal() }</th>
                    </tfoot>
                </Table>
                {/* <Button>
                    <Link to={'/checkout'}  style={{color: 'white', textDecoration: 'none'}}>
                        Checkout
                    </Link>
                </Button> */}
                <ConfirmModal />
            </Container>
        </Container>
    )
}