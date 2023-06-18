import { useContext, useState } from "react"
import { CartContext } from "../../contexts/CartContext";
import { Button, Container } from "react-bootstrap";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm";
import { Link } from "react-router-dom";
import { collection, 
        Timestamp, 
        addDoc, 
        getFirestore, 
        writeBatch,
        query,
        where,
        getDocs, 
        documentId} from "firebase/firestore";

export const Checkout = () => {
    const [orderId, setOrderId] = useState('');

    const { cart, cartTotal, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
    
           
        try { 
            const order = {
                buyer: { 
                    name, phone, email
                },
                items: cart,
                total: cartTotal(),
                date: Timestamp.fromDate(new Date())
            }

            const db = getFirestore();

            const batch = writeBatch(db);

            const outOfStock = [];

            const cartIds = cart.map(product => product.id);

            const productsRef = collection(db, 'products');

            const productsAddedFromDb = await getDocs(query(productsRef), where(documentId(), 'in', cartIds));

            const { docs } = productsAddedFromDb;

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productsInCart = cart.find(product => product.id === doc.id);
                
                if(productsInCart) {
                    const productQuantity =  productsInCart.quantity;

                    if(stockDb >= productQuantity) {
                        batch.update(doc.ref, { stock: stockDb - productQuantity});
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc});
                    }
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderCollection = collection(db, "orders");
            
                await addDoc(orderCollection, order)
                    .then(({ id }) => setOrderId(id))
                
                clearCart();
            } else {
                console.error('Hay productos que están fuera de stock.')
            }

        } catch (error) {
        console.log(error)
        }

    }

    if(orderId) {
        return (
            <Container className="order-checkout-container">
                <h1>¡Gracias por tu compra!</h1>
                <h3>El id de su orden es: {orderId}</h3>
                <Button variant="primary">
                    <Link to={'/'} style={{color: 'white', textDecoration: 'none'}}>Volver al Home</Link>
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