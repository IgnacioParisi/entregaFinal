import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState()
    const { categoryId } = useParams()

    useEffect(() => {
        if(categoryId) {
            const title = categoryId;
            const firstLetter = title.charAt(0);
            const firstLetterCap = firstLetter.toUpperCase();
            const remainingLetters = title.slice(1);
            const capitalizedTitle = firstLetterCap + remainingLetters;
    
            document.title = `${capitalizedTitle} | Cava Selecta`;
        } else {
            document.title = `Cava Selecta`;
        }
    }, [categoryId])

    useEffect(() => {
        const db = getFirestore();

        const collectionRef = categoryId
        ? query(collection(db, 'products'), where('categoryId', '==', categoryId))
        : collection(db, "products");

        getDocs(collectionRef)
            .then((snapshot) => {
            setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))})
            .catch((error) => {
                console.log(error)
            });
    }, [categoryId]);

    if (!products) return <p>Cargando...</p>

    return (
        <>
            <Container>
                <h2>Productos</h2>
            </Container>
            <ItemList products={products} />
        </>
    )
}