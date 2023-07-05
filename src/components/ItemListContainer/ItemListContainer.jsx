import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";
import './ItemListContainer.css'

export const ItemListContainer = () => {
    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)
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
            setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            setLoading(false)})
            //
            .catch((error) => {
                console.log(error)
            });
    }, [categoryId]);

    //if (!products) return <CardSkeleton />

    return (
        <>
            <Container>
                <h2>Productos</h2>
            </Container>
            <Container className="skeleton-container">
                 { loading && <CardSkeleton cards={5}/> }
            </Container>
           
            { !loading && <ItemList products={products} /> }
            
        </>
    )
}