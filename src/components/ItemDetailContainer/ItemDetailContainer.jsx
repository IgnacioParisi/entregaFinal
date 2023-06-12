import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
//import { getProductsById } from "../../asyncMock";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, 'products', id);
        getDoc(docRef).then((snapshot => {
            if(snapshot.exists()) {
                setProduct({ id: snapshot.id, ...snapshot.data() });
            }
        }));
    }, [id]);

    return (
        <>
          <ItemDetail {...product}/>
        </>
    )
}