import { useContext, useState } from "react"
import { CartContext } from "../../contexts/CartContext";
import { collection, Timestamp, addDoc, getFirestore } from "firebase/firestore";
import { Button, Container } from "react-bootstrap";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm";
import { Link } from "react-router-dom";

export const Checkout = () => {
    const [orderId, setOrderId] = useState('');

    const { cart, cartTotal, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
            const order = {
                buyer: { 
                    name, phone, email
                },
                items: cart,
                total: cartTotal(),
                date: Timestamp.fromDate(new Date())
            }
            console.log(order)

        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        
        await addDoc(orderCollection, order)
            .then(({ id }) => setOrderId(id))
           
        clearCart();
    }

    if(orderId) {
        return (
            <Container>
                <h1>El id de su orden es: {orderId}</h1>
                <Button>
                    <Link to={'/'}
                        style={{color: 'white',
                        textDecoration: 'none'}}>Volver al Home</Link>
                </Button>
            </Container>
        )
    }

    return (
        <Container>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </Container>
    )
}