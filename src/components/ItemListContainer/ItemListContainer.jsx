import { ItemList } from "../ItemList/ItemList";
//import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export const ItemListContainer = ({ greeting }) => {
    
    const [products, setProducts] = useState()
    const { categoryId } = useParams()

    useEffect(() => {
        const db = getFirestore();

        const collectionRef = categoryId
        ? query(collection(db, 'products'), where('categoryId', '==', categoryId))
        : collection(db, "products");

        getDocs(collectionRef)
            .then((snapshot) => {
            setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
    }, [categoryId]);

    //console.log(products);

    if (!products) return <p>Cargando...</p>

    return (
        <>
            <Container>
                <h1>{ greeting }</h1>
            </Container>
            <ItemList products={products} />
        </>
    )
}